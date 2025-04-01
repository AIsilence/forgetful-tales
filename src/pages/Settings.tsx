
import React, { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import UserProfile from "@/components/UserProfile";
import CryptoWidget from "@/components/CryptoWidget";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  const { toast } = useToast();
  const [hasSaved, setHasSaved] = useState(false);
  
  // Form setup
  const form = useForm({
    defaultValues: {
      autoForget: true,
      fadeSpeed: "medium",
      soundEffects: true,
      notifications: true,
      cryptoUpdates: true,
    },
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem("silence-settings");
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        form.reset(parsed);
      } catch (error) {
        console.error("Error parsing settings data", error);
      }
    }
  }, [form]);

  const onSubmit = (data) => {
    localStorage.setItem("silence-settings", JSON.stringify(data));
    setHasSaved(true);
    
    toast({
      title: "Settings saved",
      description: "Your reading preferences have been updated.",
    });
    
    setTimeout(() => setHasSaved(false), 3000);
  };

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
          
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-silence-purple to-silence-pink">
            Reader Settings & Profile
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <UserProfile />
              </div>
              
              <div className="glass-card neon-border overflow-hidden">
                <div className="bg-gradient-to-r from-silence-purple/20 to-silence-pink/20 p-4 border-b border-white/10">
                  <h2 className="font-bold text-xl text-white">Reading Experience</h2>
                </div>
                
                <div className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="autoForget"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center justify-between p-3 border border-white/10 rounded-lg bg-black/20">
                            <div className="space-y-0.5">
                              <FormLabel className="text-base">Automatic Forgetting</FormLabel>
                              <FormDescription>
                                Words fade away as you read them
                              </FormDescription>
                            </div>
                            <FormControl>
                              <Switch 
                                checked={field.value} 
                                onCheckedChange={field.onChange} 
                                className="data-[state=checked]:bg-silence-purple"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="fadeSpeed"
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>Word Fade Speed</FormLabel>
                            <div className="grid grid-cols-3 gap-3">
                              {["slow", "medium", "fast"].map((option) => (
                                <Button
                                  key={option}
                                  type="button"
                                  variant={field.value === option ? "default" : "outline"}
                                  className={field.value === option 
                                    ? "bg-silence-purple hover:bg-silence-purple/90" 
                                    : "border-silence-purple/30 hover:bg-silence-purple/20"
                                  }
                                  onClick={() => field.onChange(option)}
                                >
                                  {option.charAt(0).toUpperCase() + option.slice(1)}
                                </Button>
                              ))}
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="soundEffects"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between p-3 border border-white/10 rounded-lg bg-black/20">
                              <div>
                                <FormLabel className="text-base">Sound Effects</FormLabel>
                              </div>
                              <FormControl>
                                <Switch 
                                  checked={field.value} 
                                  onCheckedChange={field.onChange} 
                                  className="data-[state=checked]:bg-silence-purple"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="notifications"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between p-3 border border-white/10 rounded-lg bg-black/20">
                              <div>
                                <FormLabel className="text-base">Memory Notifications</FormLabel>
                              </div>
                              <FormControl>
                                <Switch 
                                  checked={field.value} 
                                  onCheckedChange={field.onChange} 
                                  className="data-[state=checked]:bg-silence-purple"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="cryptoUpdates"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between p-3 border border-white/10 rounded-lg bg-black/20">
                              <div>
                                <FormLabel className="text-base">Token Updates</FormLabel>
                              </div>
                              <FormControl>
                                <Switch 
                                  checked={field.value} 
                                  onCheckedChange={field.onChange} 
                                  className="data-[state=checked]:bg-silence-purple"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="bg-gradient-to-r from-silence-purple to-silence-pink hover:opacity-90 w-full"
                      >
                        {hasSaved ? "Settings Saved!" : "Save Settings"}
                      </Button>
                    </form>
                  </Form>
                </div>
              </div>
            </div>
            
            <div>
              <CryptoWidget />
              
              <div className="glass-card neon-border overflow-hidden mt-8">
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Memory Points</h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/70">Current Balance</span>
                    <span className="font-mono text-silence-cyan font-bold">420 MP</span>
                  </div>
                  
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-6">
                    <div 
                      className="h-full bg-gradient-to-r from-silence-purple to-silence-cyan"
                      style={{ width: '42%' }}
                    ></div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-white/60">
                    <p>Earn Memory Points by:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Completing reading sessions</li>
                      <li>Passing memory tests</li>
                      <li>Staking SILENCE tokens</li>
                      <li>Sharing forgotten memories</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Settings;
