export default function DeployedSystems() {
  return (
    <section className="mb-section-gap">
      <h2 className="font-headline-lg text-headline-lg text-primary mb-8 flex items-center gap-3">
        <span className="material-symbols-outlined text-secondary">code_blocks</span>
        Software Development Projects
      </h2>
      <div className="flex flex-col gap-8">
        
        {/* Project 1: Web System (Published) */}
        <article className="hover-card-saas group grid grid-cols-1 md:grid-cols-12 gap-8 items-start bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl p-6 md:p-8 transition-colors hover:border-outline-variant/40">
          <div className="md:col-span-5 w-full aspect-video rounded-xl overflow-hidden bg-surface-container border border-outline-variant/20 relative">
            <iframe 
              src="https://unistay-gensan.vercel.app/" 
              title="Unistay Gensan Preview"
              className="w-[200%] h-[200%] origin-top-left scale-50 border-none pointer-events-none"
              tabIndex={-1}
            />
            <div className="absolute inset-0 bg-transparent transition-colors"></div>
          </div>
          <div className="md:col-span-7 flex flex-col h-full justify-center">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 font-code-md text-xs flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400"></span> Published
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary border border-outline-variant/30 font-code-md text-xs">React</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-3 group-hover:text-secondary transition-colors">Unistay Gensan</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-xl">
              A published React web application focused on providing a seamless accommodation platform. I built this to solve core booking and listing problems for users.
            </p>
            <div className="mt-auto">
              <a className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary hover:text-secondary transition-colors group/link" href="https://unistay-gensan.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Live Site
                <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </article>

        {/* Project 2: Android Mobile System (Prototype) */}
        <article className="hover-card-saas group grid grid-cols-1 md:grid-cols-12 gap-8 items-start bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl p-6 md:p-8 transition-colors hover:border-outline-variant/40">
          <div className="md:col-span-5 lg:col-span-5 w-full flex items-center justify-center gap-2 md:gap-4 md:order-2">
            <div className="w-1/3 aspect-[9/16] rounded-xl overflow-hidden bg-surface-container border border-outline-variant/20 relative shadow-xl shadow-black/50">
              <img alt="Android Mobile Prototype 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter grayscale group-hover:grayscale-0 object-top" src="/images/android/app_view_1.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
            <div className="w-1/3 aspect-[9/16] rounded-xl overflow-hidden bg-surface-container border border-outline-variant/20 relative shadow-xl shadow-black/50">
              <img alt="Android Mobile Prototype 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter grayscale group-hover:grayscale-0 object-top" src="/images/android/app_view_2.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
            <div className="w-1/3 aspect-[9/16] rounded-xl overflow-hidden bg-surface-container border border-outline-variant/20 relative shadow-xl shadow-black/50">
              <img alt="Android Mobile Prototype 3" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter grayscale group-hover:grayscale-0 object-top" src="/images/android/app_view_3.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>
          <div className="md:col-span-7 lg:col-span-7 flex flex-col h-full justify-center md:order-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 font-code-md text-xs flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span> Prototype
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary border border-outline-variant/30 font-code-md text-xs">Android</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-3 group-hover:text-secondary transition-colors">Educational Management App</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-xl">
              A comprehensive educational mobile application featuring dedicated portals for students, teachers, and parents. Core functionalities include real-time subject performance tracking, progress reports, interactive scheduling, and specialized tools like a focus mode to enhance productivity. Built natively for Android to deliver a tailored and seamless experience across different user roles.
            </p>
            <div className="mt-auto">
              <a className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary hover:text-secondary transition-colors group/link" href="#">
                View Prototype Details
                <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>
        </article>

        {/* Project 3: Other Web Systems (In Development) */}
        <article className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#0A0A0A] border border-[#1A1A1A] rounded-2xl p-6 md:p-8 transition-colors hover:border-outline-variant/40">
          <div className="md:col-span-5 w-full flex flex-col relative pt-4 pb-4">
            <div className="w-[85%] aspect-video self-end rounded-xl overflow-hidden bg-surface-container border border-outline-variant/20 relative shadow-xl shadow-black/50 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-500 z-10">
              <img alt="Upcoming Web Application 1" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter grayscale group-hover:grayscale-0 object-top" src="/images/web/web_view_1.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
            <div className="w-[85%] aspect-video self-start rounded-xl overflow-hidden bg-surface-container border border-outline-variant/20 relative shadow-xl shadow-black/50 group-hover:translate-y-2 group-hover:-translate-x-2 transition-transform duration-500 z-20 -mt-12 md:-mt-16">
              <img alt="Upcoming Web Application 2" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 filter grayscale group-hover:grayscale-0 object-top" src="/images/web/web_view_2.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>
          <div className="md:col-span-7 flex flex-col h-full justify-center">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-code-md text-xs flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span> In Development
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary border border-outline-variant/30 font-code-md text-xs">React</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary border border-outline-variant/30 font-code-md text-xs">Node.js</span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary border border-outline-variant/30 font-code-md text-xs">MongoDB</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-3 group-hover:text-secondary transition-colors">Maria's E-Commerce Platform</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 max-w-xl">
              A comprehensive full-stack e-commerce platform currently in development. Built with the MERN stack, this application features a complete shopping experience with cart management, an intuitive admin dashboard for inventory control, secure social authentication, and dynamic media handling via Cloudinary.
            </p>
            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant cursor-not-allowed">
                Link Available Soon
              </span>
            </div>
          </div>
        </article>

      </div>
    </section>
  );
}
