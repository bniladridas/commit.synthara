import React, { useState } from 'react';
import { MessageSquarePlus, Loader2, Copy } from 'lucide-react';
import { improveCommitMessage } from './lib/gemini';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

function App() {
  const [originalMessage, setOriginalMessage] = useState('');
  const [improvedMessage, setImprovedMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleImprove = async () => {
    if (!originalMessage.trim()) {
      setError('Please enter a commit message');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      const improved = await improveCommitMessage(originalMessage);
      setImprovedMessage(improved);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to improve commit message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    if (improvedMessage) {
      await navigator.clipboard.writeText(improvedMessage);
    }
  };

  return (
    <div className="min-h-screen bg-synthara-black py-12 px-4 sm:px-6 lg:px-8 flex flex-col">
      <div className="max-w-2xl mx-auto flex-grow">
        {/* Synthara-styled header */}
        <div className="text-center mb-16 relative">
          {/* Add geometric accent */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-0 w-32 h-32 bg-synthara-red/10 rounded-full blur-3xl"></div>
            <div className="absolute top-10 right-0 w-32 h-32 bg-synthara-red/5 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative">
            <img 
              src="https://avatars.githubusercontent.com/u/203538727?s=200&v=4"
              alt="Synthara Logo"
              className="mx-auto h-20 w-20 mb-8 transform -rotate-6 hover:rotate-0 transition-transform duration-300
                shadow-lg shadow-synthara-red/20 rounded-xl relative z-10"
            />
            {/* Fire effect layers */}
            <div className="absolute inset-0 z-0">
              {/* Main fire glow */}
              <div className="absolute inset-0 animate-pulse">
                <div className="absolute inset-0 bg-gradient-to-t from-synthara-red via-orange-500 to-yellow-300 opacity-30 blur-xl"></div>
              </div>
              {/* Animated flames */}
              <div className="absolute -inset-2 animate-flame-dance">
                <div className="absolute inset-0 bg-gradient-to-t from-synthara-red via-orange-500 to-transparent opacity-40 blur-lg"></div>
              </div>
              <div className="absolute -inset-2 animate-flame-dance-slow">
                <div className="absolute inset-0 bg-gradient-to-t from-red-600 via-orange-400 to-transparent opacity-30 blur-lg"></div>
              </div>
              {/* Ember particles */}
              <div className="absolute -inset-4 animate-ember">
                <div className="absolute w-1 h-1 bg-orange-300 rounded-full blur-sm"></div>
                <div className="absolute w-1 h-1 bg-orange-300 rounded-full blur-sm" style={{ left: '75%', top: '60%' }}></div>
                <div className="absolute w-1 h-1 bg-orange-300 rounded-full blur-sm" style={{ left: '25%', top: '70%' }}></div>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            <span className="text-synthara-red bg-gradient-to-r from-synthara-red to-red-500 text-transparent bg-clip-text">
              Synthara
            </span> Commit
          </h1>
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
            Message Improver
          </h2>
          <p className="text-synthara-light text-lg max-w-xl mx-auto">
            Transform your commit messages into clear, concise formats using Synthara AI
          </p>
        </div>

        {/* After header, before main content */}
        <div className="mb-16">
          {/* Quote Section */}
          <blockquote className="relative mb-16">
            <div className="absolute -top-4 -left-4 text-6xl text-synthara-red opacity-20">
              "
            </div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-synthara-red opacity-20">
              "
            </div>
            <div className="bg-synthara-darker p-8 rounded-2xl border border-synthara-gray/20 relative">
              <p className="text-xl text-white italic mb-4 text-center">
                Good commit messages are like well-written documentation – they tell a story of what changed and why.
              </p>
              <div className="text-synthara-light text-sm text-center">
                <span className="text-synthara-red font-semibold">Linus Torvalds</span>
                <span className="mx-2">•</span>
                <span>Creator of Git and Linux</span>
              </div>
            </div>
          </blockquote>

          {/* After quote, before use cases */}
          <div className="mb-16 bg-synthara-darker rounded-2xl border border-synthara-gray/20 overflow-hidden">
            <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative">
              {/* Background accent */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-synthara-red/20 to-transparent"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-synthara-red/10 rounded-full blur-3xl"></div>
              </div>
              
              {/* Founder image */}
              <div className="relative group">
                <div className="w-48 h-48 rounded-2xl overflow-hidden relative z-10
                  before:absolute before:inset-0 before:bg-gradient-to-b before:from-synthara-red/10 before:to-synthara-darker/80 before:z-10 before:opacity-0 
                  before:transition-opacity hover:before:opacity-100">
                  {/* Geometric background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-synthara-darker via-synthara-dark to-synthara-darker">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-full h-full" 
                        style={{
                          backgroundImage: `linear-gradient(30deg, #ED1C24 12%, transparent 12.5%, transparent 87%, #ED1C24 87.5%, #ED1C24),
                            linear-gradient(150deg, #ED1C24 12%, transparent 12.5%, transparent 87%, #ED1C24 87.5%, #ED1C24),
                            linear-gradient(30deg, #ED1C24 12%, transparent 12.5%, transparent 87%, #ED1C24 87.5%, #ED1C24),
                            linear-gradient(150deg, #ED1C24 12%, transparent 12.5%, transparent 87%, #ED1C24 87.5%, #ED1C24),
                            linear-gradient(60deg, #ED1C2477 25%, transparent 25.5%, transparent 75%, #ED1C2477 75%, #ED1C2477)`,
                          backgroundSize: '40px 70px',
                          backgroundPosition: '0 0, 0 0, 20px 35px, 20px 35px, 0 0'
                        }}
                      />
                    </div>
                  </div>
                  
                  {/* Main image with removed background */}
                  <img
                    src="https://avatars.githubusercontent.com/u/125604915?v=4"
                    alt="Niladri Das"
                    className="w-full h-full object-cover relative z-20
                      transition-all duration-500 ease-out
                      group-hover:scale-105 group-hover:filter group-hover:contrast-110 group-hover:brightness-110
                      transform-gpu will-change-transform mix-blend-luminosity"
                    style={{
                      imageRendering: 'high-quality',
                      backfaceVisibility: 'hidden',
                      maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                      WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                    }}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-synthara-red via-red-500 to-synthara-red rounded-2xl z-0 opacity-30 
                  group-hover:opacity-50 group-hover:blur-sm transition-all duration-500 animate-pulse"></div>
                
                {/* Ambient light effect */}
                <div className="absolute -inset-8 -z-10 transition-all duration-500 group-hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-tr from-synthara-red/20 via-red-500/10 to-transparent blur-2xl"></div>
                  <div className="absolute inset-0 bg-synthara-red/5 rounded-full blur-3xl animate-pulse"></div>
                </div>
                
                {/* Dynamic shine effect */}
                <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl
                  bg-gradient-to-tr from-transparent via-white/10 to-transparent
                  animate-[shine_2s_ease-in-out_infinite]"></div>
              </div>

              {/* Founder info */}
              <div className="flex-1 text-center md:text-left relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Niladri Das
                </h3>
                <div className="text-synthara-red font-semibold mb-4">
                  Founder & CEO
                </div>
                <p className="text-synthara-light mb-6 max-w-2xl">
                  A visionary in AI and software engineering, Niladri founded Synthara to bridge the gap between 
                  developer productivity and AI innovation. His expertise in machine learning and developer tools 
                  drives Synthara's mission to create intelligent solutions for modern development workflows.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a 
                    href="https://github.com/bniladridas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-synthara-light hover:text-synthara-red transition-all hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/bniladridas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-synthara-light hover:text-synthara-red transition-all hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://x.com/bniladridas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-synthara-light hover:text-synthara-red transition-all hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Existing use cases grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-synthara-darker p-6 rounded-xl border border-synthara-gray/20 hover:border-synthara-red/30 transition-all">
              <div className="h-12 w-12 rounded-lg bg-synthara-red/10 flex items-center justify-center mb-4">
                <MessageSquarePlus className="h-6 w-6 text-synthara-red" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Conventional Commits
              </h3>
              <p className="text-synthara-light text-sm">
                Transforms basic messages into standardized format with type, scope, and description
              </p>
              <div className="mt-4 text-xs font-mono bg-synthara-dark/50 p-2 rounded">
                <span className="text-synthara-red">feat</span>
                <span className="text-gray-400">(auth): add OAuth support</span>
              </div>
            </div>

            <div className="bg-synthara-darker p-6 rounded-xl border border-synthara-gray/20 hover:border-synthara-red/30 transition-all">
              <div className="h-12 w-12 rounded-lg bg-synthara-red/10 flex items-center justify-center mb-4">
                <MessageSquarePlus className="h-6 w-6 text-synthara-red" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Issue References
              </h3>
              <p className="text-synthara-light text-sm">
                Automatically links related issue numbers and maintains traceability
              </p>
              <div className="mt-4 text-xs font-mono bg-synthara-dark/50 p-2 rounded">
                <span className="text-gray-400">fix: resolve login error </span>
                <span className="text-synthara-red">(#123)</span>
              </div>
            </div>

            <div className="bg-synthara-darker p-6 rounded-xl border border-synthara-gray/20 hover:border-synthara-red/30 transition-all">
              <div className="h-12 w-12 rounded-lg bg-synthara-red/10 flex items-center justify-center mb-4">
                <MessageSquarePlus className="h-6 w-6 text-synthara-red" />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">
                Status Indicators
              </h3>
              <p className="text-synthara-light text-sm">
                Adds clear status prefixes like WIP, READY, or TESTED to indicate commit state
              </p>
              <div className="mt-4 text-xs font-mono bg-synthara-dark/50 p-2 rounded">
                <span className="text-synthara-red">WIP: </span>
                <span className="text-gray-400">implement user dashboard</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-synthara-dark/50 rounded-lg border border-synthara-gray/20">
            <p className="text-center text-synthara-light text-sm">
              Simply paste your commit message and let Synthara AI transform it into a clear, standardized format following best practices
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-synthara-darker rounded-2xl border border-synthara-gray/20 shadow-xl shadow-black/20 backdrop-blur-xl">
          <div className="p-8 space-y-8">
            {/* Input section */}
            <div>
              <label 
                htmlFor="original" 
                className="block text-sm font-medium text-white mb-3 uppercase tracking-wider"
              >
                Original Commit Message
              </label>
              <textarea
                id="original"
                rows={3}
                className="w-full rounded-xl
                  bg-synthara-dark 
                  border-2 border-synthara-gray/30
                  text-gray-100 
                  placeholder-synthara-light/50
                  p-4
                  focus:outline-none 
                  focus:border-synthara-red
                  focus:ring-2 focus:ring-synthara-red/20
                  transition-all
                  resize-none
                  shadow-inner shadow-black/20
                  selectable-text"
                placeholder="Type your commit message here..."
                value={originalMessage}
                onChange={(e) => setOriginalMessage(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <div className="mt-2 text-xs text-synthara-light text-right font-mono">
                {originalMessage.length} / 72
              </div>
            </div>

            {/* Action button */}
            <div className="flex justify-center">
              <button
                onClick={handleImprove}
                disabled={isLoading}
                className="
                  inline-flex items-center 
                  px-8 py-3
                  bg-synthara-red 
                  hover:bg-red-600 
                  text-white
                  font-medium
                  rounded-xl
                  transition-all
                  shadow-lg shadow-synthara-red/20
                  hover:shadow-synthara-red/30
                  hover:scale-105
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                    IMPROVING...
                  </>
                ) : (
                  <>
                    <MessageSquarePlus className="-ml-1 mr-3 h-5 w-5" />
                    IMPROVE MESSAGE
                  </>
                )}
              </button>
            </div>

            {/* Error message */}
            {error && (
              <div className="text-red-400 text-sm text-center bg-red-900/20 p-4 rounded-xl border border-red-500/20">
                {error}
              </div>
            )}

            {/* Result section */}
            {improvedMessage && (
              <div>
                <label className="block text-sm font-medium text-white mb-3 uppercase tracking-wider">
                  Improved Commit Message
                </label>
                <div className="relative">
                  <div className="rounded-xl bg-synthara-dark border-2 border-synthara-gray/30 p-6
                    shadow-inner shadow-black/20">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      className="prose prose-invert max-w-none text-gray-100 selectable-text"
                    >
                      {improvedMessage}
                    </ReactMarkdown>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="absolute right-4 top-4 p-2 text-white hover:text-synthara-red 
                      bg-synthara-dark rounded-lg border border-synthara-gray/30 
                      transition-all hover:scale-110 hover:shadow-lg"
                    title="Copy to clipboard"
                  >
                    <Copy className="h-5 w-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="mt-16 max-w-2xl mx-auto w-full text-center">
        <div className="border-t border-synthara-gray/20 pt-8 pb-4">
          {/* Report & Feedback Banner */}
          <div className="mb-8 p-4 bg-synthara-darker rounded-xl border border-synthara-gray/20 hover:border-synthara-red/30 transition-all">
            <a 
              href="https://synthara-developers-forum.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center space-x-3 text-synthara-light hover:text-synthara-red transition-all"
            >
              <MessageSquarePlus className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">
                Join the Synthara Developers Forum - Report Issues & Share Feedback
              </span>
            </a>
          </div>

          <div className="flex justify-center space-x-8 mb-6">
            <a 
              href="https://synthara-ml-platform.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-synthara-light hover:text-synthara-red transition-all hover:scale-110"
            >
              Website
            </a>
            <a 
              href="https://github.com/synthara-company" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-synthara-light hover:text-synthara-red transition-all hover:scale-110"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/company/synthara-engineering" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-synthara-light hover:text-synthara-red transition-all hover:scale-110"
            >
              LinkedIn
            </a>
          </div>
          <p className="text-synthara-light text-sm">
            © {new Date().getFullYear()} Synthara. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
