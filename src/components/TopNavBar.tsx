import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function TopNavBar({ hiddenOnDesktop = false }: { hiddenOnDesktop?: boolean }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const checkActive = (path: string, hash: string = '') => {
    if (hash) {
      return location.pathname === path && location.hash === hash;
    }
    return location.pathname === path && location.hash === '';
  };

  const navItemClass = (active: boolean) => 
    `relative group font-label-sm text-label-sm uppercase transition-colors duration-300 py-1 ${active ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-on-surface'}`;

  const underlineClass = (active: boolean) =>
    `absolute left-0 bottom-0 h-[2px] bg-secondary transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`;

  const showreelActive = checkActive('/', '') || checkActive('/', '#showreel');
  const videoWorksActive = checkActive('/', '#video-works');
  const itProjectsActive = checkActive('/', '#it-projects');
  const aboutActive = location.hash === '#footer';

  return (
    <nav className={`fixed top-0 w-full z-50 bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 left-0 right-0 transition-all ${hiddenOnDesktop ? 'lg:hidden' : ''}`}>
      <div className="flex justify-between items-center px-margin-safe h-20 w-full">
        <div className="font-display text-headline-lg-mobile md:text-headline-lg tracking-tighter text-on-surface z-50">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>EDIT_TECH</Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="/#showreel" className={navItemClass(showreelActive)}>
            Showreel
            <span className={underlineClass(showreelActive)}></span>
          </a>
          <a href="/#video-works" className={navItemClass(videoWorksActive)}>
            Video Works
            <span className={underlineClass(videoWorksActive)}></span>
          </a>
          <a href="/#it-projects" className={navItemClass(itProjectsActive)}>
            IT Projects
            <span className={underlineClass(itProjectsActive)}></span>
          </a>
          <a href="#footer" className={navItemClass(aboutActive)}>
            About
            <span className={underlineClass(aboutActive)}></span>
          </a>
        </div>
        <div className="flex items-center gap-4 z-50">
          <a href="#footer" className="animate-shimmer overflow-hidden relative bg-gradient-to-r from-secondary-container to-secondary text-white px-6 py-2 rounded font-label-sm text-label-sm uppercase hover:opacity-90 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all duration-300 hidden sm:block border border-secondary/50">
            Get in Touch
          </a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-on-surface p-2">
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-surface-container-high/95 backdrop-blur-xl border-b border-outline-variant/30 flex flex-col items-center overflow-hidden transition-all duration-300 shadow-2xl ${isMenuOpen ? 'max-h-[400px] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
        <div className="flex flex-col items-center gap-6">
          <a href="/#showreel" onClick={() => setIsMenuOpen(false)} className={navItemClass(showreelActive)}>Showreel</a>
          <a href="/#video-works" onClick={() => setIsMenuOpen(false)} className={navItemClass(videoWorksActive)}>Video Works</a>
          <a href="/#it-projects" onClick={() => setIsMenuOpen(false)} className={navItemClass(itProjectsActive)}>IT Projects</a>
          <a href="#footer" onClick={() => setIsMenuOpen(false)} className={navItemClass(aboutActive)}>About</a>
          <a href="#footer" onClick={() => setIsMenuOpen(false)} className="sm:hidden bg-secondary text-on-secondary px-8 py-3 rounded font-label-sm mt-2">Get in Touch</a>
        </div>
      </div>
    </nav>
  );
}
