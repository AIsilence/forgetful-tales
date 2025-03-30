
import React, { useState, useEffect } from "react";
import { BookOpen, ArrowLeft, Brain, Volume2, VolumeX, RefreshCw, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const BookExperience = () => {
  const { toast } = useToast();
  const [isReading, setIsReading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [textContent, setTextContent] = useState("");
  const [isFading, setIsFading] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [memoryQuiz, setMemoryQuiz] = useState(null);
  const [quizAnswered, setQuizAnswered] = useState(false);
  
  // Story fragments to randomly combine
  const storyFragments = {
    beginnings: [
      "In the darkest corner of the blockchain,",
      "Once upon a time in the metaverse,",
      "It was during the great bull run that",
      "When the markets crashed and hope was lost,",
      "As the sun set on another day of trading,"
    ],
    characters: [
      "a forgotten wallet",
      "a lone trader",
      "the Memory Keeper",
      "a mysterious algorithm",
      "the community of Silence"
    ],
    actions: [
      "discovered a hidden message",
      "forgot the most important lesson",
      "revealed a shocking truth",
      "unlocked the secret of value",
      "whispered the seed phrase"
    ],
    endings: [
      "and nothing would ever be the same again.",
      "as the memories faded into oblivion.",
      "but no one remembered it the next day.",
      "creating a paradox in the timeline.",
      "while the market continued its endless cycle."
    ]
  };
  
  const quizQuestions = [
    {
      question: "What did the character in the story discover?",
      options: ["A hidden message", "A sacred token", "A new blockchain", "A lost friend"],
      correctIndex: 0
    },
    {
      question: "Where did the story take place?",
      options: ["In the metaverse", "On Earth", "In a castle", "On the moon"],
      correctIndex: 0
    },
    {
      question: "What happened at the end of the story?",
      options: ["The memories faded", "Everyone got rich", "The hero won", "The villain escaped"],
      correctIndex: 0
    }
  ];
  
  // Generate a random story
  const generateStory = () => {
    const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];
    
    const story = `${getRandomElement(storyFragments.beginnings)} ${getRandomElement(storyFragments.characters)} ${getRandomElement(storyFragments.actions)} ${getRandomElement(storyFragments.endings)}`;
    
    setTextContent(story);
    
    // Generate a quiz based on the story
    const randomQuestion = { ...quizQuestions[Math.floor(Math.random() * quizQuestions.length)] };
    setMemoryQuiz(randomQuestion);
  };
  
  const startReading = () => {
    setIsReading(true);
    generateStory();
    setProgress(0);
    setIsFading(false);
    setQuizAnswered(false);
    
    toast({
      title: "The book opens...",
      description: "Read quickly before the words fade away!",
    });
  };
  
  const answerQuiz = (index) => {
    setQuizAnswered(true);
    
    if (index === memoryQuiz.correctIndex) {
      toast({
        title: "Memory intact!",
        description: "You remembered correctly. The book recognizes your mind.",
      });
    } else {
      toast({
        title: "Memory failed",
        description: "You forgot the details. The book reclaims its words.",
        variant: "destructive",
      });
    }
    
    // Reset after a delay
    setTimeout(() => {
      setIsReading(false);
    }, 3000);
  };
  
  const toggleAudio = () => {
    setAudioEnabled(!audioEnabled);
    toast({
      title: audioEnabled ? "Sound off" : "Sound on",
      description: audioEnabled ? "The whispers fade to silence." : "You can now hear the whispers of the void.",
    });
  };
  
  useEffect(() => {
    if (isReading && !isFading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsFading(true);
            return 100;
          }
          return prev + 1;
        });
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [isReading, isFading]);
  
  useEffect(() => {
    if (progress >= 100) {
      const fadeTimeout = setTimeout(() => {
        toast({
          title: "The words are fading...",
          description: "Quick, try to remember what you read!",
        });
      }, 1000);
      
      return () => clearTimeout(fadeTimeout);
    }
  }, [progress, toast]);

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
          
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-silence-purple to-silence-pink">
              Experience The Book of Silence
            </h1>
            
            <div className="glass-card rounded-xl p-8 mb-8 relative overflow-hidden min-h-[400px]">
              <div className="absolute top-4 right-4 flex space-x-3 z-10">
                <button 
                  onClick={toggleAudio}
                  className="w-8 h-8 rounded-full bg-silence-dark flex items-center justify-center text-white/70 hover:text-white transition-colors"
                >
                  {audioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>
              </div>
              
              {!isReading ? (
                <div className="flex flex-col items-center justify-center h-[300px]">
                  <div className="relative w-48 h-48 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-silence-purple/20 to-silence-pink/20 rounded-2xl glass-card neon-border transform rotate-3 animate-float"></div>
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl -rotate-3 border border-white/10">
                      <div className="h-full flex items-center justify-center">
                        <BookOpen size={64} className="text-silence-purple opacity-60" />
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-silence-purple to-silence-pink text-white hover:opacity-90"
                    onClick={startReading}
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Open The Book
                  </Button>
                  
                  <p className="mt-4 text-white/50 text-sm italic text-center">
                    Warning: The words will vanish as you read. <br/>
                    Try to remember what you can.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col h-[300px]">
                  {!isFading ? (
                    <>
                      <div className="flex-1 flex items-center justify-center">
                        <p className="text-xl leading-relaxed text-center">
                          {textContent}
                        </p>
                      </div>
                      <div className="mt-4 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-silence-purple to-silence-pink"
                          style={{ width: `${progress}%`, transition: 'width 0.1s' }}
                        ></div>
                      </div>
                    </>
                  ) : !quizAnswered ? (
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <Brain size={40} className="text-silence-pink mb-4" />
                      <h3 className="text-xl font-bold mb-4">Memory Test</h3>
                      <p className="mb-6 text-center">{memoryQuiz.question}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
                        {memoryQuiz.options.map((option, index) => (
                          <Button 
                            key={index}
                            variant="outline" 
                            className="border-silence-purple text-white hover:bg-silence-purple/20"
                            onClick={() => answerQuiz(index)}
                          >
                            {option}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <p className="text-xl mb-6 text-center">
                        The book records your memory...
                      </p>
                      
                      <div className="flex space-x-4">
                        <Button 
                          className="bg-gradient-to-r from-silence-purple to-silence-pink text-white hover:opacity-90"
                          onClick={() => setIsReading(false)}
                        >
                          <RefreshCw className="mr-2 h-4 w-4" />
                          Read Another Page
                        </Button>
                        
                        <Button 
                          variant="outline" 
                          className="border-silence-purple text-white hover:bg-silence-purple/20"
                        >
                          <Share2 className="mr-2 h-4 w-4" />
                          Share Memory
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <div className="text-center text-white/60 text-sm">
              <p>Every reading is unique. The pages reshuffle themselves after each session.</p>
              <p>Your choices and memory shape the narrative of Silence.</p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookExperience;
