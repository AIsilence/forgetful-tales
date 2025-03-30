
import React, { useState } from "react";
import { Tooltip } from "@/components/ui/tooltip";
import { 
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle, Landmark, Users, Code } from "lucide-react";

const TokenomicsItem = ({ 
  color, 
  percentage, 
  title, 
  description, 
  icon 
}: { 
  color: string; 
  percentage: number; 
  title: string; 
  description: string; 
  icon: React.ReactNode;
}) => {
  return (
    <div className="flex items-center mb-6 last:mb-0">
      <div className={`w-4 h-4 rounded-sm ${color} mr-3 flex-shrink-0`}></div>
      <div className="flex flex-col md:flex-row md:items-center flex-1">
        <div className="md:w-32 font-bold text-lg text-white">{percentage}%</div>
        <div className="flex-1">
          <div className="flex items-center">
            <span className="font-bold text-white flex items-center">
              {icon}
              <span className="ml-2">{title}</span>
            </span>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="ml-2 text-white/40 hover:text-white/60">
                    <HelpCircle size={14} />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs bg-silence-dark border border-silence-purple/30 text-white">
                  <p>{description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TokenomicsContent = () => {
  const [isHovering, setIsHovering] = useState(false);

  const tokenomicsData = [
    {
      color: "bg-silence-purple",
      percentage: 80,
      title: "Fair Launch",
      description: "Available in a fair launch event on DEXes like Raydium. No presale, no early investor allocations. A level playing field for all participants.",
      icon: <Landmark size={16} className="text-silence-purple" />
    },
    {
      color: "bg-silence-cyan",
      percentage: 10,
      title: "Airdrop",
      description: "Free distribution to early supporters and active community members to kickstart engagement and ensure wide token distribution.",
      icon: <Users size={16} className="text-silence-cyan" />
    },
    {
      color: "bg-silence-pink",
      percentage: 10,
      title: "Dev Fund",
      description: "Reserved for ongoing development, marketing, and project treasury. This fund supports the game/app development and community events.",
      icon: <Code size={16} className="text-silence-pink" />
    }
  ];

  return (
    <section id="tokenomics" className="py-24 relative noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-silence-purple to-silence-cyan">Tokenomics</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            $SILENCE is designed with fairness and community in mind. No insiders, no presales—just a memecoin for degens, by degens.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="glass-card rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Token Allocation</h3>
              
              <div className="space-y-6">
                {tokenomicsData.map((item, index) => (
                  <TokenomicsItem
                    key={index}
                    color={item.color}
                    percentage={item.percentage}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                  />
                ))}
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 text-white">Token Details</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between text-white/80">
                  <span>Token Name:</span>
                  <span className="text-white font-medium">Silence</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Token Symbol:</span>
                  <span className="text-white font-medium">$SILENCE</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Total Supply:</span>
                  <span className="text-white font-medium">1,000,000,000 (1 billion)</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Blockchain:</span>
                  <span className="text-white font-medium">Solana</span>
                </div>
                <div className="flex justify-between text-white/80">
                  <span>Token Standard:</span>
                  <span className="text-white font-medium">SPL Token</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div 
              className="token-chart aspect-square max-w-md mx-auto relative"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="relative w-full h-full">
                {/* Circle background */}
                <div className="absolute inset-0 rounded-full border-4 border-silence-purple/30"></div>
                
                {/* Main pie chart */}
                <div className="absolute inset-0">
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    {/* Fair Launch - 80% */}
                    <div 
                      className="absolute w-full h-full bg-silence-purple"
                      style={{ 
                        clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 0%)",
                        transform: "rotate(36deg)" 
                      }}
                    ></div>
                    
                    {/* Airdrop - 10% */}
                    <div 
                      className="absolute w-full h-full bg-silence-cyan"
                      style={{ 
                        clipPath: "polygon(50% 50%, 50% 0%, 18% 0%)",
                        transform: "rotate(0deg)" 
                      }}
                    ></div>
                    
                    {/* Dev Fund - 10% */}
                    <div 
                      className="absolute w-full h-full bg-silence-pink"
                      style={{ 
                        clipPath: "polygon(50% 50%, 50% 0%, 82% 0%)",
                        transform: "rotate(-36deg)" 
                      }}
                    ></div>
                  </div>
                </div>
                
                {/* Center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-silence-dark rounded-full flex items-center justify-center border-4 border-silence-dark">
                  <div className="text-center">
                    <div className="text-sm text-white/60">Total Supply</div>
                    <div className="text-xl font-bold text-white">1B</div>
                  </div>
                </div>
                
                {/* Labels */}
                <div className={`absolute transition-all duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
                  {/* Fair Launch Label */}
                  <div className="absolute top-1/2 left-[85%] transform -translate-y-1/2 bg-silence-dark/80 px-3 py-1 rounded-md border border-silence-purple/30">
                    <div className="text-sm text-white">Fair Launch</div>
                    <div className="text-lg font-bold text-silence-purple">80%</div>
                  </div>
                  
                  {/* Airdrop Label */}
                  <div className="absolute top-[10%] left-[30%] transform -translate-x-1/2 bg-silence-dark/80 px-3 py-1 rounded-md border border-silence-cyan/30">
                    <div className="text-sm text-white">Airdrop</div>
                    <div className="text-lg font-bold text-silence-cyan">10%</div>
                  </div>
                  
                  {/* Dev Fund Label */}
                  <div className="absolute top-[10%] right-[30%] transform translate-x-1/2 bg-silence-dark/80 px-3 py-1 rounded-md border border-silence-pink/30">
                    <div className="text-sm text-white">Dev Fund</div>
                    <div className="text-lg font-bold text-silence-pink">10%</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hover instruction */}
            <div className="text-center mt-4 text-white/40 text-sm italic">
              Hover over the chart to see details
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
