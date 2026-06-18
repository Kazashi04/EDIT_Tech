import { useState } from 'react';
import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import VideoModal from '../components/VideoModal';
import HeroSection from '../components/home/HeroSection';
import ServicesBento from '../components/home/ServicesBento';
import RecentWorks from '../components/home/RecentWorks';
import TechStack from '../components/it/TechStack';
import DeployedSystems from '../components/it/DeployedSystems';
import Certifications from '../components/it/Certifications';

export default function Home() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <div className="gradient-bg"></div>
      <TopNavBar />
      
      <main className="pt-32 pb-section-gap px-margin-safe w-full flex flex-col gap-section-gap">
        <HeroSection onOpenVideo={() => setIsVideoModalOpen(true)} />
        <ServicesBento />
        <RecentWorks />
        
        <div id="it-projects" className="flex flex-col gap-8 scroll-mt-24">
          <header className="mb-8">
            <h2 className="font-display text-display text-on-surface mb-4">Technical Infrastructure</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Beyond the edit bay. A structured overview of backend systems, network architecture, and software development projects supporting high-performance workflows.
            </p>
          </header>

          <TechStack />
          <DeployedSystems />
          <Certifications />
        </div>
      </main>

      <Footer />
      
      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </>
  );
}
