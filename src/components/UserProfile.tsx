
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { User, Wallet, BookOpen } from "lucide-react";

type UserProfileData = {
  username: string;
  readingLevel: string;
  favoriteGenre: string;
  bio: string;
  walletAddress: string;
};

const UserProfile = () => {
  const { toast } = useToast();
  const [profileData, setProfileData] = useState<UserProfileData>({
    username: "",
    readingLevel: "beginner",
    favoriteGenre: "mystery",
    bio: "",
    walletAddress: ""
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setProfileData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    // Save to localStorage
    localStorage.setItem("silence-user-profile", JSON.stringify(profileData));
    setIsEditing(false);
    toast({
      title: "Profile saved!",
      description: "Your reading preferences have been recorded in the Book of Silence.",
    });
  };

  const connectWallet = () => {
    // Mock wallet connection
    const mockAddress = "0xAbC...123";
    setProfileData(prev => ({
      ...prev,
      walletAddress: mockAddress
    }));
    toast({
      title: "Wallet connected",
      description: "Your crypto wallet is now linked to the Book of Silence.",
    });
  };

  // Load from localStorage on initial render
  React.useEffect(() => {
    const savedProfile = localStorage.getItem("silence-user-profile");
    if (savedProfile) {
      try {
        const parsed = JSON.parse(savedProfile);
        setProfileData(parsed);
        setIsEditing(false);
      } catch (error) {
        console.error("Error parsing profile data", error);
      }
    }
  }, []);

  return (
    <Card className="glass-card neon-border overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-silence-purple/20 to-silence-pink/20 border-b border-white/10">
        <CardTitle className="flex items-center gap-2">
          <User className="text-silence-purple" />
          Reader Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {isEditing ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Reader Name</Label>
              <Input 
                id="username"
                name="username"
                value={profileData.username}
                onChange={handleChange}
                placeholder="How shall we remember you?"
                className="bg-silence-dark/50 border-silence-purple/30"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="readingLevel">Reading Experience</Label>
              <select 
                id="readingLevel"
                name="readingLevel"
                value={profileData.readingLevel}
                onChange={handleChange}
                className="w-full bg-silence-dark/50 border border-silence-purple/30 rounded p-2 text-white focus:outline-none focus:border-silence-purple"
              >
                <option value="beginner">Beginner Reader</option>
                <option value="intermediate">Regular Reader</option>
                <option value="advanced">Advanced Reader</option>
                <option value="forgetful">Deliberately Forgetful</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="favoriteGenre">Preferred Story Type</Label>
              <select 
                id="favoriteGenre"
                name="favoriteGenre"
                value={profileData.favoriteGenre}
                onChange={handleChange}
                className="w-full bg-silence-dark/50 border border-silence-purple/30 rounded p-2 text-white focus:outline-none focus:border-silence-purple"
              >
                <option value="mystery">Crypto Mystery</option>
                <option value="adventure">Blockchain Adventure</option>
                <option value="horror">DeFi Horror</option>
                <option value="comedy">NFT Comedy</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Personal Memory Note</Label>
              <Textarea 
                id="bio"
                name="bio"
                value={profileData.bio}
                onChange={handleChange}
                placeholder="Write something about yourself that will be forgotten..."
                className="bg-silence-dark/50 border-silence-purple/30 min-h-[100px]"
              />
            </div>
            
            <div className="pt-4">
              <Button 
                className="bg-gradient-to-r from-silence-purple to-silence-pink text-white w-full"
                onClick={handleSave}
              >
                Save Profile
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold text-white">{profileData.username || "Anonymous Reader"}</h3>
                <p className="text-white/60">{profileData.readingLevel === "forgetful" ? "Deliberately Forgetful" : `${profileData.readingLevel} Reader`}</p>
              </div>
              <Button 
                variant="outline" 
                className="border-silence-purple text-white hover:bg-silence-purple/20"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            </div>
            
            <div className="flex items-start gap-2 text-white/80">
              <BookOpen className="h-5 w-5 text-silence-pink mt-1" />
              <div>
                <p className="font-semibold">Preferred Stories</p>
                <p>{profileData.favoriteGenre} tales</p>
              </div>
            </div>
            
            {profileData.bio && (
              <div className="text-white/70 italic border-l-2 border-silence-purple/50 pl-4 py-2">
                "{profileData.bio}"
              </div>
            )}
            
            <div className="pt-2 border-t border-white/10 mt-4">
              {profileData.walletAddress ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/80">
                    <Wallet className="h-5 w-5 text-silence-cyan" />
                    <span className="font-mono text-sm">{profileData.walletAddress}</span>
                  </div>
                  <span className="text-xs bg-silence-purple/30 px-2 py-1 rounded">Connected</span>
                </div>
              ) : (
                <Button 
                  variant="outline" 
                  className="border-silence-purple text-white hover:bg-silence-purple/20 w-full"
                  onClick={connectWallet}
                >
                  <Wallet className="mr-2 h-4 w-4" />
                  Connect Wallet
                </Button>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UserProfile;
