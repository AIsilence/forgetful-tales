
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, TrendingUp, TrendingDown, BarChart4, Bell, Wallet, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TokenData {
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  volume: number;
}

interface PriceAlert {
  price: number;
  direction: "above" | "below";
  active: boolean;
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
  const [showChart, setShowChart] = useState(false);
  const [priceAlert, setPriceAlert] = useState<PriceAlert | null>(null);
  const [alertPrice, setAlertPrice] = useState("");
  
  useEffect(() => {
    // Simulate fetching token data
    setIsLoading(true);
    
    // Random price fluctuation simulation
    const interval = setInterval(() => {
      setTokenData(prev => {
        const randomChange = (Math.random() * 2 - 1) * 0.5; // between -0.5% and +0.5%
        const newPrice = prev.price * (1 + randomChange / 100);
        const newChange = prev.change24h + randomChange / 5;
        
        // Check for price alerts
        if (priceAlert && priceAlert.active) {
          if (priceAlert.direction === "above" && newPrice > priceAlert.price) {
            toast({
              title: "Price Alert Triggered!",
              description: `SILENCE token is now above $${priceAlert.price}`,
              variant: "destructive",
            });
            setPriceAlert({...priceAlert, active: false});
          } else if (priceAlert.direction === "below" && newPrice < priceAlert.price) {
            toast({
              title: "Price Alert Triggered!",
              description: `SILENCE token is now below $${priceAlert.price}`,
              variant: "destructive",
            });
            setPriceAlert({...priceAlert, active: false});
          }
        }
        
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
  }, [toast, priceAlert]);
  
  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return `$${(num / 1000000).toFixed(1)}M`;
    } else {
      return `$${num.toLocaleString()}`;
    }
  };
  
  const setAlert = () => {
    try {
      const price = parseFloat(alertPrice);
      if (isNaN(price) || price <= 0) {
        throw new Error("Invalid price");
      }
      
      const direction = price > tokenData.price ? "above" : "below";
      
      setPriceAlert({
        price,
        direction,
        active: true
      });
      
      toast({
        title: "Price Alert Set",
        description: `You'll be notified when SILENCE goes ${direction} $${price}`,
      });
      
      setAlertPrice("");
    } catch (error) {
      toast({
        title: "Invalid Price",
        description: "Please enter a valid price",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="glass-card neon-border overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-silence-purple/20 to-silence-cyan/20 border-b border-white/10">
        <CardTitle className="flex items-center gap-2 justify-between">
          <div className="flex items-center">
            <Coins className="text-silence-cyan mr-2" />
            SILENCE Token
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setShowChart(!showChart)} 
              className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
              title="Toggle chart view"
            >
              <BarChart4 className="h-4 w-4 text-white/70" />
            </button>
          </div>
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
          
          {showChart && (
            <div className="mb-6 h-40 bg-silence-dark/30 rounded-lg border border-white/10 flex items-center justify-center">
              <div className="w-full h-full p-2">
                <div className="h-full w-full flex items-end">
                  {/* Simple price chart bars */}
                  {Array.from({ length: 24 }).map((_, i) => {
                    const height = Math.random() * 80 + 10;
                    const isPositive = height > 50;
                    return (
                      <div 
                        key={i} 
                        className="flex-1 mx-0.5"
                        style={{ height: `${height}%` }}
                      >
                        <div 
                          className={`w-full h-full rounded-t ${isPositive ? 'bg-green-500/30' : 'bg-red-500/30'}`}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
          
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
          
          {/* Price Alert Feature */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="mb-4">
              <h4 className="text-sm font-medium text-white/80 mb-2 flex items-center">
                <Bell className="h-4 w-4 mr-1 text-silence-pink" />
                Set Price Alert
              </h4>
              
              <div className="flex space-x-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50">$</span>
                  <input
                    type="text"
                    value={alertPrice}
                    onChange={(e) => setAlertPrice(e.target.value)}
                    placeholder="0.0050"
                    className="w-full bg-silence-dark/50 border border-white/20 rounded-lg pl-7 pr-3 py-1.5 text-white placeholder-white/30 focus:outline-none focus:border-silence-purple"
                  />
                </div>
                <button
                  onClick={setAlert}
                  className="bg-silence-purple/80 hover:bg-silence-purple text-white px-4 py-1.5 rounded-lg"
                >
                  Set Alert
                </button>
              </div>
            </div>
            
            {priceAlert && (
              <div className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm ${priceAlert.active ? 'bg-silence-dark/50 border border-white/20' : 'opacity-50'}`}>
                <div className="flex items-center">
                  <AlertCircle className={`h-4 w-4 mr-2 ${priceAlert.active ? 'text-silence-pink' : 'text-white/50'}`} />
                  <span>
                    Alert when price goes {priceAlert.direction} ${priceAlert.price}
                  </span>
                </div>
                
                {priceAlert.active ? (
                  <button
                    onClick={() => setPriceAlert(null)}
                    className="text-xs text-white/50 hover:text-white"
                  >
                    Cancel
                  </button>
                ) : (
                  <span className="text-xs">Triggered</span>
                )}
              </div>
            )}
            
            <div className="mt-4 text-center">
              <button className="text-sm text-white/60 hover:text-white flex items-center mx-auto">
                <Wallet className="h-4 w-4 mr-1" />
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CryptoWidget;
