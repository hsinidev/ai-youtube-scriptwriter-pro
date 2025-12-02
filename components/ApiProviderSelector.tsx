import React from 'react';
import { ApiProvider } from '../types';

interface ApiProviderSelectorProps {
  provider: ApiProvider;
  setProvider: (provider: ApiProvider) => void;
  ollamaUrl: string;
  setOllamaUrl: (url: string) => void;
}

export const ApiProviderSelector: React.FC<ApiProviderSelectorProps> = ({ provider, setProvider, ollamaUrl, setOllamaUrl }) => {
  return (
    <div className="space-y-4 p-4 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900/50">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300">AI Provider</h3>
      <fieldset>
        <legend className="sr-only">AI Provider</legend>
        <div className="flex items-center space-x-6">
          {(['gemini', 'ollama'] as ApiProvider[]).map((option) => (
            <div key={option} className="flex items-center">
              <input
                id={option}
                name="api-provider"
                type="radio"
                checked={provider === option}
                onChange={() => setProvider(option)}
                className="h-4 w-4 text-indigo-600 border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:checked:bg-indigo-500 focus:ring-indigo-500"
              />
              <label htmlFor={option} className="ml-2 block text-sm text-gray-900 dark:text-gray-200 capitalize">
                {option === 'gemini' ? 'Cloud AI' : 'Local Ollama'}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      {provider === 'ollama' && (
        <div className="pt-2">
          <label htmlFor="ollama-url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Ollama Server URL
          </label>
          <input
            type="url"
            id="ollama-url"
            value={ollamaUrl}
            onChange={(e) => setOllamaUrl(e.target.value)}
            placeholder="http://localhost:11434/api/generate"
            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-900 dark:text-white"
          />
        </div>
      )}
    </div>
  );
};
