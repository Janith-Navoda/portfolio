import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Code, Database, Wrench, BookOpen } from 'lucide-react';

const AboutSection = () => {
  const skills = {
    languages: ['Java', 'Python', 'JavaScript', 'Kotlin', 'C++', 'C'],
    frameworks: ['React', 'Node.js', 'Express'],
    databases: ['MySQL', 'MongoDB'],
    tools: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'],
    concepts: ['REST APIs', 'OOP', 'Agile']
  };

  const skillCategories = [
    { title: 'Languages', items: skills.languages, icon: Code, color: 'text-blue-400' },
    { title: 'Frameworks', items: skills.frameworks, icon: Wrench, color: 'text-green-400' },
    { title: 'Databases', items: skills.databases, icon: Database, color: 'text-purple-400' },
    { title: 'Tools', items: skills.tools, icon: Wrench, color: 'text-orange-400' },
    { title: 'Concepts', items: skills.concepts, icon: BookOpen, color: 'text-pink-400' }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-primary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8 animate-fade-in-up">
            <Card className="p-8 bg-surface border-border hover:shadow-glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-accent/20">
                  <GraduationCap className="w-6 h-6 text-accent-bright" />
                </div>
                <h3 className="text-2xl font-semibold">My Journey</h3>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Motivated IT undergraduate at SLIIT with both academic and hands-on experience 
                in software and web development. Proficient in languages such as Java, Python, 
                C++, JavaScript, and PHP. Experienced in full-stack development using the MERN 
                stack, responsive design, and database integration.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Solid understanding of the Software Development Life Cycle and a passion for 
                solving real-world problems through code. Always eager to learn new technologies 
                and take on challenging projects that push the boundaries of what's possible.
              </p>
            </Card>

            {/* Education */}
            <Card className="p-8 bg-surface border-border hover:shadow-glow transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/20">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-accent-bright">Graduation: 2026</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">BSc (Hons) in Information Technology</h4>
                <p className="text-muted-foreground mb-2">Specialized in IT</p>
                <p className="text-muted-foreground">Faculty of Computing, SLIIT</p>
              </div>
            </Card>
          </div>

          {/* Skills Section */}
          <div className="space-y-8 animate-fade-in-up delay-200">
            <h3 className="text-2xl font-semibold text-center lg:text-left">Technical Skills</h3>
            
            <div className="grid gap-6">
              {skillCategories.map((category, index) => (
                <Card 
                  key={category.title} 
                  className="p-6 bg-surface border-border hover:shadow-glow transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                    <h4 className="font-semibold">{category.title}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-accent/10 text-accent-bright border border-accent/20 hover:bg-accent/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;