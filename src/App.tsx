import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { Testimonials } from './components/Testimonials';
import { AIAdvantage } from './components/AIAdvantage';
import { InsightSection } from './components/InsightSection';
import { CommunityLogos } from './components/CommunityLogos';
import { Pricing } from './components/Pricing';
import { ConversionFlow } from './components/ConversionFlow';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';
import { GetStartedPage } from './components/GetStartedPage';
import { FindOfficePage } from './components/FindOfficePage';
import { ListPropertyPage } from './components/ListPropertyPage';
import { CreateWorkspacePage } from './components/CreateWorkspacePage';

type Page = 'home' | 'get-started' | 'find-office' | 'list-property' | 'create-workspace';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Scroll to top when changing pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleGetStarted = () => {
    setCurrentPage('create-workspace');
  };

  const handleFindOffice = () => {
    setCurrentPage('find-office');
  };

  const handleListProperty = () => {
    setCurrentPage('list-property');
  };

  const handleCreateWorkspace = () => {
    setCurrentPage('create-workspace');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'get-started') {
    return <GetStartedPage onBack={handleBackToHome} />;
  }

  if (currentPage === 'find-office') {
    return <FindOfficePage onBack={handleBackToHome} />;
  }

  if (currentPage === 'list-property') {
    return <ListPropertyPage onBack={handleBackToHome} />;
  }

  if (currentPage === 'create-workspace') {
    return <CreateWorkspacePage onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        onGetStarted={handleGetStarted}
        onFindOffice={handleFindOffice}
        onListProperty={handleListProperty}
      />
      
      <main>
        <Hero onFindOffice={handleFindOffice} onListProperty={handleListProperty} />
        <ProblemSection />
        <Testimonials />
        <AIAdvantage />
        <InsightSection />
        <CommunityLogos />
        <Pricing />
        <ConversionFlow onGetStarted={handleGetStarted} onGetStarted={handleGetStarted} onGetStarted={handleGetStarted} />
      </main>
      
      <Footer onFindOffice={handleFindOffice} onListProperty={handleListProperty} />

      {/* AI Chat Widget */}
      <AIChat />
    </div>
  );
}