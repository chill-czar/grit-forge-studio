import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Twitter, 
  Send, 
  Coffee, 
  Zap,
  MessageSquare,
  Calendar,
  Globe
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // You would typically show a success toast here
    }, 2000);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/jimmy',
      color: 'text-chrome-silver hover:text-white',
      description: 'Code repositories & open source contributions'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/jimmy',
      color: 'text-vivid-cyan hover:text-white',
      description: 'Professional network & career journey'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/jimmy_codes',
      color: 'text-electric-blue hover:text-white',
      description: 'Tech thoughts & industry insights'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:jimmy@example.com',
      color: 'text-acid-green hover:text-white',
      description: 'Direct communication channel'
    }
  ];

  const contactOptions = [
    {
      title: 'Project Collaboration',
      description: 'Have a challenging project? Let\'s build something revolutionary together.',
      icon: Zap,
      color: 'electric-blue',
      action: 'Discuss Project'
    },
    {
      title: 'Mentorship & Consulting',
      description: 'Need technical guidance or code review? I help teams level up.',
      icon: MessageSquare,
      color: 'acid-green',
      action: 'Book Session'
    },
    {
      title: 'Speaking & Workshops',
      description: 'Want me to share the dropout-to-master story at your event?',
      icon: Calendar,
      color: 'vivid-cyan',
      action: 'Check Availability'
    },
    {
      title: 'Coffee Chat',
      description: 'Just want to talk tech, life, or the future? I\'m always down.',
      icon: Coffee,
      color: 'chrome-silver',
      action: 'Grab Coffee'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'electric-blue': 'text-electric-blue border-electric-blue/20 bg-electric-blue/5 hover:shadow-neon',
      'acid-green': 'text-acid-green border-acid-green/20 bg-acid-green/5 hover:shadow-acid',
      'vivid-cyan': 'text-vivid-cyan border-vivid-cyan/20 bg-vivid-cyan/5 hover:shadow-cyber',
      'chrome-silver': 'text-chrome-silver border-chrome-silver/20 bg-chrome-silver/5'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap['electric-blue'];
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 overflow-hidden">
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-card to-background" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-acid-green/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-electric-blue/10 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <MessageSquare className="w-6 h-6 text-acid-green" />
            <span className="text-acid-green font-mono text-sm tracking-wider">
              ./contact/connect.sh
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-brutal font-black text-foreground mb-6">
            LET'S BUILD
            <span className="block bg-gradient-neon bg-clip-text text-transparent">
              SOMETHING EPIC
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got a wild idea? A complex challenge? Or just want to chat about code and rebellion?
            <br />
            <span className="text-vivid-cyan font-mono">I'm always up for the next adventure.</span>
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {contactOptions.map((option, index) => (
            <Card 
              key={option.title}
              className={`p-6 text-center cursor-pointer transition-all duration-300 hover:scale-105 
                ${getColorClasses(option.color)} group`}
            >
              <div className="mb-4">
                <div className={`inline-flex p-4 rounded-full bg-current/10 group-hover:bg-current/20 transition-colors duration-300`}>
                  <option.icon className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-current transition-colors duration-300">
                {option.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {option.description}
              </p>
              <Button 
                size="sm" 
                variant="outline"
                className="border-current/30 text-current hover:bg-current/10 transition-all duration-300"
              >
                {option.action}
              </Button>
            </Card>
          ))}
        </div>

        {/* Main Contact Form */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-electric-blue/20">
              <div className="flex items-center gap-2 mb-6">
                <Send className="w-5 h-5 text-electric-blue" />
                <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-background/50 border-electric-blue/20 focus:border-electric-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="bg-background/50 border-electric-blue/20 focus:border-electric-blue"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background/50 border-electric-blue/20 focus:border-electric-blue"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, idea, or just say hi..."
                    rows={6}
                    required
                    className="bg-background/50 border-electric-blue/20 focus:border-electric-blue resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-neon hover:shadow-neon text-black font-bold text-lg py-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 mr-2 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Social Links & Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            
            {/* Social Links */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-acid-green/20">
              <div className="flex items-center gap-2 mb-6">
                <Globe className="w-5 h-5 text-acid-green" />
                <h3 className="text-2xl font-bold text-foreground">Connect Elsewhere</h3>
              </div>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-background/30 hover:bg-background/50 
                             border border-muted/20 hover:border-current/30 transition-all duration-300 group"
                  >
                    <div className={`p-2 rounded-lg bg-current/10 ${link.color} transition-colors duration-300`}>
                      <link.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-foreground group-hover:text-current transition-colors duration-300">
                        {link.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {link.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Quick Info */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-vivid-cyan/20">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-5 h-5 text-vivid-cyan" />
                <h3 className="text-2xl font-bold text-foreground">Quick Stats</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Response Time:</span>
                  <span className="text-vivid-cyan font-mono">&lt; 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Timezone:</span>
                  <span className="text-vivid-cyan font-mono">UTC-5 (EST)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Availability:</span>
                  <span className="text-acid-green font-mono">Open for projects</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Coffee Preference:</span>
                  <span className="text-chrome-silver font-mono">Black, strong</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-card/30 to-muted/10 border-chrome-silver/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to break some rules together?</h3>
            <p className="text-lg font-mono text-muted-foreground">
              "The best projects happen when rebels collaborate.
              <br />
              <span className="text-electric-blue">Let's build something they said was impossible.</span>"
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;