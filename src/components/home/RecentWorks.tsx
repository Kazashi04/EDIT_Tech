export default function RecentWorks() {
  return (
    <section id="video-works" className="flex flex-col gap-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Post-Production Workflow</h2>
          <p className="text-on-surface-variant font-body-lg">
            A transparent look into the technical infrastructure and layer organization behind the final edits.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Timeline 1 */}
          <div className="glass-card hover-card-saas rounded flex flex-col group overflow-hidden border-outline-variant/20 hover:border-secondary/50 transition-colors">
            <div className="aspect-video w-full flex items-center justify-center bg-surface-container-highest relative overflow-hidden">
              <img 
                src="/pr_timeline.jpg" 
                alt="Premiere Pro Timeline"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-4 flex flex-col gap-1">
              <h3 className="font-body-md text-body-md font-bold text-on-surface">Premiere Pro Workspace</h3>
              <span className="text-label-sm text-on-surface-variant">A-Roll &amp; B-Roll Assembly</span>
            </div>
          </div>
          {/* Timeline 2 */}
          <div className="glass-card hover-card-saas rounded flex flex-col group overflow-hidden border-outline-variant/20 hover:border-secondary/50 transition-colors">
            <div className="aspect-video w-full flex items-center justify-center bg-surface-container-highest relative overflow-hidden">
              <img 
                src="/ae_timeline.png" 
                alt="After Effects Timeline"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="p-4 flex flex-col gap-1">
              <h3 className="font-body-md text-body-md font-bold text-on-surface">After Effects Composition</h3>
              <span className="text-label-sm text-on-surface-variant">VFX &amp; Motion Graphics</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hooks Showcase */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Sample Reel Edits</h2>
          <p className="text-on-surface-variant font-body-lg">
            A collection of my sample reel edits and highlights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Video 1 */}
          <div className="glass-card hover-card-saas rounded flex flex-col group overflow-hidden border-outline-variant/20 hover:border-secondary/50 transition-colors">
            <div className="aspect-[9/16] w-full bg-surface-container-highest relative overflow-hidden">
              <video 
                src="/videos/sample_edit.mp4" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                autoPlay 
                loop 
                muted 
                playsInline
              />
              <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-secondary flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">loop</span>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-1">
              <h3 className="font-body-md text-body-md font-bold text-on-surface">A-Roll Only</h3>
              <span className="text-label-sm text-on-surface-variant">Raw dialogue focus</span>
            </div>
          </div>

          {/* Video 2 */}
          <div className="glass-card hover-card-saas rounded flex flex-col group overflow-hidden border-outline-variant/20 hover:border-secondary/50 transition-colors">
            <div className="aspect-[9/16] w-full bg-surface-container-highest relative overflow-hidden">
              <video 
                src="/videos/sequence01_1.mp4" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                autoPlay 
                loop 
                muted 
                playsInline
              />
              <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-secondary flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">loop</span>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-1">
              <h3 className="font-body-md text-body-md font-bold text-on-surface">B-Roll Only</h3>
              <span className="text-label-sm text-on-surface-variant">Action sequences</span>
            </div>
          </div>

          {/* Video 3 */}
          <div className="glass-card hover-card-saas rounded flex flex-col group overflow-hidden border-outline-variant/20 hover:border-secondary/50 transition-colors">
            <div className="aspect-[9/16] w-full bg-surface-container-highest relative overflow-hidden">
              <video 
                src="/videos/podcast1.mp4" 
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                autoPlay 
                loop 
                muted 
                playsInline
              />
              <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-secondary flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">loop</span>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-1">
              <h3 className="font-body-md text-body-md font-bold text-on-surface">A&amp;B Roll</h3>
              <span className="text-label-sm text-on-surface-variant">Combined footage edit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
