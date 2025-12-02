import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 mb-4">
      <div className="container mx-auto max-w-5xl flex justify-between items-center glass-panel rounded-2xl shadow-lg p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
            AI
          </div>
          <h1 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            YouTube Scriptwriter
          </h1>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};