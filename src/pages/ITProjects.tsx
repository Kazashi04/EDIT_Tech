import TopNavBar from '../components/TopNavBar';
import Footer from '../components/Footer';
import TechStack from '../components/it/TechStack';
import DeployedSystems from '../components/it/DeployedSystems';
import Certifications from '../components/it/Certifications';

export default function ITProjects() {
  return (
    <>
      <div className="gradient-bg"></div>
      <TopNavBar />
      
      <main className="pt-32 pb-section-gap px-margin-safe w-full flex flex-col gap-8">
        <header className="mb-8">
          <h1 className="font-display text-display text-on-surface mb-4">Technical Infrastructure</h1>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
            Beyond the edit bay. A structured overview of backend systems, network architecture, and software development projects supporting high-performance workflows.
          </p>
        </header>

        <TechStack />
        <DeployedSystems />
        <Certifications />
      </main>

      <Footer />
    </>
  );
}
