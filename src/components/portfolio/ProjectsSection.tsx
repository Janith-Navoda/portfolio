import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';

// Project preview images
import breezyFitsImg from '@/assets/project-breezy-fits.jpg';
import craftopiaImg from '@/assets/project-craftopia.jpg';
import echannelingImg from '@/assets/project-echanneling.jpg';
import financeTrackerImg from '@/assets/project-finance-tracker.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Breezy Fits',
      subtitle: 'E-Commerce Website',
      role: 'Full-Stack Developer',
      tech: ['MERN', 'Redux', 'Tailwind'],
      description: 'Feature-rich shopping experience with admin dashboard, JWT auth, payment integration.',
      liveUrl: '#',
      githubUrl: '#',
      image: breezyFitsImg,
      type: 'web',
      featured: true
    },
    {
      id: 2,
      title: 'Craftopia',
      subtitle: 'E-Commerce Platform',
      role: 'Full-Stack Developer',
      tech: ['MERN', 'Tailwind'],
      description: 'Built from scratch with secure auth, dynamic inventory, order management.',
      githubUrl: '#',
      image: craftopiaImg,
      type: 'web',
      featured: true
    },
    {
      id: 3,
      title: 'E-Channeling Website',
      subtitle: 'Healthcare Booking System',
      role: 'Team Developer',
      tech: ['Java', 'MySQL'],
      description: 'Team project with appointment scheduling and doctor listing.',
      githubUrl: '#',
      image: echannelingImg,
      type: 'web',
      featured: false
    },
    {
      id: 4,
      title: 'Finance Tracker',
      subtitle: 'Android App',
      role: 'Mobile Developer',
      tech: ['Kotlin'],
      description: 'Personal budgeting tool. Offline expense tracking, budget alerts, SharedPreferences.',
      githubUrl: '#',
      image: financeTrackerImg,
      type: 'mobile',
      featured: true
    }
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      'MERN': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Redux': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Tailwind': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      'Java': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'MySQL': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Kotlin': 'bg-pink-500/20 text-pink-400 border-pink-500/30'
    };
    return colors[tech] || 'bg-accent/20 text-accent-bright border-accent/30';
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my journey through various technologies and creative solutions
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card
              key={project.id}
              className="group relative bg-surface border-border overflow-hidden animate-fade-in-up hover:border-accent/50 transition-all duration-300 hover:shadow-glow hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-surface to-surface-elevated">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/20 to-transparent" />
                
                {/* Glow overlay on hover */}
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                
                {/* Project Type Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-accent/90 text-accent-foreground backdrop-blur-sm border border-accent/30 shadow-lg">
                    {project.type === 'web' ? 'Web App' : 'Mobile App'}
                  </Badge>
                </div>

                {/* Hover overlay with animated border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 transition-all duration-300 rounded-lg" />
              </div>

              <div className="p-6 relative z-10">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-colors duration-300">
                      {project.type === 'web' ? (
                        <Globe className="w-5 h-5 text-accent-bright" />
                      ) : (
                        <Smartphone className="w-5 h-5 text-accent-bright" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold group-hover:text-accent-bright transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="bg-primary/20 text-primary text-xs border border-primary/30">
                    {project.role}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm group-hover:text-foreground/90 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      className={`${getTechColor(tech)} border transform group-hover:scale-105 transition-all duration-300`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button
                      variant="gradient"
                      size="sm"
                      asChild
                      className="group/btn flex-1 hover:shadow-glow transition-all duration-300"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 group-hover/btn:rotate-12 transition-transform duration-300" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  
                  <Button
                    variant="neon"
                    size="sm"
                    asChild
                    className={`group/btn transition-all duration-300 hover:shadow-glow ${project.liveUrl ? 'flex-1' : 'w-full'}`}
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 group-hover/btn:scale-110 transition-transform duration-300" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Animated background glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Corner glow effects */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-x-10 -translate-y-10" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-8 translate-y-8" />
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
