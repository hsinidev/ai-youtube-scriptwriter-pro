export interface ScriptSegment {
  timestamp: string;
  narration: string;
  broll: string;
}

export type ApiProvider = 'gemini' | 'ollama';
