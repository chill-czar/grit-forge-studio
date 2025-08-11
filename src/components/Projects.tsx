import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ExternalLink, 
  Github, 
  Play, 
  Zap, 
  Database, 
  Globe, 
  Smartphone,
  ShoppingCart,
  MessageSquare,
  BarChart3,
  Brain
} from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Neural Commerce Platform',
      subtitle: 'AI-Powered E-commerce Revolution',
      description: 'Built a full-stack e-commerce platform with AI-driven product recommendations, real-time inventory management, and advanced analytics. Features include micro-frontend architecture, event-driven backend, and ML-powered personalization.',
      icon: Brain,
      color: 'electric-blue',
      image: '/api/placeholder/600/400',
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS', 'TensorFlow'],
      highlights: [
        '40% increase in conversion rates',
        'Handles 100K+ concurrent users',
        'Sub-200ms API response times',
        'Real-time ML recommendations'
      ],
      github: 'https://github.com/jimmy/neural-commerce',
      live: 'https://neural-commerce.demo.com',
      caseStudy: 'https://blog.jimmy.dev/neural-commerce-case-study'
    },
    {
      id: 2,
      title: 'CyberDash Analytics',
      subtitle: 'Real-time Data Visualization Engine',
      description: 'A brutalist-inspired analytics dashboard that processes millions of data points in real-time. Built with WebSockets, custom charting libraries, and a microservices architecture for maximum scalability.',
      icon: BarChart3,
      color: 'acid-green',
      image: '/api/placeholder/600/400',
      tech: ['Vue.js', 'D3.js', 'FastAPI', 'TimescaleDB', 'Kafka', 'WebSockets', 'GCP'],
      highlights: [
        'Processes 1M+ events/second',
        'Custom WebGL visualizations',
        '99.9% uptime achieved',
        'Real-time collaborative features'
      ],
      github: 'https://github.com/jimmy/cyberdash',
      live: 'https://cyberdash.demo.com',
      caseStudy: 'https://blog.jimmy.dev/cyberdash-technical-deep-dive'
    },
    {
      id: 3,
      title: 'Quantum Chat Network',
      subtitle: 'Next-Gen Communication Platform',
      description: 'End-to-end encrypted messaging platform with quantum-resistant cryptography, AR/VR integration, and advanced group collaboration tools. Built for the future of digital communication.',
      icon: MessageSquare,
      color: 'vivid-cyan',
      image: '/api/placeholder/600/400',
      tech: ['React Native', 'WebRTC', 'Rust', 'MongoDB', 'Kubernetes', 'Three.js', 'WebAssembly'],
      highlights: [
        'Quantum-resistant encryption',
        'Cross-platform AR/VR support',
        '500K+ active users',
        'Sub-100ms message delivery'
      ],
      github: 'https://github.com/jimmy/quantum-chat',
      live: 'https://quantum-chat.app',
      caseStudy: 'https://blog.jimmy.dev/building-quantum-chat'
    },
    {
      id: 4,
      title: 'DevOps Automation Suite',
      subtitle: 'Infrastructure as Code Platform',
      description: 'Comprehensive DevOps platform that automates infrastructure provisioning, CI/CD pipelines, and monitoring. Features advanced GitOps workflows and intelligent resource optimization.',
      icon: Zap,
      color: 'chrome-silver',
      image: '/api/placeholder/600/400',
      tech: ['Go', 'Terraform', 'Kubernetes', 'Prometheus', 'Grafana', 'GitLab CI', 'Helm'],
      highlights: [
        '90% faster deployment times',
        'Auto-scaling optimization',
        'Multi-cloud support',
        'Zero-downtime deployments'
      ],
      github: 'https://github.com/jimmy/devops-suite',
      live: 'https://devops.jimmy.dev',
      caseStudy: 'https://blog.jimmy.dev/devops-automation-journey'
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
    <section id="projects" ref={sectionRef} className="relative py-20 overflow-hidden">
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-muted/20" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-vivid-cyan/5 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-gradient-cyber" />
            <span className="text-vivid-cyan font-mono text-sm tracking-wider">
              projects/showcase.tsx
            </span>
            <div className="w-8 h-0.5 bg-gradient-cyber" />
          </div>
          <h2 className="text-4xl md:text-6xl font-brutal font-black text-foreground mb-6">
            BATTLE-TESTED
            <span className="block bg-gradient-cyber bg-clip-text text-transparent">
              INNOVATIONS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real products. Real users. Real impact.
            <br />
            <span className="text-electric-blue font-mono">Each project pushed boundaries and broke expectations.</span>
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 
                transition-all duration-500 hover:scale-[1.02] cursor-pointer
                ${getColorClasses(project.color)}
                delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              onMouseEnter={() => setActiveProject(project.id)}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-current/5 to-current/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-16 h-16 opacity-20" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="bg-background/80 border-current/50 text-current">
                    {project.tech.length} Technologies
                  </Badge>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-current transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-current font-mono text-sm">
                      {project.subtitle}
                    </p>
                  </div>
                  <project.icon className="w-8 h-8 text-current" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-foreground mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="text-xs border-current/30 text-current hover:bg-current/10 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-current rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-current/10 hover:bg-current/20 text-current border-current/30"
                    variant="outline"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-muted text-muted-foreground hover:text-current hover:border-current"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-muted text-muted-foreground hover:text-current hover:border-current"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Case Study
                  </Button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-current/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-card/30 to-muted/10 border-electric-blue/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-foreground mb-4">Want to see more?</h3>
            <p className="text-muted-foreground mb-6">
              These are just the highlights. I've built 50+ projects, 
              contributed to open source, and helped startups scale from zero to millions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-neon hover:shadow-neon text-black font-bold"
              >
                <Github className="w-5 h-5 mr-2" />
                View All on GitHub
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-chrome-silver text-chrome-silver hover:bg-chrome-silver hover:text-black"
              >
                <Globe className="w-5 h-5 mr-2" />
                Read Case Studies
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;