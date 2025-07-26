import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react';

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
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card
              key={project.id}
              className="group bg-surface border-border hover:shadow-glow transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    {project.type === 'web' ? (
                      <Globe className="w-6 h-6 text-accent-bright" />
                    ) : (
                      <Smartphone className="w-6 h-6 text-accent-bright" />
                    )}
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-accent-bright transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="bg-primary/20 text-primary">
                    {project.role}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      className={`${getTechColor(tech)} border`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <Button
                      variant="gradient"
                      size="sm"
                      asChild
                      className="group/btn"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  
                  <Button
                    variant="neon"
                    size="sm"
                    asChild
                    className="group/btn"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Other Projects</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <Card
                key={project.id}
                className="p-6 bg-surface border-border hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${(index + 4) * 200}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {project.type === 'web' ? (
                      <Globe className="w-5 h-5 text-accent-bright" />
                    ) : (
                      <Smartphone className="w-5 h-5 text-accent-bright" />
                    )}
                    <div>
                      <h4 className="font-semibold">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-accent/20 transition-colors"
                  >
                    <Github className="w-4 h-4 text-accent-bright" />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-accent/10 text-accent-bright"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
