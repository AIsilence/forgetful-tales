
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, BookOpen, Volume2, BookX, Bell, BellOff } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import bookImage from '/lovable-uploads/69885aeb-1af1-4a44-8f63-14d4771e2505.png';

const Hero = () => {
  const { toast } = useToast();
  const [loaded, setLoaded] = useState(false);
  const [vanishingText, setVanishingText] = useState("You will soon forget this message...");
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [memoryPoints, setMemoryPoints] = useState(0);
  
  useEffect(() => {
    setLoaded(true);
    
    const timeout = setTimeout(() => {
      setVanishingText("");
    }, 5000);
    
    // Simulate earning memory points
    const interval = setInterval(() => {
      setMemoryPoints(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 12000);
    
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);
  
  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
    
    toast({
      title: notificationsEnabled ? "Notifications disabled" : "Notifications enabled",
      description: notificationsEnabled ? 
        "You will no longer receive memory updates." : 
        "You will now receive updates about your memory journey.",
    });
  };
  
  const handleInteraction = () => {
    const pointsEarned = Math.floor(Math.random() * 10) + 5;
    setMemoryPoints(prev => prev + pointsEarned);
    
    toast({
      title: `+${pointsEarned} Memory Points`,
      description: "Your interaction with the Book of Silence has been rewarded.",
    });
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-16">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          poster={bookImage}
        >
          <source src="https://app.runwayml.com/creation/956b8d3c-5a04-4b9d-961d-8df1a4974e9e" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className={`transform ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000 ease-out`}>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2 bg-silence-purple/20 px-3 py-1 rounded-full">
                <Brain className="h-4 w-4 text-silence-purple" />
                <span className="text-sm font-medium">{memoryPoints} Memory Points</span>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full" 
                onClick={toggleNotifications}
              >
                {notificationsEnabled ? 
                  <Bell className="h-5 w-5 text-silence-cyan" /> : 
                  <BellOff className="h-5 w-5 text-white/60" />
                }
              </Button>
            </div>
          
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-silence-purple to-silence-pink">Silence:</span>
              <span className="block">Embrace Oblivion,</span>
              <span className="block">Unleash the Meme</span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-xl">
              The first meme coin that turns forgetting into gameplay. Join our community and experience the book that can only be read through oblivion.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/story">
                <Button size="lg" className="bg-gradient-to-r from-silence-purple to-silence-pink hover:opacity-90 text-white">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read the Story
                </Button>
              </Link>
              <Link to="/learn-more">
                <Button size="lg" variant="outline" className="border-silence-purple text-white hover:bg-silence-purple/20">
                  <Brain className="mr-2 h-5 w-5" />
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="mt-8 text-white/60 text-sm">
              {vanishingText && (
                <p className="animate-disappear-text italic">{vanishingText}</p>
              )}
            </div>
          </div>

          <div className={`relative ${loaded ? 'opacity-100' : 'opacity-0'} transition-all duration-1000 delay-300`}>
            <div className="aspect-square max-w-lg mx-auto relative">
              {/* Interactive book element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full max-w-md relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-silence-purple/20 to-silence-pink/20 rounded-2xl glass-card neon-border transform rotate-3 animate-float"></div>
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl -rotate-3 border border-white/10 overflow-hidden">
                    <div className="p-8 h-full flex flex-col">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-2xl font-bold text-white">Book of Silence</h3>
                        <div className="flex space-x-3">
                          <BookX size={20} className="text-silence-pink animate-flicker" />
                          <Volume2 size={20} className="text-silence-cyan" />
                        </div>
                      </div>
                      
                      <div className="flex-1 overflow-hidden relative flex justify-center items-center">
                        <img 
                          src={bookImage} 
                          alt="Book of Silence" 
                          className="w-full h-auto max-h-60 object-contain" 
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent"></div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-white/10 flex justify-between">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-white/70 hover:text-white hover:bg-white/10"
                          onClick={handleInteraction}
                        >
                          Remember
                        </Button>
                        <Link to="/book-experience">
                          <Button size="sm" className="bg-silence-purple text-white hover:bg-silence-purple/90">
                            Continue Reading
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-silence-cyan/30 filter blur-xl animate-float"></div>
              <div className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-silence-pink/30 filter blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
