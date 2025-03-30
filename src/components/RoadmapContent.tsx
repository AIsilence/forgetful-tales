
import React, { useState, useEffect } from "react";
import { CheckCircle, Circle } from "lucide-react";

type Phase = {
  title: string;
  timeline: string;
  description: string;
  items: {
    text: string;
    completed?: boolean;
  }[];
};

export const RoadmapContent = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("roadmap-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const phases: Phase[] = [
    {
      title: "Phase 1: Launch",
      timeline: "Q2 2025",
      description: "The First Page",
      items: [
        { text: "Token Launch on Solana and DEX listing", completed: false },
        { text: "Airdrop distribution to early supporters", completed: false },
        { text: "Website and initial lore release", completed: false },
        { text: "Social media blitz across Twitter", completed: false },
        { text: "First community meme contest", completed: false }
      ]
    },
    {
      title: "Phase 2: Community Building",
      timeline: "Q3 2025",
      description: "Echoes in the Library",
      items: [
        { text: "Regular meme contests and viral campaigns", completed: false },
        { text: "GitHub games with the forgetful theme", completed: false },
        { text: "Collaborations with influencers and projects", completed: false },
        { text: "Release of Silence litepaper", completed: false },
        { text: "CoinGecko/CoinMarketCap listings", completed: false }
      ]
    },
    {
      title: "Phase 3: App Launch & Utility",
      timeline: "Q4 2025",
      description: "The Book Opens",
      items: [
        { text: "Beta release of Silence dApp", completed: false },
        { text: "$SILENCE integration with gameplay features", completed: false },
        { text: "Expansion of lore with community input", completed: false },
        { text: "First NFT collection drop", completed: false },
        { text: "CEX listings and wider exposure", completed: false }
      ]
    },
    {
      title: "Phase 4: NFT & Metaverse",
      timeline: "Q1-Q2 2026",
      description: "Beyond the Pages",
      items: [
        { text: "Full NFT integration with story moments", completed: false },
        { text: "Community lore creation system", completed: false },
        { text: "Metaverse/VR experience teaser", completed: false },
        { text: "Major partnerships with established projects", completed: false },
        { text: "Charity initiatives with memory-related causes", completed: false }
      ]
    },
    {
      title: "Phase 5: Long-Term & DAO",
      timeline: "Q3 2026+",
      description: "Eternal Echoes",
      items: [
        { text: "Decentralized governance implementation", completed: false },
        { text: "Seasonal story content with new themes", completed: false },
        { text: "Cross-chain expansion possibilities", completed: false },
        { text: "Community-driven development", completed: false },
        { text: "The never-ending story continues...", completed: false }
      ]
    }
  ];

  return (
    <section id="roadmap-section" className="py-24 relative noise-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-silence-cyan to-silence-pink">Roadmap</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Our journey from launch to a vibrant, story-driven ecosystem. Each phase brings us closer to the ultimate meme experience.
          </p>
        </div>

        <div className="mb-12 overflow-x-auto">
          <div className="min-w-max flex justify-center">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative px-1 md:px-4 flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  activePhase === index ? "opacity-100" : "opacity-50 hover:opacity-80"
                }`}
                onClick={() => setActivePhase(index)}
              >
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center z-10 mb-2 transition-all duration-300 ${
                    activePhase === index 
                      ? "bg-silence-purple text-white" 
                      : "bg-silence-dark border border-silence-purple/30 text-white/50"
                  }`}
                >
                  {index + 1}
                </div>
                <div 
                  className={`hidden md:block text-sm font-medium ${
                    activePhase === index ? "text-white" : "text-white/50"
                  }`}
                >
                  {phase.title.split(':')[0]}
                </div>
                <div className="text-xs text-white/60 hidden md:block">{phase.timeline}</div>
                
                {/* Horizontal line */}
                {index < phases.length - 1 && (
                  <div className="absolute top-5 left-[60%] w-full h-0.5 bg-silence-purple/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div 
          className={`max-w-4xl mx-auto transition-all duration-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="glass-card rounded-2xl neon-border overflow-hidden">
            <div className="bg-gradient-to-r from-silence-purple/20 to-silence-pink/20 p-4 flex items-center border-b border-white/10">
              <h3 className="text-xl md:text-2xl font-bold text-white">{phases[activePhase].title}</h3>
              <span className="ml-3 text-white/60 text-sm">
                {phases[activePhase].timeline} - "{phases[activePhase].description}"
              </span>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="space-y-4">
                {phases[activePhase].items.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start"
                    style={{ 
                      transitionDelay: `${index * 100}ms`,
                      animation: isVisible ? `fade-in 0.5s ease forwards ${index * 100}ms` : 'none',
                      opacity: isVisible ? 1 : 0
                    }}
                  >
                    {item.completed ? (
                      <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    ) : (
                      <Circle className="h-6 w-6 text-silence-purple mt-0.5 mr-3 flex-shrink-0" />
                    )}
                    <span className="text-white/90">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/60 text-sm italic">
                  *Roadmap timelines are aspirational and subject to community input and market conditions. The power of Silence lies in its adaptive nature.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
