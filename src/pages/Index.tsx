import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import StoryExperience from "@/components/StoryExperience";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import CryptoWidget from "@/components/CryptoWidget";
import BookPreview from "@/components/BookPreview";
import BookNotifications from "@/components/BookNotifications";
import { useToast } from "@/hooks/use-toast";
import { Brain } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  const [hasShownToast, setHasShownToast] = useState(false);
  const [showMemoryBonus, setShowMemoryBonus] = useState(false);

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
    
    // Random memory bonus notification
    const bonusTimeout = setTimeout(() => {
      setShowMemoryBonus(true);
    }, 20000);
    
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(bonusTimeout);
    }
  }, [toast, hasShownToast]);

  return (
    <div className="min-h-screen bg-silence-dark text-white">
      <Navbar />
      <main>
        <Hero />
        
        {/* New interactive section with book preview and crypto widget */}
        <section className="py-12 px-4 relative">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <BookPreview />
                <BookNotifications />
              </div>
              <div className="space-y-8">
                <CryptoWidget />
                
                {/* Interactive Memory Bonus Card */}
                {showMemoryBonus && (
                  <div className="glass-card neon-border p-6 rounded-xl animate-fade-in">
                    <h3 className="text-xl font-bold mb-4 text-silence-pink flex items-center">
                      <Brain className="mr-2" /> Memory Bonus Available!
                    </h3>
                    <p className="text-white/70 mb-6">
                      Your reading patterns have unlocked a special memory bonus. Complete the next chapter to claim your reward.
                    </p>
                    <div className="flex justify-center">
                      <button 
                        className="bg-gradient-to-r from-silence-purple to-silence-pink text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                        onClick={() => {
                          toast({
                            title: "Bonus Claimed!",
                            description: "Your memory points have been boosted by 25%.",
                          });
                          setShowMemoryBonus(false);
                        }}
                      >
                        Claim Bonus
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        <About />
        <StoryExperience />
        <Community />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
