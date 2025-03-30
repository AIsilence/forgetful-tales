
import React from "react";
import { Brain, ArrowLeft, BookOpen, Landmark, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LearnMore = () => {
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
          
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-silence-purple to-silence-pink">
            Learn More About Silence
          </h1>
          
          <div className="glass-card rounded-xl p-8 mb-8">
            <Tabs defaultValue="concept" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent">
                <TabsTrigger value="concept" className="data-[state=active]:bg-silence-purple/20 data-[state=active]:text-white">
                  <Brain className="mr-2 h-4 w-4" />
                  Concept
                </TabsTrigger>
                <TabsTrigger value="story" className="data-[state=active]:bg-silence-purple/20 data-[state=active]:text-white">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Story
                </TabsTrigger>
                <TabsTrigger value="tokenomics" className="data-[state=active]:bg-silence-purple/20 data-[state=active]:text-white">
                  <Landmark className="mr-2 h-4 w-4" />
                  Tokenomics
                </TabsTrigger>
                <TabsTrigger value="community" className="data-[state=active]:bg-silence-purple/20 data-[state=active]:text-white">
                  <Users className="mr-2 h-4 w-4" />
                  Community
                </TabsTrigger>
              </TabsList>
              
              <div className="mt-8">
                <TabsContent value="concept" className="animate-fade-in">
                  <h2 className="text-xl font-bold mb-4 text-white">The Concept Behind Silence</h2>
                  <div className="space-y-4 text-white/80">
                    <p>
                      Silence isn't just a coin – it's a story and a community experiment. At its core lies the legend of the Book of Silence, a mystical tale that only exists as long as someone remembers it.
                    </p>
                    <p>
                      Every time a holder reads the story, the pages vanish, leaving only their recollection. The next reader experiences a remixed narrative, as if the book "reshuffles" itself in response to our faltering memory.
                    </p>
                    <p>
                      This endless loop of read, forget, retell becomes the heart of Silence's lore and utility. It's the first meme coin on Solana that turns forgetting into gameplay.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="story" className="animate-fade-in">
                  <h2 className="text-xl font-bold mb-4 text-white">The Story Experience</h2>
                  <div className="space-y-4 text-white/80">
                    <p>
                      The Book of Silence is a procedurally generated narrative that reshuffles itself with each reading. No two experiences are the same.
                    </p>
                    <p>
                      As you read, the pages vanish from memory, creating a unique gameplay mechanic where your ability to remember shapes the story's outcome.
                    </p>
                    <p>
                      The story blends crypto culture, memes, and absurdist humor into a tale about memory, value, and the fleeting nature of digital assets.
                    </p>
                    <div className="mt-6">
                      <Link to="/story">
                        <Button className="bg-silence-purple text-white hover:bg-silence-purple/90">
                          <BookOpen className="mr-2 h-5 w-5" />
                          Experience the Story
                        </Button>
                      </Link>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="tokenomics" className="animate-fade-in">
                  <h2 className="text-xl font-bold mb-4 text-white">Tokenomics</h2>
                  <div className="space-y-4 text-white/80">
                    <p>
                      Silence ($SILENCE) has a total supply of 1,000,000,000 tokens, distributed as follows:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><span className="font-bold text-silence-purple">80%</span> - Fair Launch (no presale, no early investor allocations)</li>
                      <li><span className="font-bold text-silence-pink">10%</span> - Airdrop to early supporters and community members</li>
                      <li><span className="font-bold text-silence-cyan">10%</span> - Development Fund & Treasury</li>
                    </ul>
                    <p className="mt-4">
                      Our tokenomics emphasize fairness and community ownership. There are no large private allocations - the majority of tokens are available through a fair launch on Solana.
                    </p>
                  </div>
                </TabsContent>
                
                <TabsContent value="community" className="animate-fade-in">
                  <h2 className="text-xl font-bold mb-4 text-white">Community</h2>
                  <div className="space-y-4 text-white/80">
                    <p>
                      The Silence community is the keeper of the story. Through engagement and memes, our community keeps the tale (and the value) of Silence alive.
                    </p>
                    <p>
                      We run regular events like meme contests, memory challenges, and collaborative storytelling sessions that bring the community together.
                    </p>
                    <p>
                      In Silence, the biggest bragging right is "I remember when..." - literally. Those with the strongest memory of past story iterations might earn the right to become a narrator and shape future chapters.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <Button variant="outline" className="border-silence-purple text-white hover:bg-silence-purple/20">
                        Join Discord
                      </Button>
                      <Button variant="outline" className="border-silence-purple text-white hover:bg-silence-purple/20">
                        Follow on Twitter
                      </Button>
                      <Button variant="outline" className="border-silence-purple text-white hover:bg-silence-purple/20">
                        Join Telegram
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LearnMore;
