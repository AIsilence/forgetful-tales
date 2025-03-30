
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StoryExperience from "@/components/StoryExperience";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [hasShownToast, setHasShownToast] = useState(false);

  useEffect(() => {
    if (!hasShownToast) {
      setTimeout(() => {
        toast({
          title: "Memory fading...",
          description: "You just read something important, but it's already disappearing from your mind.",
          variant: "destructive",
        });
        setHasShownToast(true);
      }, 8000);
    }
    
    // Add a scroll event listener for memory effect
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 2000 && Math.random() > 0.99) {
        toast({
          title: "Wait, what was I doing?",
          description: "Your memory seems to be playing tricks on you...",
        });
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [toast, hasShownToast]);

  return (
    <div className="min-h-screen bg-silence-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <StoryExperience />
        <Tokenomics />
        <Roadmap />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
