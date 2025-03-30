
import React, { useEffect, useState } from "react";
import { BookOpen, ArrowLeft, Volume2, BookX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const Story = () => {
  const { toast } = useToast();
  const [currentPage, setCurrentPage] = useState(1);
  const [storyText, setStoryText] = useState("");
  const [fadeText, setFadeText] = useState(false);
  
  const storyChapters = [
    {
      title: "Chapter I: The Beginning of Forgetting",
      content: "Once upon a time in a market far away, a degenerate ape forgot his seed phrase. The void grew stronger with each forgotten word, consuming memories like a hungry beast. The ape wandered through the blockchain, searching for what he had lost..."
    },
    {
      title: "Chapter II: The Library of Oblivion",
      content: "Deep in the recesses of the digital realm stood the Library of Oblivion. Its shelves stretched endlessly, filled with books whose words faded as soon as they were read. Only those who embraced forgetting could enter and leave with wisdom..."
    },
    {
      title: "Chapter III: The Memory Keepers",
      content: "A secret society of Memory Keepers protected what remained of the collective wisdom. They spoke in whispers and wrote in vanishing ink. 'To remember everything is to be paralyzed by the past,' they said. 'To forget selectively is to be free.'"
    },
    {
      title: "Chapter IV: The Great Forgetting",
      content: "As markets rose and fell, as tokens came and went, a strange phenomenon spread across the chain. The Great Forgetting swept through, erasing the names of failed projects and embarrassing investments. Some called it a curse. The wise called it mercy."
    },
    {
      title: "Chapter V: The Whispers of Silence",
      content: "Those who listened carefully could hear the whispers of Silence. Not absence of sound, but presence of possibility. In these whispers were alpha—secrets that vanished if spoken aloud. The true degens learned to navigate by these whispers alone."
    }
  ];

  useEffect(() => {
    // Set the story text and add the fading effect
    setStoryText(storyChapters[currentPage - 1].content);
    setFadeText(false);
    
    // After 8 seconds, start fading the text
    const timeout = setTimeout(() => {
      setFadeText(true);
      
      // Show a toast when the text starts fading
      toast({
        title: "The words are fading...",
        description: "Quick, try to remember what you just read!",
      });
    }, 8000);
    
    return () => clearTimeout(timeout);
  }, [currentPage, toast]);
  
  const goToNextPage = () => {
    if (currentPage < storyChapters.length) {
      setCurrentPage(prev => prev + 1);
    } else {
      // Back to beginning if we reach the end
      setCurrentPage(1);
      toast({
        title: "The story resets itself",
        description: "As all memories eventually do...",
      });
    }
  };
  
  const forgotPage = () => {
    toast({
      title: "Page forgotten",
      description: "Some memories are best left behind...",
      variant: "destructive",
    });
    
    // Go to next page after "forgetting"
    goToNextPage();
  };

  return (
    <div className="min-h-screen bg-silence-dark text-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Link to="/" className="text-white/70 hover:text-white flex items-center transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-silence-purple to-silence-pink">
              The Book of Silence
            </h1>
            
            <div className="glass-card rounded-xl p-8 mb-8 relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">{storyChapters[currentPage - 1].title}</h2>
                <div className="flex space-x-3">
                  <BookX size={20} className="text-silence-pink animate-flicker" />
                  <Volume2 size={20} className="text-silence-cyan" />
                </div>
              </div>
              
              <div className="relative min-h-[200px]">
                <p className={`text-lg leading-relaxed ${fadeText ? 'animate-disappear-text' : ''}`}>
                  {storyText}
                </p>
                
                {fadeText && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white/30 italic">The words have faded from the page...</p>
                  </div>
                )}
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-sm text-white/50">
                Page {currentPage} of {storyChapters.length}
              </p>
              
              <div className="flex space-x-4">
                <Button 
                  variant="ghost" 
                  className="text-white/70 hover:text-white hover:bg-white/10"
                  onClick={forgotPage}
                >
                  <BookX className="mr-2 h-4 w-4" />
                  Forget Page
                </Button>
                
                <Button 
                  className="bg-gradient-to-r from-silence-purple to-silence-pink text-white hover:opacity-90"
                  onClick={goToNextPage}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Continue Reading
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Story;
