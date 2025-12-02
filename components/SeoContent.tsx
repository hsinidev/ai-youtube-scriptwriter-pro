import React, { useState } from 'react';

export const SeoContent: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-12 glass-panel p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl max-w-5xl mx-auto">
      <div className={`relative transition-all duration-500 ease-in-out ${isExpanded ? 'h-auto' : 'h-32 overflow-hidden'}`}>
        
        {/* Article Header */}
        <header className="mb-8 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-4">
            The Ultimate Guide to AI YouTube Scriptwriting in 2024
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">Unlocking Viral Potential with Doodax AI Scriptwriter</p>
        </header>

        {/* Structured Content with Semantic HTML for SEO */}
        <article className="prose dark:prose-invert prose-indigo max-w-none text-gray-800 dark:text-gray-300">
            
            <section>
                <h2>Introduction: The Revolution of Content Creation</h2>
                <p>
                    In the fast-paced digital landscape of 2024, the demand for high-quality video content has skyrocketed. 
                    Content creators, marketers, and educators are constantly seeking ways to streamline their production workflows without compromising on creativity. 
                    Enter the <strong>AI YouTube Scriptwriter</strong>—a revolutionary tool powered by advanced Large Language Models (LLMs) like Google Gemini and Ollama. 
                    This comprehensive guide explores how Doodax's AI Scriptwriter transforms vague ideas into structured, production-ready scripts complete with narration and visual cues.
                </p>
                <p>
                    Whether you are a seasoned YouTuber with millions of subscribers or a beginner looking to launch your first channel, understanding the mechanics of AI script generation is crucial.
                    This tool not only saves hours of brainstorming and writing but also ensures that your content follows a logical flow, optimizing audience retention and engagement.
                </p>
            </section>

            <section className="bg-gray-100 dark:bg-gray-800/50 p-6 rounded-lg my-8">
                <h3>Table of Contents</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <li>1. What is an AI YouTube Scriptwriter?</li>
                    <li>2. How Doodax Uses Gemini & Ollama Technology</li>
                    <li>3. Key Features of Our Script Generator</li>
                    <li>4. Step-by-Step Guide to Creating Viral Scripts</li>
                    <li>5. The Importance of Narration vs. B-Roll Structure</li>
                    <li>6. Local vs. Cloud AI: Which Should You Choose?</li>
                    <li>7. SEO Benefits of Structured Video Content</li>
                    <li>8. Frequently Asked Questions (FAQ)</li>
                </ul>
            </section>

            <section>
                <h2>1. What is an AI YouTube Scriptwriter?</h2>
                <p>
                    An AI YouTube Scriptwriter is a sophisticated software application that leverages Natural Language Processing (NLP) to generate video scripts. 
                    Unlike simple text generators, this tool understands the nuance of video pacing, tone, and visual storytelling. 
                    It breaks down the traditional barriers of writer's block by taking a simple input—a title and a rough outline—and expanding it into a full-blown screenplay.
                </p>
                <p>
                    At its core, it serves as a digital co-producer. It doesn't just write words; it visualizes the video. 
                    By designating specific timestamps, it helps creators understand exactly how long each segment should be, ensuring the final video meets the target duration.
                </p>
            </section>

            <section>
                <h2>2. How Doodax Uses Gemini & Ollama Technology</h2>
                <p>
                    Our platform, Doodax, integrates two powerful AI engines to provide flexibility and power:
                </p>
                <ul>
                    <li>
                        <strong>Google Gemini (Cloud AI):</strong> Known for its massive context window and reasoning capabilities, Gemini excels at understanding complex topics and generating highly creative, human-like narration. It is perfect for users who want the highest quality output with minimal setup.
                    </li>
                    <li>
                        <strong>Ollama (Local AI):</strong> For the privacy-conscious and tech-savvy, we support Ollama. This allows you to run open-source models like Llama 3 locally on your machine. This means your data never leaves your computer, offering 100% privacy and offline capability.
                    </li>
                </ul>
            </section>

            <section>
                <h2>3. Key Features of Our Script Generator</h2>
                <p>
                    We have meticulously designed this tool to address the specific pain points of video creators:
                </p>
                <h3>Dual-Column Output</h3>
                <p>
                    Standard text editors are insufficient for video scripts. Our tool outputs a structured two-column format: 
                    <strong>Narration</strong> on the left and <strong>B-Roll/Visuals</strong> on the right. 
                    This industry-standard format helps editors visualize the final product before shooting begins.
                </p>
                <h3>Smart Timestamping</h3>
                <p>
                    One of the hardest parts of scriptwriting is pacing. Our AI calculates the estimated speaking time for the narration and assigns timestamps (e.g., 00:00 - 00:45) to each segment, ensuring you hit your 5-minute or 10-minute mark precisely.
                </p>
                <h3>Tone Adaptation</h3>
                <p>
                    Whether you need a script that is educational, comedic, serious, or persuasive, the AI adapts its writing style based on your outline and prompt context.
                </p>
            </section>

            <section>
                <h2>4. Step-by-Step Guide to Creating Viral Scripts</h2>
                <ol>
                    <li>
                        <strong>Define Your Title:</strong> Start with a catchy, SEO-optimized title. For example, "10 Hacks to Productivity" or "The History of Quantum Computing."
                    </li>
                    <li>
                        <strong>Draft an Outline:</strong> You don't need a full draft, just bullet points. List the key takeaways you want to cover. The AI will fill in the gaps.
                    </li>
                    <li>
                        <strong>Select Duration:</strong> Input your desired video length in minutes.
                    </li>
                    <li>
                        <strong>Generate:</strong> Hit the button and watch as the AI constructs a segment-by-segment breakdown of your video.
                    </li>
                </ol>
            </section>

            <section>
                <h2>5. The Importance of Narration vs. B-Roll Structure</h2>
                <p>
                    A "talking head" video can be boring. High-retention videos utilize B-Roll—supplementary footage intercut with the main shot—to keep the viewer visually stimulated. 
                    Our tool forces this structure by explicitly asking the AI to describe the visual action for every line of dialogue. 
                    This prompts creators to film variety, leading to higher audience retention and better YouTube algorithm performance.
                </p>
            </section>

            <section>
                <h2>6. Local vs. Cloud AI: Which Should You Choose?</h2>
                <p>
                    <strong>Choose Cloud (Gemini) if:</strong> You have a stable internet connection, want the absolute smartest logic available, and don't have a powerful GPU.
                </p>
                <p>
                    <strong>Choose Local (Ollama) if:</strong> You handle sensitive proprietary information, have no internet connection, or have a gaming PC/Mac M-series chip that can handle local inference efficiently.
                </p>
            </section>

            <section>
                <h2>7. SEO Benefits of Structured Video Content</h2>
                <p>
                    Using a structured script improves your video's SEO. Clear segments often translate into YouTube "Chapters," which appear in Google Search results. 
                    Furthermore, a well-written script ensures you naturally include keywords in your spoken audio, which YouTube's auto-captioning algorithms pick up to rank your video.
                </p>
            </section>

            <section>
                <h2>8. Frequently Asked Questions (FAQ)</h2>
                <div className="space-y-4">
                    <details className="group p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
                            Is Doodax AI Scriptwriter free?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-2 text-sm">Yes, the tool is free to use. Users utilizing the Cloud API simply need their own free API key from Google.</p>
                    </details>
                    <details className="group p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
                            Can I use the scripts for commercial videos?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-2 text-sm">Absolutely. You own the content generated. The output is yours to film, edit, and monetize.</p>
                    </details>
                    <details className="group p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                        <summary className="font-bold cursor-pointer list-none flex justify-between items-center">
                            Does it support other languages?
                            <span className="transition group-open:rotate-180">▼</span>
                        </summary>
                        <p className="mt-2 text-sm">While optimized for English, modern LLMs like Gemini are multilingual. You can try inputting titles and outlines in other languages for translated results.</p>
                    </details>
                </div>
            </section>

            <section className="mt-8 border-t pt-6">
                <h2>Conclusion</h2>
                <p>
                    Automation is the future of content creation. By integrating the Doodax AI YouTube Scriptwriter into your workflow, you aren't cheating; you are optimizing. 
                    You allow yourself more time to focus on the human elements—delivery, editing, and community engagement—while the AI handles the structural heavy lifting. 
                    Start creating smarter today.
                </p>
            </section>

        </article>

        {/* Gradient Mask for collapsed state */}
        {!isExpanded && (
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 dark:to-transparent flex items-end justify-center pointer-events-none">
            </div>
        )}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="group flex items-center gap-2 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition-all shadow-md hover:shadow-lg z-10"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
          <svg 
            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};