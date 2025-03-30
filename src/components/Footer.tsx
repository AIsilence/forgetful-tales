
import React from "react";
import { Twitter, Send, BookOpen, Github, ExternalLink, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative noise-bg border-t border-silence-purple/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Link to="/" className="text-2xl font-bold text-white mb-2 block">SILENCE</Link>
              <p className="text-white/60">
                Embrace Oblivion, Unleash the Meme. The memory-based meme coin on Solana.
              </p>
            </div>
            
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 rounded-full bg-silence-dark border border-silence-purple/30 flex items-center justify-center text-white/70 hover:text-silence-purple hover:border-silence-purple transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-silence-dark border border-silence-purple/30 flex items-center justify-center text-white/70 hover:text-silence-purple hover:border-silence-purple transition-colors">
                <Send size={16} />
              </a>
              <Link to="/book-experience" className="w-9 h-9 rounded-full bg-silence-dark border border-silence-purple/30 flex items-center justify-center text-white/70 hover:text-silence-purple hover:border-silence-purple transition-colors">
                <BookOpen size={16} />
              </Link>
              <a href="#" className="w-9 h-9 rounded-full bg-silence-dark border border-silence-purple/30 flex items-center justify-center text-white/70 hover:text-silence-purple hover:border-silence-purple transition-colors">
                <Github size={16} />
              </a>
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
                <Link to="/learn-more?tab=tokenomics" className="text-white/60 hover:text-silence-purple transition-colors">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link to="/learn-more" className="text-white/60 hover:text-silence-purple transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link to="/learn-more?tab=community" className="text-white/60 hover:text-silence-purple transition-colors">
                  Community
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
                <a href="#" className="text-white/60 hover:text-silence-purple transition-colors flex items-center">
                  Contract
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-silence-purple transition-colors flex items-center">
                  Audit
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
              <li>
                <Link to="/faq" className="text-white/60 hover:text-silence-purple transition-colors flex items-center">
                  FAQ
                  <ExternalLink size={14} className="ml-1" />
                </Link>
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
