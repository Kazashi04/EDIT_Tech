export default function Footer({ className = "" }: { className?: string }) {
  return (
    <footer id="footer" className={`bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/10 w-full py-section-gap ${className}`}>
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-safe w-full gap-8">
        <div className="font-display text-body-md text-on-surface">EDIT_TECH</div>
        <div className="text-on-surface-variant font-code-md text-code-md text-center">
          © 2026 EDIT_TECH Portfolio. Precision in every frame.
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a className="text-on-surface-variant hover:text-secondary transition-colors font-code-md text-code-md" href="https://www.linkedin.com/in/johnlloydpuda-edits" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors font-code-md text-code-md" href="https://github.com/Kazashi04" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors font-code-md text-code-md" href="https://instagram.com/johnlloydpuda" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors font-code-md text-code-md" href="https://www.onlinejobs.ph/jobseekers/info/3581269" target="_blank" rel="noopener noreferrer">OnlineJobs.ph</a>
          <a className="text-on-surface-variant hover:text-secondary transition-colors font-code-md text-code-md" href="https://profile.indeed.com/p/johnlloydp-bdl0ghp" target="_blank" rel="noopener noreferrer">Indeed</a>
        </div>
      </div>
    </footer>
  );
}
