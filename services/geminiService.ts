import { GoogleGenAI, Type } from "@google/genai";
import { ScriptSegment, ApiProvider } from '../types';

const API_KEY = process.env.API_KEY;

const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

const geminiSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      timestamp: {
        type: Type.STRING,
        description: 'The estimated start and end time of the segment, e.g., "00:00 - 00:15".'
      },
      narration: {
        type: Type.STRING,
        description: 'The spoken script for the narrator in this segment.'
      },
      broll: {
        type: Type.STRING,
        description: 'A detailed description of the visual B-roll, on-screen text, or actions for this segment.'
      }
    },
    required: ['timestamp', 'narration', 'broll']
  }
};

const buildPrompt = (title: string, outline: string, duration: number): string => `
  You are an expert YouTube scriptwriter. Your task is to generate a detailed video script based on a title, a high-level outline, and a target duration.

  The output must be a valid JSON array of objects. Each object in the array represents a segment of the video and must have the following three properties:
  1. "timestamp": A string representing the estimated start time of the segment (e.g., "00:00 - 00:15"). Calculate these timestamps to roughly match the target duration.
  2. "narration": A string containing the narrator's script for this segment. This is what the speaker will say.
  3. "broll": A string describing the visual elements, B-roll footage, on-screen text, or actions that should be shown while the narration is happening.

  Based on the following inputs, generate the script:

  Video Title: "${title}"
  Video Outline:
  ---
  ${outline}
  ---
  Target Duration: ${duration} minutes.

  Please ensure the entire script flows logically and the timestamps collectively add up to the target duration. Generate only the raw JSON array, with no other text, explanations, or markdown formatting like \`\`\`json.
`;


const generateWithGemini = async (prompt: string): Promise<ScriptSegment[]> => {
  if (!ai) {
    throw new Error("Cloud AI (Gemini) API key is not configured.");
  }
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: geminiSchema,
      temperature: 0.7,
    }
  });

  const jsonText = response.text.trim();
  const scriptData = JSON.parse(jsonText);
  
  if (!Array.isArray(scriptData)) {
      throw new Error("AI response is not a valid array.");
  }

  return scriptData as ScriptSegment[];
};

const generateWithOllama = async (prompt: string, url: string): Promise<ScriptSegment[]> => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'llama3:8b', // A common default, user should have this model
                prompt: prompt,
                format: 'json',
                stream: false,
            }),
        });

        if (!response.ok) {
            const errorBody = await response.text();
            throw new Error(`Ollama API error (${response.status}): ${errorBody}`);
        }

        const responseData = await response.json();
        const jsonText = responseData.response.trim();
        const scriptData = JSON.parse(jsonText);

        if (!Array.isArray(scriptData)) {
            throw new Error("Ollama response is not a valid JSON array.");
        }
        
        return scriptData as ScriptSegment[];

    } catch(error) {
        if (error instanceof TypeError) { // Network error
            throw new Error(`Could not connect to local Ollama server at ${url}. Please ensure it's running and accessible.`);
        }
        throw error; // Re-throw other errors
    }
};


export const generateScript = async (
    title: string, 
    outline: string, 
    duration: number,
    provider: ApiProvider,
    ollamaUrl?: string
): Promise<ScriptSegment[]> => {
  
  const prompt = buildPrompt(title, outline, duration);

  try {
    if (provider === 'ollama') {
        if (!ollamaUrl) throw new Error("Ollama URL is not provided.");
        return await generateWithOllama(prompt, ollamaUrl);
    }
    // Default to gemini
    return await generateWithGemini(prompt);

  } catch (error) {
    console.error("Error generating script:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to generate script: ${error.message}`);
    }
    throw new Error("An unknown error occurred while generating the script.");
  }
};
