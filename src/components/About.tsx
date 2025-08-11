import { useState, useEffect, useRef } from 'react';
import { GraduationCap, Code, Rocket, Trophy, BookOpen, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const timelineEvents = [
    {
      year: '2019',
      icon: GraduationCap,
      title: 'The Great Escape',
      description: 'Dropped out after 12th grade. While classmates prepared for college, I dove into JavaScript documentation.',
      color: 'text-glitch-red'
    },
    {
      year: '2020',
      icon: Code,
      title: 'First Lines of Rebellion',
      description: 'Built my first full-stack app. 10,000+ hours of coding later, the obsession was real.',
      color: 'text-electric-blue'
    },
    {
      year: '2021',
      icon: Rocket,
      title: 'Freelance Warrior',
      description: 'Started taking on complex projects. Clients didn\'t care about my degree - they cared about results.',
      color: 'text-vivid-cyan'
    },
    {
      year: '2022',
      icon: Trophy,
      title: 'Agency Founder',
      description: 'Co-founded a digital agency. Proving that skills > credentials, one project at a time.',
      color: 'text-acid-green'
    },
    {
      year: '2023',
      icon: BookOpen,
      title: 'Thought Leader',
      description: 'Started sharing knowledge through tech blogs and mentoring. Teaching the next generation of rebels.',
      color: 'text-chrome-silver'
    },
    {
      year: '2024',
      icon: Zap,
      title: 'Innovation Master',
      description: 'Leading cutting-edge projects with AI integration, micro-services, and advanced frontend architectures.',
      color: 'text-neon-glow'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-20 overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-acid-green/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-0.5 bg-gradient-neon" />
            <span className="text-electric-blue font-mono text-sm tracking-wider">
              ./about_jimmy.md
            </span>
            <div className="w-8 h-0.5 bg-gradient-neon" />
          </div>
          <h2 className="text-4xl md:text-6xl font-brutal font-black text-foreground mb-6">
            THE DROPOUT WHO
            <span className="block bg-gradient-neon bg-clip-text text-transparent">
              REWROTE THE RULES
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            They said a piece of paper defines your worth. I said code speaks louder than credentials.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column - Philosophy */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <Card className="p-8 bg-card/50 border-electric-blue/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-electric-blue mb-4">The Philosophy</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  "While the world obsessed over grades, I obsessed over <span className="text-acid-green font-mono">git commits</span>. 
                  While others memorized textbooks, I memorized <span className="text-vivid-cyan font-mono">Stack Overflow</span>."
                </p>
                <p>
                  "Every rejected college application became fuel. Every 'you need a degree' became 
                  motivation to build something they couldn't ignore."
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 border-acid-green/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-acid-green mb-4">The Obsession</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-electric-blue">10,000+</div>
                  <div className="text-sm text-muted-foreground">Hours Coded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-vivid-cyan">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-acid-green">365</div>
                  <div className="text-sm text-muted-foreground">Days Learning</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-chrome-silver">∞</div>
                  <div className="text-sm text-muted-foreground">Curiosity Level</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Timeline */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <h3 className="text-2xl font-bold text-chrome-silver mb-8 text-center">The Journey</h3>
            <div className="space-y-6">
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.year}
                  className={`flex gap-4 transition-all duration-500 delay-${(index + 1) * 100} ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className={`p-3 rounded-full bg-card border-2 border-current ${event.color}`}>
                      <event.icon className="w-5 h-5" />
                    </div>
                    {index < timelineEvents.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-current to-transparent opacity-30" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-lg font-bold ${event.color}`}>{event.year}</span>
                      <span className="text-lg font-bold text-foreground">{event.title}</span>
                    </div>
                    <p className="text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className={`text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <Card className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-card/50 to-muted/20 border-vivid-cyan/20 backdrop-blur-sm">
            <blockquote className="text-2xl md:text-3xl font-mono text-foreground leading-relaxed">
              "They taught me to <span className="text-glitch-red line-through">follow rules</span>.
              <br />
              Code taught me to <span className="text-acid-green">break them beautifully</span>."
            </blockquote>
            <cite className="block mt-6 text-vivid-cyan font-bold">- Jimmy, Code Rebel</cite>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;