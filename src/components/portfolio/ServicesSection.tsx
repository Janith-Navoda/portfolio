import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe, Smartphone, Code, Database, Layers, Zap } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Responsive websites, full-stack solutions, e-commerce systems using MERN stack.',
      icon: Globe,
      features: [
        'Responsive Design',
        'Full-Stack Solutions',
        'E-commerce Systems',
        'MERN Stack',
        'Database Integration',
        'API Development'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Android app development using Kotlin with smooth UX and persistent data handling.',
      icon: Smartphone,
      features: [
        'Android Development',
        'Kotlin Programming',
        'Smooth UX Design',
        'Data Persistence',
        'Offline Functionality',
        'Performance Optimization'
      ],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const additionalSkills = [
    { icon: Code, title: 'Clean Code', description: 'Following best practices and coding standards' },
    { icon: Database, title: 'Database Design', description: 'Efficient data modeling and optimization' },
    { icon: Layers, title: 'System Architecture', description: 'Scalable and maintainable solutions' },
    { icon: Zap, title: 'Performance', description: 'Fast and efficient applications' }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-primary">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transforming ideas into digital reality with cutting-edge technologies
          </p>
        </div>

        {/* Main Services */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="group relative overflow-hidden bg-surface border-border hover:shadow-glow transition-all duration-500 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative p-8">
                {/* Service Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-accent-bright transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={feature} 
                      className="flex items-center gap-2 group/feature"
                      style={{ animationDelay: `${(index * 200) + (idx * 100)}ms` }}
                    >
                      <div className="w-2 h-2 rounded-full bg-accent-bright group-hover/feature:scale-125 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover/feature:text-foreground transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  variant="gradient" 
                  className="w-full group/btn"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                  <Zap className="ml-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalSkills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="p-6 text-center bg-surface border-border hover:shadow-glow transition-all duration-300 hover:scale-105 group animate-fade-in-up"
              style={{ animationDelay: `${(index + 2) * 200}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl bg-accent/20 group-hover:bg-accent/30 transition-colors">
                  <skill.icon className="w-6 h-6 text-accent-bright" />
                </div>
              </div>
              
              <h4 className="font-semibold mb-2 group-hover:text-accent-bright transition-colors">
                {skill.title}
              </h4>
              
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-8">
              Let's work together to bring your ideas to life with modern technologies and clean, efficient code.
            </p>
            <Button 
              variant="neon" 
              size="lg"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group"
            >
              Let's Collaborate
              <Zap className="ml-2 w-4 h-4 group-hover:rotate-12 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;