import React, { useState } from 'react';
import { Header } from './components/Header';
import { ScriptInputForm } from './components/ScriptInputForm';
import { ScriptOutputDisplay } from './components/ScriptOutputDisplay';
import { generateScript } from './services/geminiService';
import { ScriptSegment, ApiProvider } from './types';
import { Footer } from './components/Footer';
import { SeoContent } from './components/SeoContent';

function App() {
  const [script, setScript] = useState<ScriptSegment[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (title: string, outline: string, duration: number, provider: ApiProvider, ollamaUrl?: string) => {
    setIsLoading(true);
    setError(null);
    setScript(null);
    try {
      const generatedScript = await generateScript(title, outline, duration, provider, ollamaUrl);
      setScript(generatedScript);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Note: The main galaxy background is handled in index.html for performance and global scope.
    // Here we ensure the layout floats above it comfortably.
    <div className="min-h-screen text-gray-900 dark:text-gray-100 font-sans flex flex-col relative overflow-x-hidden">
      
      <Header />
      
      <main className="container mx-auto max-w-5xl p-4 sm:p-6 lg:p-8 flex-grow z-10">
        
        {/* Main Application Area - Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="lg:sticky lg:top-8 w-full">
            <ScriptInputForm onGenerate={handleGenerate} isLoading={isLoading} />
          </div>
          <div className="w-full h-full">
            <ScriptOutputDisplay script={script} isLoading={isLoading} error={error} />
          </div>
        </div>

        {/* SEO Article Section */}
        <SeoContent />

      </main>
      
      <Footer />
    </div>
  );
}

export default App;