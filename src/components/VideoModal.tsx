import { useEffect } from 'react';

export default function VideoModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-6xl aspect-video mx-4" onClick={e => e.stopPropagation()}>
        <button 
          className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors"
          onClick={onClose}
        >
          <span className="material-symbols-outlined text-4xl">close</span>
        </button>
        <div className="w-full h-full bg-black rounded-xl overflow-hidden border border-outline-variant/30 flex items-center justify-center">
          <video 
            className="w-full h-full object-contain"
            controls
            autoPlay
            src="/videos/test_final.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}
