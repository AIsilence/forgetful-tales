
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";

const BookPreview = () => {
  const [page, setPage] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  
  const previewPages = [
    {
      title: "The Beginning of Silence",
      content: "In the world of endless noise, there existed a book that could only be read through forgetting. The words would vanish as soon as they were understood..."
    },
    {
      title: "Memory Keepers",
      content: "The Memory Keepers were an ancient order tasked with preserving the most important forgotten knowledge. Their methods were unorthodox but effective..."
    },
    {
      title: "The Forgotten Token",
      content: "Some say the Silence Token was created accidentally when a developer forgot the seed phrase to his most valuable wallet. Others claim it was designed by..."
    }
  ];
  
  const nextPage = () => {
    if (page < previewPages.length - 1) {
      setPage(page + 1);
      setIsRevealed(false);
    }
  };
  
  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
      setIsRevealed(false);
    }
  };
  
  const toggleReveal = () => {
    setIsRevealed(!isRevealed);
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden max-w-md mx-auto my-6 neon-border">
      <div className="bg-gradient-to-r from-silence-purple/20 to-silence-pink/20 p-4 flex justify-between items-center border-b border-white/10">
        <h3 className="text-lg font-semibold flex items-center">
          <BookOpen className="mr-2 h-4 w-4 text-silence-purple" />
          Book of Silence Preview
        </h3>
        <span className="text-sm text-white/60">Page {page + 1}/{previewPages.length}</span>
      </div>
      
      <div className="p-6 min-h-[250px]">
        <h4 className="text-xl font-medium mb-4 text-silence-cyan">{previewPages[page].title}</h4>
        
        <div className="relative mb-6">
          {!isRevealed ? (
            <div className="min-h-[100px] flex flex-col items-center justify-center">
              <p className="text-white/30 text-center italic mb-4">This content will fade from memory after reading...</p>
              <Button 
                variant="outline" 
                className="border-silence-purple text-white hover:bg-silence-purple/20"
                onClick={toggleReveal}
              >
                <Eye className="mr-2 h-4 w-4" />
                Reveal Text
              </Button>
            </div>
          ) : (
            <div className="relative min-h-[100px]">
              <p className="text-white/90 leading-relaxed animate-fade-in">{previewPages[page].content}</p>
              <Button 
                size="sm"
                variant="ghost" 
                className="absolute top-0 right-0 text-white/50"
                onClick={toggleReveal}
              >
                <EyeOff className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
        
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
          <Button
            variant="ghost" 
            size="sm"
            onClick={prevPage}
            disabled={page === 0}
            className={`${page === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> 
            Previous
          </Button>
          
          {page === previewPages.length - 1 ? (
            <Link to="/book-experience">
              <Button size="sm" className="bg-silence-purple hover:bg-silence-purple/90 text-white">
                <BookOpen className="mr-2 h-4 w-4" />
                Full Experience
              </Button>
            </Link>
          ) : (
            <Button variant="ghost" size="sm" onClick={nextPage}>
              Next
              <ChevronRight className="h-4 w-4 ml-1" /> 
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookPreview;
