import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, Linkedin, Github, Send, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('wwZJR37GVSI42adKX');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Janith Navoda'
      };

      await emailjs.send(
        'service_83g36j8',
        'template_416k57f',
        templateParams
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'janith.navoda@example.com',
      href: 'mailto:janith.navoda@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 77 123 4567',
      href: 'tel:+94771234567'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/janithnavoda',
      href: 'https://linkedin.com/in/janithnavoda'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/janithnavoda',
      href: 'https://github.com/janithnavoda'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-surface border-border hover:shadow-glow transition-all duration-300 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-full bg-accent/20">
                <Send className="w-6 h-6 text-accent-bright" />
              </div>
              <h3 className="text-2xl font-semibold">Send Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  required
                  className="bg-surface-elevated border-border focus:border-accent-bright"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="bg-surface-elevated border-border focus:border-accent-bright"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  required
                  className="bg-surface-elevated border-border focus:border-accent-bright resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="gradient" 
                size="lg" 
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up delay-200">
            <Card className="p-8 bg-surface border-border hover:shadow-glow transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/20">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Contact Information</h3>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg bg-surface-elevated hover:bg-accent/10 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                      <info.icon className="w-5 h-5 text-accent-bright" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-accent-bright transition-colors">
                        {info.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Contact */}
            <Card className="p-8 bg-gradient-surface border-border">
              <h4 className="text-xl font-semibold mb-4">Quick Response</h4>
              <p className="text-muted-foreground mb-6">
                Typically respond within 24 hours. For urgent inquiries, feel free to reach out directly via phone or LinkedIn.
              </p>
              
              <div className="flex gap-4">
                <Button 
                  variant="neon" 
                  asChild
                  className="flex-1"
                >
                  <a href="tel:+94771234567">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                
                <Button 
                  variant="outline" 
                  asChild
                  className="flex-1 border-accent/30 hover:bg-accent/10"
                >
                  <a href="https://linkedin.com/in/janithnavoda" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="max-w-2xl mx-auto p-6 bg-surface-elevated rounded-lg border border-border">
            <h4 className="font-semibold mb-2">Open to Opportunities</h4>
            <p className="text-muted-foreground">
              Currently seeking internship and entry-level opportunities in software development. 
              Available for freelance projects and open-source collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;