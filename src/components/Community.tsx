
import React from "react";
import { Button } from "@/components/ui/button";
import { Twitter, Send, BookOpen, Volume2, MessageSquare, RefreshCw } from "lucide-react";

const CommunityCard = ({ title, icon, description, buttonText, buttonIcon }: {
  title: string;
  icon: React.ReactNode;
  description: string;
  buttonText: string;
  buttonIcon: React.ReactNode;
}) => {
  return (
    <div className="glass-card rounded-xl p-6 transform hover:scale-[1.01] transition-all duration-300 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="bg-silence-purple/20 text-silence-pink w-10 h-10 rounded flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
      </div>
      
      <p className="text-white/70 mb-6 flex-grow">{description}</p>
      
      <Button className="w-full bg-silence-dark border border-silence-purple/40 hover:bg-silence-purple/20 text-white group">
        {buttonIcon}
        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">{buttonText}</span>
      </Button>
    </div>
  );
};

const MemeCard = ({ imageUrl, altText }: { imageUrl: string; altText: string }) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden group">
      <div className="h-full aspect-square overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-silence-dark to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-300 z-10"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
          <p className="text-white text-sm">{altText}</p>
        </div>
        
        {/* Replace with actual image later */}
        <div className="bg-gradient-to-br from-silence-purple/40 to-silence-pink/40 w-full h-full flex items-center justify-center text-white/30 text-xs">
          [Meme placeholder - {altText}]
        </div>
      </div>
    </div>
  );
};

const Community = () => {
  const communityChannels = [
    {
      title: "Twitter (X)",
      icon: <Twitter size={20} />,
      description: "Join the conversation on Twitter (X), where we share memes, updates, and engage with the crypto community.",
      buttonText: "Follow Us",
      buttonIcon: <Twitter size={16} />
    },
    {
      title: "Telegram",
      icon: <Send size={20} />,
      description: "Our Telegram channel is the perfect place for real-time updates and direct interaction with the team.",
      buttonText: "Join Channel",
      buttonIcon: <Send size={16} />
    },
    {
      title: "Discord",
      icon: <MessageSquare size={20} />,
      description: "The primary home of our community. Participate in events, games, and help shape the future of Silence.",
      buttonText: "Join Server",
      buttonIcon: <MessageSquare size={16} />
    },
    {
      title: "Medium",
      icon: <BookOpen size={20} />,
      description: "Deep dives into our lore, tokenomics, and development updates. The place for the serious stuff.",
      buttonText: "Read Articles",
      buttonIcon: <BookOpen size={16} />
    }
  ];

  const memes = [
    { imageUrl: "/meme1.jpg", altText: "When you forget you bought $SILENCE at launch" },
    { imageUrl: "/meme2.jpg", altText: "POV: You're reading the Book of Silence" },
    { imageUrl: "/meme3.jpg", altText: "Me explaining Silence tokenomics to my friends" },
    { imageUrl: "/meme4.jpg", altText: "What's a seed phrase again?" }
  ];

  return (
    <section id="community" className="py-24 relative noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Join The <span className="text-transparent bg-clip-text bg-gradient-to-r from-silence-pink to-silence-purple">Community</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Silence thrives through its community. Connect, share memes, and help keep the story alive through collective memory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {communityChannels.map((channel, index) => (
            <CommunityCard
              key={index}
              title={channel.title}
              icon={channel.icon}
              description={channel.description}
              buttonText={channel.buttonText}
              buttonIcon={channel.buttonIcon}
            />
          ))}
        </div>

        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-2 text-white">Community Memes</h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            Memes are the lifeblood of Silence. Here's a taste of our community's creativity.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {memes.map((meme, index) => (
            <MemeCard
              key={index}
              imageUrl={meme.imageUrl}
              altText={meme.altText}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-gradient-to-r from-silence-purple to-silence-pink text-white hover:opacity-90">
            <RefreshCw className="mr-2 h-5 w-5" />
            Refresh Memory
          </Button>
          <p className="text-white/50 text-sm mt-3">
            *Click this if you forgot what Silence is about. We'll remind you. Maybe.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
