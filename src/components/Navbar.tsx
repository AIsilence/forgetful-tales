
import { useState, useEffect } from 'react';
import { Menu, X, Brain, BookOpen, Landmark, Users, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: <Brain className="mr-1" size={16} /> },
    { name: 'Story', href: '#story', icon: <BookOpen className="mr-1" size={16} /> },
    { name: 'Tokenomics', href: '#tokenomics', icon: <Landmark className="mr-1" size={16} /> },
    { name: 'Community', href: '#community', icon: <Users className="mr-1" size={16} /> },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-opacity-80 backdrop-blur-md bg-silence-dark' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-white relative">
              <span className="glitch-wrapper" data-text="SILENCE">SILENCE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-sm text-white/80 hover:text-silence-purple flex items-center transition duration-300"
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-silence-purple text-silence-purple hover:bg-silence-purple/20">
              Whitepaper
            </Button>
            <Button className="bg-gradient-to-r from-silence-purple to-silence-pink text-white hover:opacity-90">
              Launch App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-silence-purple focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-silence-dark/90 backdrop-blur-lg mt-4 rounded-md p-4 animate-fade-in border border-silence-purple/30">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-silence-purple flex items-center transition duration-300"
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-700 flex flex-col space-y-3">
                <Button variant="outline" className="border-silence-purple text-silence-purple hover:bg-silence-purple/20 w-full">
                  Whitepaper
                </Button>
                <Button className="bg-gradient-to-r from-silence-purple to-silence-pink text-white hover:opacity-90 w-full">
                  Launch App
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
