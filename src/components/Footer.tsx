import React from "react";
import { Twitter, BookOpen, Github, ExternalLink, Heart, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import bookLogo from '/lovable-uploads/69885aeb-1af1-4a44-8f63-14d4771e2505.png';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Footer = () => {
  return (
    <footer className="relative noise-bg border-t border-silence-purple/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="mb-4 flex items-center">
              <img src={bookLogo} alt="Silence Logo" className="h-10 w-10 mr-2 rounded-full object-cover" />
              <Link to="/" className="text-2xl font-bold text-white block">SILENCE</Link>
            </div>
            <p className="text-white/60 mt-2">
              Embrace Oblivion, Unleash the Meme. The memory-based meme coin on Solana.
            </p>
            
            <div className="flex space-x-3 mt-4">
              <a href="https://x.com/Silence_sol" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-silence-dark border border-silence-purple/30 flex items-center justify-center text-white/70 hover:text-silence-purple hover:border-silence-purple transition-colors">
                <Twitter size={16} />
              </a>
              <a href="https://github.com/AIsilence" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-silence-dark border border-silence-purple/30 flex items-center justify-center text-white/70 hover:text-silence-purple hover:border-silence-purple transition-colors">
                <Github size={16} />
              </a>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="w-9 h-9 rounded-full bg-silence-dark border border-silence-purple/30 flex items-center justify-center text-white/70 hover:text-silence-purple hover:border-silence-purple transition-colors cursor-pointer">
                      <MessageCircle size={16} />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-silence-dark border border-silence-purple text-white">
                    <p>Coming Soon</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/learn-more" className="text-white/60 hover:text-silence-purple transition-colors">
                  About Silence
                </Link>
              </li>
              <li>
                <Link to="/story" className="text-white/60 hover:text-silence-purple transition-colors">
                  Read the Story
                </Link>
              </li>
              <li>
                <Link to="/tokenomics" className="text-white/60 hover:text-silence-purple transition-colors">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link to="/roadmap" className="text-white/60 hover:text-silence-purple transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/book-experience" className="text-white/60 hover:text-silence-purple transition-colors">
                  Experience The Book
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-white/60 hover:text-silence-purple transition-colors flex items-center">
                  FAQ
                  <ExternalLink size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <Link to="/learn-more" className="text-white/60 hover:text-silence-purple transition-colors flex items-center">
                  Documentation
                  <ExternalLink size={14} className="ml-1" />
                </Link>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-silence-purple transition-colors flex items-center">
                  GitHub
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-silence-purple/10 text-center text-white/50 text-sm flex flex-col md:flex-row justify-between items-center">
          <div>
            © 2025 Silence. All rights reserved. <span className="text-xs">(Or forgotten, we can't remember)</span>
          </div>
          <div className="mt-2 md:mt-0">
            Made with <Heart size={14} className="inline text-silence-pink mx-1" /> by the community
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
