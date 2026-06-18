import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Force the page to start at the very top (Hero section)
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // The loading screen will display for 3.5 seconds, then start fading out.
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
      // Ensure we are at the top right as the fade starts too
      window.scrollTo(0, 0);
    }, 3500);

    // Completely remove the element from the DOM after 4 seconds (allowing 500ms for the fade transition)
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="flex flex-col items-center overflow-hidden px-6 text-center">
        {/* REPLACE "YOUR FULL NAME" WITH YOUR ACTUAL NAME */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl tracking-[0.1em] md:tracking-[0.2em] text-on-surface uppercase animate-slide-up-fade font-bold">
          John Lloyd Puda
        </h1>
        
        <p className="font-code-md text-secondary mt-4 animate-fade-in-delayed opacity-0 uppercase tracking-widest text-xs md:text-sm">
          Welcome to the Portfolio
        </p>

        {/* Animated Loading Bar */}
        <div className="mt-10 w-48 h-[2px] bg-outline-variant/30 relative overflow-hidden rounded-full animate-fade-in-delayed opacity-0">
          <div className="absolute top-0 left-0 h-full bg-secondary w-full animate-progress-bar rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
