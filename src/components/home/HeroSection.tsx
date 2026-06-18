export default function HeroSection({ onOpenVideo }: { onOpenVideo: () => void }) {
  return (
    <section id="showreel" className="flex flex-col items-center text-center gap-8 pt-10">
      <h1 className="font-display text-display max-w-4xl text-on-surface animate-slide-up-fade">
        Precision in Every Frame. <br/>
        <span className="text-gradient">Power in Every Script.</span>
      </h1>
      <p className="text-on-surface-variant max-w-2xl font-body-md text-body-md animate-fade-in-delayed">
        With years of experience creating high-impact digital content, I specialize in the full Premiere Pro and After Effects workflow and high-retention editing. My background in IT and React web development ensures a highly technical approach to every creative project. This is the best edit I've made.
      </p>
      
      {/* Video Placeholder 16:9 */}
      <div 
        className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden glass-card relative group cursor-pointer mt-8 animate-float shadow-[0_0_40px_rgba(82,3,213,0.1)] hover:shadow-[0_0_60px_rgba(82,3,213,0.2)] transition-shadow duration-500"
        onClick={onOpenVideo}
      >
        <video 
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-500 group-hover:scale-[1.02]" 
          src="/videos/test_final.mp4#t=0.1"
          preload="metadata"
          muted
          playsInline
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-30"></div>
            <div className="w-20 h-20 rounded-full bg-secondary-container/80 backdrop-blur flex items-center justify-center text-on-secondary-container group-hover:scale-110 transition-transform duration-300 border border-secondary/50 shadow-[0_0_20px_rgba(139,92,246,0.5)]">
              <span className="material-symbols-outlined" style={{ fontSize: '32px', fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
