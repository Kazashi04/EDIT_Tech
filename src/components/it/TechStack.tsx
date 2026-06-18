export default function TechStack() {
  return (
    <section className="mb-section-gap">
      <h2 className="font-headline-lg text-headline-lg text-primary mb-8 flex items-center gap-3">
        <span className="material-symbols-outlined text-secondary">memory</span>
        Core Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-gutter">
        {/* Stack Item 1: Server Admin */}
        <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl p-6 tech-card-glow transition-all duration-300 glow-hover group relative overflow-hidden flex flex-col justify-between h-48">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[64px] text-secondary">dns</span>
          </div>
          <div>
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center mb-4 text-secondary border border-outline-variant/30">
              <span className="material-symbols-outlined">dns</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1">Server Admin</h3>
            <p className="font-code-md text-code-md text-on-surface-variant/70 text-sm">Linux, Nginx, Docker</p>
          </div>
        </div>

        {/* Stack Item 2: Web Development */}
        <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl p-6 tech-card-glow transition-all duration-300 glow-hover group relative overflow-hidden flex flex-col justify-between h-48">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[64px] text-secondary">code</span>
          </div>
          <div>
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center mb-4 text-secondary border border-outline-variant/30">
              <span className="material-symbols-outlined">code</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1">Web Dev</h3>
            <p className="font-code-md text-code-md text-on-surface-variant/70 text-sm">TypeScript, React, HTML/CSS</p>
          </div>
        </div>

        {/* Stack Item 3: Software & Mobile */}
        <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl p-6 tech-card-glow transition-all duration-300 glow-hover group relative overflow-hidden flex flex-col justify-between h-48">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[64px] text-secondary">terminal</span>
          </div>
          <div>
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center mb-4 text-secondary border border-outline-variant/30">
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1">Software</h3>
            <p className="font-code-md text-code-md text-on-surface-variant/70 text-sm">Android Studio, Java, C#</p>
          </div>
        </div>

        {/* Stack Item 4: Workflow Automation */}
        <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl p-6 tech-card-glow transition-all duration-300 glow-hover group relative overflow-hidden flex flex-col justify-between h-48">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-[64px] text-secondary">settings_ethernet</span>
          </div>
          <div>
            <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center mb-4 text-secondary border border-outline-variant/30">
              <span className="material-symbols-outlined">settings_ethernet</span>
            </div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-1">Automation</h3>
            <p className="font-code-md text-code-md text-on-surface-variant/70 text-sm">Python, Bash, APIs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
