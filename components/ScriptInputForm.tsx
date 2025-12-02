import React, { useState } from 'react';
import { ApiProvider } from '../types';
import { ApiProviderSelector } from './ApiProviderSelector';

interface ScriptInputFormProps {
  onGenerate: (title: string, outline: string, duration: number, provider: ApiProvider, ollamaUrl?: string) => void;
  isLoading: boolean;
}

export const ScriptInputForm: React.FC<ScriptInputFormProps> = ({ onGenerate, isLoading }) => {
  const [title, setTitle] = useState('');
  const [outline, setOutline] = useState('');
  const [duration, setDuration] = useState(5);
  const [provider, setProvider] = useState<ApiProvider>('gemini');
  const [ollamaUrl, setOllamaUrl] = useState('http://localhost:11434/api/generate');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && outline.trim() && duration > 0) {
      onGenerate(title, outline, duration, provider, ollamaUrl);
    }
  };

  return (
    <div className="glass-panel p-6 rounded-2xl shadow-xl transition-all duration-300">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
        <span>🎬</span> Create Your Script
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Video Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., The Ultimate Guide to Making Sourdough Bread"
            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 dark:text-white backdrop-blur-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="outline" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Video Outline
          </label>
          <textarea
            id="outline"
            rows={6}
            value={outline}
            onChange={(e) => setOutline(e.target.value)}
            placeholder="Provide a bulleted list of key points...&#10; - Intro: Hook the audience&#10; - Step 1: Preparation&#10; - Step 2: Execution"
            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 dark:text-white resize-y backdrop-blur-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="duration" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Target Duration (minutes)
          </label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            min="1"
            max="60"
            className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-600 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-gray-900 dark:text-white backdrop-blur-sm"
            required
          />
        </div>

        <ApiProviderSelector 
            provider={provider} 
            setProvider={setProvider} 
            ollamaUrl={ollamaUrl} 
            setOllamaUrl={setOllamaUrl} 
        />

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed transition-all transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isLoading && (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            )}
            {isLoading ? 'Crafting Script...' : '✨ Generate Script'}
          </button>
        </div>
      </form>
    </div>
  );
};