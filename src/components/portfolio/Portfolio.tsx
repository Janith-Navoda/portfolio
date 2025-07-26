import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © 2024 Janith Navoda. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://github.com/janithnavoda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-bright transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/janithnavoda" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-bright transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;