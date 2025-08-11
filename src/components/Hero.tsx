import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Terminal, Code2, Zap } from 'lucide-react';

const Hero = () => {
  const [glitchText, setGlitchText] = useState('CODE MASTER');
  const [isVisible, setIsVisible] = useState(false);

  const glitchVariants = ['C0D3 M4ST3R', 'CÔDE MÅSTER', 'CODE MASTER', '©ØÐΞ MÅŞTΕR'];

  useEffect(() => {
    setIsVisible(true);
    
    const glitchInterval = setInterval(() => {
      const randomVariant = glitchVariants[Math.floor(Math.random() * glitchVariants.length)];
      setGlitchText(randomVariant);
      
      setTimeout(() => {
        setGlitchText('CODE MASTER');
      }, 150);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center max-w-6xl mx-auto px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
        
        {/* Glitch label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Terminal className="w-5 h-5 text-acid-green" />
          <span className="text-acid-green font-mono text-sm tracking-wider">
            ./portfolio/jimmy_dev
          </span>
        </div>

        {/* Main headline with glitch effect */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-brutal font-black mb-6">
          <span className="block text-foreground mb-2">FROM DROPOUT</span>
          <span className="block text-foreground mb-2">REBEL TO</span>
          <span 
            className={`block bg-gradient-neon bg-clip-text text-transparent animate-neon-pulse ${
              glitchText !== 'CODE MASTER' ? 'animate-glitch' : ''
            }`}
          >
            {glitchText}
          </span>
        </h1>

        {/* Subheadline */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Self-taught. Obsessed. Relentless.
            <br />
            <span className="text-vivid-cyan font-mono">
              Turning dropouts into innovations since 2019
            </span>
          </p>
        </div>

        {/* Manifesto */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="bg-card/50 border border-electric-blue/20 rounded-lg p-8 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-electric-blue" />
              <span className="text-electric-blue font-mono text-sm">manifesto.txt</span>
            </div>
            <p className="text-lg text-foreground leading-relaxed font-mono">
              "While others collected degrees, I collected skills. 
              While they followed syllabuses, I followed curiosity. 
              <span className="text-acid-green"> The system said I'd fail.</span>
              <span className="text-electric-blue"> Code said otherwise.</span>"
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-neon hover:shadow-neon transition-all duration-300 text-black font-bold px-8 py-4 text-lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Zap className="w-5 h-5 mr-2" />
            See The Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-chrome-silver text-chrome-silver hover:bg-chrome-silver hover:text-black transition-all duration-300 px-8 py-4 text-lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            The Story
          </Button>
        </div>

        {/* Scroll indicator */}
        <button 
          onClick={scrollToNext}
          className="animate-bounce cursor-pointer hover:text-electric-blue transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>

      {/* Chrome accent lines */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-chrome opacity-30" />
      <div className="absolute top-0 right-0 w-1 h-full bg-gradient-cyber opacity-20" />
    </section>
  );
};

export default Hero;