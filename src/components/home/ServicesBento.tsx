export default function ServicesBento() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      <div className="glass-card hover-card-saas p-10 rounded-xl flex flex-col gap-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -ml-10 -mt-10 group-hover:bg-secondary/30 transition-colors duration-500"></div>
        <div className="flex items-center gap-4 text-secondary">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>movie_edit</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Video Editing</h2>
        </div>
        <p className="text-on-surface-variant">Expert in Adobe Premiere Pro and After Effects, specializing in both long-form documentary narratives and dynamic short-form videos. From crafting cohesive story arcs and pacing for 20+ minute edits to creating strong hooks that stop the scroll.</p>
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          <span className="bg-surface-container-highest px-3 py-1 rounded text-on-surface-variant font-code-md text-code-md border border-outline-variant/50 group-hover:border-secondary/30 transition-colors">Premiere Pro</span>
          <span className="bg-surface-container-highest px-3 py-1 rounded text-on-surface-variant font-code-md text-code-md border border-outline-variant/50 group-hover:border-secondary/30 transition-colors">After Effects</span>
          <span className="bg-surface-container-highest px-3 py-1 rounded text-on-surface-variant font-code-md text-code-md border border-outline-variant/50 group-hover:border-secondary/30 transition-colors">Long-Form & Docu</span>
          <span className="bg-surface-container-highest px-3 py-1 rounded text-on-surface-variant font-code-md text-code-md border border-outline-variant/50 group-hover:border-secondary/30 transition-colors">Short-Form & B-Roll</span>
          <span className="bg-surface-container-highest px-3 py-1 rounded text-on-surface-variant font-code-md text-code-md border border-outline-variant/50 group-hover:border-secondary/30 transition-colors">Capcut</span>
          <span className="bg-surface-container-highest px-3 py-1 rounded text-on-surface-variant font-code-md text-code-md border border-outline-variant/50 group-hover:border-secondary/30 transition-colors">Audio & Color</span>
        </div>
      </div>

      <div className="glass-card hover-card-saas p-10 rounded-xl flex flex-col gap-6 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-32 h-32 bg-tertiary/10 rounded-full blur-3xl -ml-10 -mt-10 group-hover:bg-tertiary/30 transition-colors duration-500"></div>
        <div className="flex items-center gap-4 text-tertiary">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 0" }}>dns</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">IT & Web Development</h2>
        </div>
        <p className="text-on-surface-variant">Highly technical background in Information Technology. Building responsive websites and mobile applications with a focus on clean code and robust infrastructure.</p>
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          <span className="bg-surface-container-highest px-3 py-1 rounded text-on-surface-variant font-code-md text-code-md border border-outline-variant/50">TypeScript</span>
          <span className="bg-surface-container-highest px-3 py-1 rounded text-on-surface-variant font-code-md text-code-md border border-outline-variant/50">C# / Java</span>
          <span className="bg-surface-container-highest px-3 py-1 rounded text-on-surface-variant font-code-md text-code-md border border-outline-variant/50">Android Studio</span>
          <span className="bg-surface-container-highest px-3 py-1 rounded text-on-surface-variant font-code-md text-code-md border border-outline-variant/50">HTML/CSS/JS</span>
        </div>
      </div>
    </section>
  );
}
