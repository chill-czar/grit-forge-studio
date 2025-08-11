import { useState, useEffect } from 'react';
import { Menu, X, Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update current section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const currentPos = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && currentPos >= element.offsetTop && currentPos < element.offsetTop + element.offsetHeight) {
          setCurrentSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/90 backdrop-blur-md border-b border-electric-blue/20 shadow-cyber' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo/Brand */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <Terminal className="w-8 h-8 text-electric-blue group-hover:animate-neon-pulse transition-all duration-300" />
              <div className="absolute inset-0 bg-electric-blue/20 blur-xl group-hover:blur-lg transition-all duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-foreground group-hover:text-electric-blue transition-colors duration-300">
                JIMMY
              </span>
              <div className="text-xs font-mono text-muted-foreground">
                /{currentSection}
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-electric-blue ${
                  currentSection === link.id 
                    ? 'text-electric-blue' 
                    : 'text-muted-foreground'
                }`}
              >
                {link.label}
                {currentSection === link.id && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-neon" />
                )}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden sm:flex items-center gap-4">
            <a 
              href="https://github.com/jimmy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-electric-blue transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/jimmy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-vivid-cyan transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:jimmy@example.com"
              className="text-muted-foreground hover:text-acid-green transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground hover:text-electric-blue"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-electric-blue/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left text-lg font-medium transition-all duration-300 hover:text-electric-blue ${
                    currentSection === link.id 
                      ? 'text-electric-blue' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              {/* Mobile Social Links */}
              <div className="flex gap-6 mt-4 pt-4 border-t border-electric-blue/20">
                <a 
                  href="https://github.com/jimmy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-electric-blue transition-colors duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/jimmy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-vivid-cyan transition-colors duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="mailto:jimmy@example.com"
                  className="text-muted-foreground hover:text-acid-green transition-colors duration-300"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;