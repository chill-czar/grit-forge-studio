import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette, 
  Settings,
  Zap,
  Globe,
  Server,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
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

  const skillCategories = [
    {
      title: 'Frontend Mastery',
      icon: Code,
      color: 'electric-blue',
      skills: [
        { name: 'React/Next.js', level: 95, description: 'Advanced patterns, SSR, performance optimization' },
        { name: 'TypeScript', level: 90, description: 'Type-safe architectures, advanced generics' },
        { name: 'Vue.js/Nuxt', level: 85, description: 'Composition API, Pinia, server-side rendering' },
        { name: 'Three.js/WebGL', level: 80, description: '3D graphics, shaders, interactive experiences' },
        { name: 'CSS/Tailwind', level: 95, description: 'Advanced animations, responsive design systems' }
      ]
    },
    {
      title: 'Backend Engineering',
      icon: Server,
      color: 'acid-green',
      skills: [
        { name: 'Node.js/Express', level: 90, description: 'Scalable APIs, middleware architecture' },
        { name: 'Python/FastAPI', level: 85, description: 'High-performance APIs, async programming' },
        { name: 'GraphQL', level: 80, description: 'Schema design, query optimization' },
        { name: 'Microservices', level: 85, description: 'Event-driven architecture, service mesh' },
        { name: 'WebSockets', level: 90, description: 'Real-time applications, Socket.io' }
      ]
    },
    {
      title: 'Database & Storage',
      icon: Database,
      color: 'vivid-cyan',
      skills: [
        { name: 'PostgreSQL', level: 85, description: 'Complex queries, performance tuning' },
        { name: 'MongoDB', level: 80, description: 'Aggregation pipelines, indexing strategies' },
        { name: 'Redis', level: 85, description: 'Caching, sessions, pub/sub patterns' },
        { name: 'Elasticsearch', level: 75, description: 'Search engines, analytics' },
        { name: 'Firebase', level: 90, description: 'Real-time databases, authentication' }
      ]
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      color: 'chrome-silver',
      skills: [
        { name: 'Docker/K8s', level: 85, description: 'Containerization, orchestration' },
        { name: 'AWS/GCP', level: 80, description: 'Serverless, CDN, auto-scaling' },
        { name: 'CI/CD', level: 90, description: 'GitHub Actions, deployment pipelines' },
        { name: 'Monitoring', level: 85, description: 'Grafana, logging, alerting' },
        { name: 'Infrastructure as Code', level: 80, description: 'Terraform, CloudFormation' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'electric-blue': 'text-electric-blue border-electric-blue/20 bg-electric-blue/5',
      'acid-green': 'text-acid-green border-acid-green/20 bg-acid-green/5',
      'vivid-cyan': 'text-vivid-cyan border-vivid-cyan/20 bg-vivid-cyan/5',
      'chrome-silver': 'text-chrome-silver border-chrome-silver/20 bg-chrome-silver/5'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap['electric-blue'];
  };

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 overflow-hidden">
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-vivid-cyan/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-acid-green/10 rounded-full blur-3xl animate-float" 
           style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-acid-green" />
            <span className="text-acid-green font-mono text-sm tracking-wider">
              skills.json
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-brutal font-black text-foreground mb-6">
            TECH ARSENAL
            <span className="block bg-gradient-cyber bg-clip-text text-transparent">
              BATTLE-TESTED
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every skill earned through 3AM debugging sessions and production fires. 
            <br />
            <span className="text-vivid-cyan font-mono">No classroom. No theory. Just results.</span>
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className={`p-8 bg-card/50 backdrop-blur-sm border-2 ${getColorClasses(category.color)} 
                transition-all duration-1000 delay-${categoryIndex * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-lg bg-current/10`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(`${category.title}-${skill.name}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Header */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono font-medium text-foreground group-hover:text-current transition-colors duration-300">
                        {skill.name}
                      </span>
                      <Badge 
                        variant="outline" 
                        className={`${getColorClasses(category.color)} border-current/50`}
                      >
                        {skill.level}%
                      </Badge>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-muted/30 rounded-full h-2 mb-2 overflow-hidden">
                      <div 
                        className={`h-full bg-current transition-all duration-1000 delay-${(categoryIndex * 5 + skillIndex) * 100}`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          boxShadow: `0 0 10px currentColor`
                        }}
                      />
                    </div>

                    {/* Skill Description */}
                    <div className={`overflow-hidden transition-all duration-300 ${
                      hoveredSkill === `${category.title}-${skill.name}` 
                        ? 'max-h-20 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      <p className="text-sm text-muted-foreground mt-2 font-mono">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className={`text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h3 className="text-2xl font-bold text-foreground mb-6">Beyond The Code</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'System Design', 'UI/UX Design', 'Team Leadership', 'Project Management',
              'Technical Writing', 'Mentoring', 'Code Review', 'Architecture Planning',
              'Performance Optimization', 'Security Best Practices', 'API Design', 'Testing Strategies'
            ].map((skill, index) => (
              <Badge 
                key={skill}
                variant="outline"
                className={`px-4 py-2 text-sm border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10 
                  transition-all duration-300 hover:scale-105 cursor-default delay-${index * 50}`}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <Card className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-card/30 to-muted/10 border-acid-green/20 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <GitBranch className="w-5 h-5 text-acid-green" />
              <span className="text-acid-green font-mono text-sm">git commit -m "Continuous Learning"</span>
            </div>
            <p className="text-lg font-mono text-foreground">
              "Every technology mastered is a door opened. 
              <br />
              Every project shipped is a limit broken."
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;