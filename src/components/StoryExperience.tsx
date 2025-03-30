
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Brain, BookOpen, RefreshCw, X, CheckCheck } from "lucide-react";

const StoryExperience = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [memoryScore, setMemoryScore] = useState(3);
  const [isFading, setIsFading] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [quizResult, setQuizResult] = useState<boolean | null>(null);
  
  const storyPages = [
    "Once upon a time in a market far away, a degenerate ape forgot his seed phrase. His name was MONKE, and he was known for his paper hands and poor memory.",
    "The ape wandered through the Valley of Rugpulls, lamenting his losses. 'If only there was a way to profit from my terrible memory,' he cried.",
    "Suddenly, a mysterious figure appeared holding a book. 'Take this,' the stranger said. 'It's the Book of Silence. Each page disappears once read. Only memory preserves the story.'",
    "The ape opened the book and began to read. As he finished each page, the words vanished before his eyes, leaving blank parchment.",
    "To his amazement, the next reader received a different story - one shaped by what MONKE remembered. The book was reshuffling itself based on memory."
  ];

  useEffect(() => {
    if (currentPage > 0 && currentPage < storyPages.length) {
      const timer = setTimeout(() => {
        setIsFading(true);
      }, 4000);
      
      return () => clearTimeout(timer);
    }
    
    if (currentPage === storyPages.length) {
      setShowQuiz(true);
    }
  }, [currentPage]);

  const handleNextPage = () => {
    if (isFading) {
      setIsFading(false);
    }
    setCurrentPage(prev => prev + 1);
  };
  
  const handleRestart = () => {
    setCurrentPage(0);
    setMemoryScore(3);
    setIsFading(false);
    setShowQuiz(false);
    setQuizResult(null);
    setQuizAnswer("");
  };
  
  const checkAnswer = () => {
    // Simple quiz check - the correct answer is "MONKE" from the first page
    const isCorrect = quizAnswer.toUpperCase() === "MONKE";
    setQuizResult(isCorrect);
    
    if (isCorrect) {
      setMemoryScore(prev => Math.min(5, prev + 1));
    } else {
      setMemoryScore(prev => Math.max(0, prev - 1));
    }
  };

  return (
    <section id="story" className="py-20 relative noise-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-silence-cyan to-silence-neon">The Story</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            The Book of Silence can only be read through oblivion. Each page disappears once read, and only memory preserves the story.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl neon-border overflow-hidden">
            <div className="bg-gradient-to-r from-silence-purple/20 to-silence-pink/20 p-4 flex justify-between items-center border-b border-white/10">
              <div className="text-white font-mono flex items-center">
                <Brain className="mr-2 h-5 w-5 text-silence-purple" />
                <span>Memory Score: </span>
                <div className="ml-2 flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-3 h-3 rounded-full ${
                        i < memoryScore ? 'bg-silence-purple' : 'bg-gray-700'
                      } ${i < memoryScore ? 'memory-pulse' : ''}`}
                    ></div>
                  ))}
                </div>
              </div>
              <div className="text-white/60 text-sm">
                Page {currentPage}/{storyPages.length}
              </div>
            </div>
            
            <div className="min-h-[300px] p-8 flex flex-col justify-between">
              {currentPage === 0 ? (
                <div className="text-center flex flex-col items-center justify-center h-full">
                  <BookOpen size={48} className="text-silence-purple mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">The Book of Silence</h3>
                  <p className="text-white/70 mb-6">Are you ready to experience the story that vanishes as you read?</p>
                  <Button onClick={handleNextPage} className="bg-silence-purple hover:bg-silence-purple/90 text-white">
                    Begin Reading
                  </Button>
                </div>
              ) : currentPage <= storyPages.length ? (
                <div className="h-full flex flex-col">
                  <div className="flex-1">
                    <p className={`text-lg text-white mb-4 transition-opacity duration-1000 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                      {storyPages[currentPage - 1]}
                    </p>
                    {isFading && (
                      <p className="text-silence-pink/70 italic text-sm">
                        The words are fading from the page...
                      </p>
                    )}
                  </div>
                  {showQuiz ? (
                    <div className="mt-6 bg-silence-dark/50 p-4 rounded-lg">
                      <h4 className="text-white font-bold mb-3">Memory Test</h4>
                      <p className="text-white/80 mb-4">What was the name of the degenerate ape mentioned in the story?</p>
                      
                      {quizResult === null ? (
                        <div className="space-y-4">
                          <input 
                            type="text" 
                            value={quizAnswer}
                            onChange={(e) => setQuizAnswer(e.target.value)}
                            className="w-full bg-black/30 border border-silence-purple/30 rounded p-2 text-white focus:outline-none focus:border-silence-purple"
                            placeholder="Enter your answer..."
                          />
                          <div className="flex justify-between">
                            <Button 
                              variant="outline" 
                              onClick={() => {
                                setQuizResult(false);
                                setQuizAnswer("I forgot...");
                                setMemoryScore(prev => Math.max(0, prev - 2));
                              }}
                              className="border-white/20 text-white/60 hover:bg-white/5"
                            >
                              I Forgot
                            </Button>
                            <Button 
                              onClick={checkAnswer}
                              className="bg-silence-purple hover:bg-silence-purple/90 text-white"
                            >
                              Submit Answer
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center space-y-4">
                          {quizResult ? (
                            <div className="flex flex-col items-center">
                              <div className="bg-green-500/20 text-green-400 p-3 rounded-full mb-2">
                                <CheckCheck size={24} />
                              </div>
                              <p className="text-white">Your memory serves you well! You remembered correctly!</p>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center">
                              <div className="bg-red-500/20 text-red-400 p-3 rounded-full mb-2">
                                <X size={24} />
                              </div>
                              <p className="text-white">The memory fades... You've forgotten the details.</p>
                            </div>
                          )}
                          <Button 
                            onClick={handleRestart}
                            className="bg-silence-purple hover:bg-silence-purple/90 text-white mt-4"
                          >
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Read Again
                          </Button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="flex justify-end mt-4">
                      <Button 
                        onClick={handleNextPage} 
                        disabled={currentPage === storyPages.length}
                        className="bg-silence-purple hover:bg-silence-purple/90 text-white"
                      >
                        {isFading ? "Continue Despite Fading" : "Next Page"}
                      </Button>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          </div>
          
          <div className="text-white/60 text-center text-sm mt-6">
            <p>*This is just a demo of the reading experience. The full dApp will feature procedurally generated stories and more interactive elements.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryExperience;
