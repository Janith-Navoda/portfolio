import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import profileImage from '@/assets/janith-new-profile.jpg';
const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = ['Full-Stack Developer', 'Mobile App Developer', 'Tech Enthusiast'];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hello, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Janith Navoda
              </span>
            </h1>
            
            <div className="h-8 flex items-center">
              <span className="text-xl md:text-2xl text-muted-foreground">
                {roles[currentRole]}
              </span>
              <span className="ml-1 w-0.5 h-6 bg-accent-bright animate-pulse" />
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              Motivated IT undergraduate passionate about creating innovative solutions 
              through code. Specializing in full-stack development with the MERN stack 
              and mobile app development.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="gradient" size="lg" onClick={() => scrollToSection('projects')} className="group">
              View Projects
              <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="neon" size="lg" onClick={() => scrollToSection('contact')}>
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://github.com/janithnavoda" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface-elevated hover:bg-accent/20 transition-all duration-300 hover:scale-110 hover:shadow-glow">
              <Github className="w-6 h-6 text-accent-bright" />
            </a>
            <a href="https://linkedin.com/in/janithnavoda" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-surface-elevated hover:bg-accent/20 transition-all duration-300 hover:scale-110 hover:shadow-glow">
              <Linkedin className="w-6 h-6 text-accent-bright" />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative animate-fade-in">
          <div className="relative">
            <img src={profileImage} alt="Janith Navoda" className="w-80 h-80 md:w-96 md:h-96 rounded-2xl object-cover mx-auto shadow-card" />
            
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-xl animate-float" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-xl animate-float delay-1000" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent-bright rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-bright rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;