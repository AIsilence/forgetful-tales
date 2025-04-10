
import { useState, useEffect } from 'react';
import { Menu, X, Brain, BookOpen, Landmark, HelpCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import bookLogo from '/lovable-uploads/book-of-silence.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Story', href: '/story', icon: <BookOpen className="mr-1" size={16} /> },
    { name: 'Learn More', href: '/learn-more', icon: <Brain className="mr-1" size={16} /> },
    { name: 'Experience', href: '/book-experience', icon: <BookOpen className="mr-1" size={16} /> },
    { name: 'Tokenomics', href: '/tokenomics', icon: <Landmark className="mr-1" size={16} /> },
    { name: 'Roadmap', href: '/roadmap', icon: <BookOpen className="mr-1" size={16} /> },
    { name: 'FAQ', href: '/faq', icon: <HelpCircle className="mr-1" size={16} /> },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-opacity-80 backdrop-blur-md bg-silence-dark' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={bookLogo} alt="Silence Logo" className="h-10 w-10 mr-2 rounded-full object-cover" />
            <span className="text-2xl font-bold text-white relative">
              <span className="glitch-wrapper" data-text="SILENCE">SILENCE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                to={item.href} 
                className={`text-sm flex items-center transition duration-300 ${
                  location.pathname === item.href 
                    ? 'text-silence-purple' 
                    : 'text-white/80 hover:text-silence-purple'
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/book-experience">
              <Button className="bg-gradient-to-r from-silence-purple to-silence-pink text-white hover:opacity-90">
                Launch App
              </Button>
            </Link>
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
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center transition duration-300 ${
                    location.pathname === item.href 
                      ? 'text-silence-purple' 
                      : 'text-white/80 hover:text-silence-purple'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-700 flex flex-col space-y-3">
                <Link to="/book-experience" className="w-full">
                  <Button className="bg-gradient-to-r from-silence-purple to-silence-pink text-white hover:opacity-90 w-full">
                    Launch App
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
