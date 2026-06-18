export default function Certifications() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter mb-section-gap">
      {/* Terminal Stylized Info */}
      <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl overflow-hidden flex flex-col">
        <div className="bg-[#121212] px-4 py-2 border-b border-[#1A1A1A] flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-outline-variant/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-outline-variant/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-outline-variant/50"></div>
          </div>
          <span className="font-code-md text-[11px] text-on-surface-variant/60 ml-2">execute_superpowers.sh</span>
        </div>
        <div className="p-6 font-code-md text-code-md text-primary/90 leading-relaxed bg-[#050505] h-full">
          <div className="flex gap-4">
            <span className="text-secondary opacity-70">root@system:~$</span>
            <span className="text-on-surface">./execute_superpowers.sh</span>
          </div>
          <div className="mt-4 text-on-surface-variant grid grid-cols-1 gap-2 text-sm pl-4 border-l-2 border-[#1A1A1A]">
            <div className="text-green-400">[OK] Injecting High-Retention Hooks...</div>
            <div className="text-green-400">[OK] Compiling Automated Workflows...</div>
            <div className="text-green-400">[OK] Architecting Full-Stack Systems...</div>
            <div className="text-secondary mt-2">&gt; Status: UNSTOPPABLE</div>
          </div>
          <div className="flex gap-4 mt-4 animate-pulse">
            <span className="text-secondary opacity-70">root@system:~$</span>
            <span className="w-2 h-4 mt-1 bg-on-surface"></span>
          </div>
        </div>
      </div>

      {/* Advanced Capabilities List */}
      <div className="bg-[#0A0A0A] border border-[#1A1A1A] rounded-xl p-6 md:p-8">
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-6 flex items-center gap-3">
          <span className="material-symbols-outlined text-secondary text-[24px]">bolt</span>
          Advanced Capabilities
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#121212] transition-colors border border-transparent hover:border-[#1A1A1A]">
            <div className="mt-1 w-8 h-8 rounded bg-surface-container flex shrink-0 items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[18px]">movie_edit</span>
            </div>
            <div>
              <h4 className="font-headline-lg-mobile text-base text-on-surface m-0">High-Retention Hook Engineering</h4>
              <p className="font-body-md text-sm text-on-surface-variant mt-1">Analyzing viewer psychology and implementing fast-paced, high-stimulus editing techniques in the first 3 seconds to maximize watch time and algorithm push.</p>
            </div>
          </li>
          <li className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#121212] transition-colors border border-transparent hover:border-[#1A1A1A]">
            <div className="mt-1 w-8 h-8 rounded bg-surface-container flex shrink-0 items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[18px]">terminal</span>
            </div>
            <div>
              <h4 className="font-headline-lg-mobile text-base text-on-surface m-0">Custom Automated Workflows</h4>
              <p className="font-body-md text-sm text-on-surface-variant mt-1">Writing custom scripts and macros to automate repetitive tasks in Premiere Pro and server-side data ingestion, cutting editing turnaround times by up to 50%.</p>
            </div>
          </li>
          <li className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#121212] transition-colors border border-transparent hover:border-[#1A1A1A]">
            <div className="mt-1 w-8 h-8 rounded bg-surface-container flex shrink-0 items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[18px]">memory</span>
            </div>
            <div>
              <h4 className="font-headline-lg-mobile text-base text-on-surface m-0">Full-Stack System Architecture</h4>
              <p className="font-body-md text-sm text-on-surface-variant mt-1">Bridging the gap between creative and technical. Able to not just design a frontend interface, but architect the entire backend database, API, and cloud infrastructure from scratch.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
