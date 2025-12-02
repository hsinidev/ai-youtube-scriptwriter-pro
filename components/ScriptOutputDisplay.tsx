import React, { useState, useEffect } from 'react';
import { ScriptSegment } from '../types';
import { ClipboardIcon } from './icons/ClipboardIcon';

interface ScriptOutputDisplayProps {
  script: ScriptSegment[] | null;
  isLoading: boolean;
  error: string | null;
}

const formatScriptForCopy = (script: ScriptSegment[]): string => {
  return script.map(segment => 
    `[${segment.timestamp}]\n\nNARRATION:\n${segment.narration}\n\nB-ROLL / VISUALS:\n${segment.broll}\n\n--------------------\n`
  ).join('\n');
};

export const ScriptOutputDisplay: React.FC<ScriptOutputDisplayProps> = ({ script, isLoading, error }) => {
  const [copyStatus, setCopyStatus] = useState('Copy to Clipboard');

  useEffect(() => {
    if (copyStatus !== 'Copy to Clipboard') {
      const timer = setTimeout(() => setCopyStatus('Copy to Clipboard'), 2000);
      return () => clearTimeout(timer);
    }
  }, [copyStatus]);

  const handleCopy = () => {
    if (script) {
      navigator.clipboard.writeText(formatScriptForCopy(script))
        .then(() => setCopyStatus('Copied!'))
        .catch(() => setCopyStatus('Failed to copy'));
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full space-y-6 py-12">
            <div className="relative">
                <div className="absolute inset-0 bg-indigo-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <svg className="relative animate-spin h-12 w-12 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
            <div className="text-center">
                <p className="text-xl font-medium text-gray-900 dark:text-white">Generating your masterpiece...</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Connecting to AI Neural Network</p>
            </div>
        </div>
      );
    }
    if (error) {
      return (
        <div className="flex flex-col items-center justify-center h-full p-6 text-center">
            <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Generation Failed</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-sm">{error}</p>
        </div>
      );
    }
    if (!script) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center p-8 opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 dark:text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-400">Ready to write.</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">Your generated script will appear here.</p>
        </div>
      );
    }
    return (
      <>
        <div className="flex justify-between items-center mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <span>📜</span> Script Result
          </h2>
          <button 
            onClick={handleCopy}
            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-lg shadow-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all"
          >
            <ClipboardIcon className="w-4 h-4 mr-2" />
            {copyStatus}
          </button>
        </div>
        <div className="space-y-6 custom-scrollbar overflow-y-auto max-h-[800px] pr-2">
          {script.map((segment, index) => (
            <div key={index} className="p-5 rounded-xl bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-900/50 px-3 py-1.5 rounded-full inline-block">
                  ⏱ {segment.timestamp}
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="prose dark:prose-invert">
                  <h3 className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 font-bold mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path></svg>
                    Narration
                  </h3>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap text-base font-serif">{segment.narration}</p>
                </div>
                <div className="prose dark:prose-invert bg-indigo-50/50 dark:bg-indigo-900/20 p-4 rounded-lg">
                  <h3 className="text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400 font-bold mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                    Visuals (B-Roll)
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap text-sm italic">{segment.broll}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="glass-panel p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 min-h-[600px] h-full transition-all duration-300">
      {renderContent()}
    </div>
  );
};