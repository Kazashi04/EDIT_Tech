import { Link, useLocation } from 'react-router-dom';

export default function SideNavBar() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="hidden lg:flex flex-col py-panel-padding bg-surface-container-lowest dark:bg-surface-container-lowest text-secondary dark:text-secondary fixed left-0 top-0 h-full w-20 md:w-64 z-40 border-r border-outline-variant/20 transition-all duration-200 ease-in-out">
      <div className="px-6 mb-10 flex flex-col items-start gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant/30">
          <img alt="Editor Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0J7fJzTbK1Kd8rCqlS4lVYl29xGxomVtbHU0jtvhT8-3DDczyE-u737ROlgdeVdWqh6aGEV-7xwMJHD73-LjfKDh_Khfi-YV602dMVYvzMj6JvZdPJ8cgYwmyiAWcZO9_o2AE3DhOZqEfFJHvxFBVNJS02EszNfn8hRwd_ZxzWAR9TPd42HAIETKhEEkAKPLJ10Xpm0qutFWfdWIUhMD_PSq_b2rMwQq23Jp8SGW671s38I8_Wks43WctclJZEpG3560zcYAj2Hc" />
        </div>
        <div className="hidden md:block">
          <h2 className="font-display text-headline-lg-mobile text-primary m-0">Pro Editor</h2>
          <p className="font-code-md text-code-md text-on-surface-variant m-0 mt-1">IT Specialist</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-4 w-full">
        <Link to="/" className="flex items-center gap-4 py-3 px-4 rounded-xl text-on-surface-variant hover:bg-surface-container hover:bg-surface-container-high transition-colors font-label-sm text-label-sm">
          <span className="material-symbols-outlined text-[20px]">home</span>
          <span className="hidden md:block">Home</span>
        </Link>
        <Link to="/" className="flex items-center gap-4 py-3 px-4 rounded-xl text-on-surface-variant hover:bg-surface-container hover:bg-surface-container-high transition-colors font-label-sm text-label-sm">
          <span className="material-symbols-outlined text-[20px]">movie_filter</span>
          <span className="hidden md:block">Portfolio</span>
        </Link>
        <Link to="/it-projects" className={`flex items-center gap-4 py-3 px-4 rounded-xl font-label-sm text-label-sm mx-2 ${isActive('/it-projects') ? 'bg-secondary-container text-on-secondary-container' : 'text-on-surface-variant hover:bg-surface-container hover:bg-surface-container-high transition-colors'}`}>
          <span className="material-symbols-outlined text-[20px]">terminal</span>
          <span className="hidden md:block">Tech</span>
        </Link>
        <Link to="/" className="flex items-center gap-4 py-3 px-4 rounded-xl text-on-surface-variant hover:bg-surface-container hover:bg-surface-container-high transition-colors font-label-sm text-label-sm">
          <span className="material-symbols-outlined text-[20px]">person</span>
          <span className="hidden md:block">Profile</span>
        </Link>
      </div>
    </nav>
  );
}
