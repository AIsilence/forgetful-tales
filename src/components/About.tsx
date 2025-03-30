
import React, { useState } from "react";
import { Brain, BookOpen, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="glass-card rounded-xl p-6 h-full transform hover:scale-[1.02] transition-all duration-300">
      <div className="mb-5 bg-silence-purple/20 text-silence-purple w-12 h-12 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const features = [
    {
      icon: <Brain size={24} />,
      title: "Memory-Based Gameplay",
      description: "Experience the first crypto project where forgetting is a feature, not a bug. The narrative changes based on what you remember."
    },
    {
      icon: <BookOpen size={24} />,
      title: "Interactive Storytelling",
      description: "Dive into the Book of Silence, where pages vanish after reading and the story reshuffles with each visit."
    },
    {
      icon: <Users size={24} />,
      title: "Meme-Driven Community",
      description: "Join a vibrant community of storytellers who keep the tale alive through engagement and memes."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Fair Launch Tokenomics",
      description: "No insiders, no presales—just a truly fair distribution with 80% available to the public."
    },
  ];
  
  return (
    <section id="about" className="py-24 relative overflow-hidden noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-silence-purple to-silence-pink">Silence</span>
          </h2>
          <p className="text-white/70 text-lg mb-6">
            Silence isn't just a coin – it's a story and a community experiment. At its core lies the legend of the Book of Silence, a mystical tale that only exists as long as someone remembers it.
          </p>
          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
            <p className="text-white/70 mb-6">
              Every time a holder reads the story, the pages vanish, leaving only their recollection. The next reader experiences a remixed narrative, as if the book "reshuffles" itself in response to our faltering memory. This endless loop of read, forget, retell becomes the heart of Silence's lore and utility.
            </p>
            <p className="text-white/70">
              Built for crypto degens, meme enthusiasts, and long-term community members who crave something more than the usual dog-coin shtick. The tone is unapologetically funny, meme-driven, and crypto-savvy, constantly poking fun at memory loss and absurd situations.
            </p>
          </div>
          <Button 
            variant="link" 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-silence-purple hover:text-silence-pink mt-2"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AboutCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button className="bg-gradient-to-r from-silence-purple to-silence-pink hover:opacity-90 text-white">
            <BookOpen className="mr-2 h-5 w-5" />
            Experience The Book
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
