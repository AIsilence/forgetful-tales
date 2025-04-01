
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, TrendingUp, TrendingDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TokenData {
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  volume: number;
}

const CryptoWidget = () => {
  const { toast } = useToast();
  const [tokenData, setTokenData] = useState<TokenData>({
    name: "Silence Token",
    symbol: "SILENCE",
    price: 0.0042,
    change24h: 7.5,
    volume: 1250000
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    // Simulate fetching token data
    setIsLoading(true);
    
    // Random price fluctuation simulation
    const interval = setInterval(() => {
      setTokenData(prev => {
        const randomChange = (Math.random() * 2 - 1) * 0.5; // between -0.5% and +0.5%
        const newPrice = prev.price * (1 + randomChange / 100);
        const newChange = prev.change24h + randomChange / 5;
        
        return {
          ...prev,
          price: parseFloat(newPrice.toFixed(4)),
          change24h: parseFloat(newChange.toFixed(2)),
          volume: prev.volume + Math.floor(Math.random() * 1000 - 500)
        };
      });
    }, 10000);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Token data updated",
        description: "The latest SILENCE token metrics have been fetched.",
      });
    }, 1500);
    
    return () => clearInterval(interval);
  }, [toast]);
  
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    } else {
      return `$${num.toLocaleString()}`;
    }
  };

  return (
    <Card className="glass-card neon-border overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-silence-purple/20 to-silence-cyan/20 border-b border-white/10">
        <CardTitle className="flex items-center gap-2">
          <Coins className="text-silence-cyan" />
          SILENCE Token
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-40' : 'opacity-100'}`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">
                ${tokenData.price}
              </h3>
              <div className={`flex items-center ${tokenData.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {tokenData.change24h >= 0 ? 
                  <TrendingUp className="h-4 w-4 mr-1" /> : 
                  <TrendingDown className="h-4 w-4 mr-1" />
                }
                <span>{tokenData.change24h >= 0 ? '+' : ''}{tokenData.change24h}%</span>
              </div>
            </div>
            <div className="h-16 w-16 rounded-full bg-silence-dark/50 border border-silence-cyan/30 flex items-center justify-center">
              <span className="font-mono font-bold text-silence-cyan">SLNC</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-white/70">Volume (24h)</span>
              <span className="font-mono">{formatNumber(tokenData.volume)}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-white/70">Memory Pool</span>
              <span className="font-mono">{formatNumber(tokenData.volume * 2.5)}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-white/70">Forgotten Tokens</span>
              <span className="font-mono text-silence-pink">{Math.floor(tokenData.volume / 1000)} SLNC</span>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-white/10">
            <p className="text-white/60 text-sm italic text-center">
              Token value fluctuates based on collective memory strength
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoWidget;
