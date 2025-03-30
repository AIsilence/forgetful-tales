
import React from "react";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Silence?",
      answer: "Silence is a meme coin project on Solana that turns forgetting into a gameplay feature and a community adventure. Inspired by a fictional cursed book that 'can only be read through oblivion,' Silence blends crypto meme culture with interactive storytelling.",
    },
    {
      question: "How does the Book of Silence work?",
      answer: "The Book of Silence is an interactive story experience where pages disappear once read. Each time you access the Book (via our dApp), the narrative is randomly generated or reorganized. No two reading sessions are the same. Your ability to remember the content shapes your experience.",
    },
    {
      question: "What are $SILENCE tokens used for?",
      answer: "As a meme coin, $SILENCE primarily functions as a community token and meme trading asset. Holding $SILENCE gives cosmetic perks in the dApp, can be used to mint special NFTs, and allows participation in community contests and governance.",
    },
    {
      question: "Is there a presale?",
      answer: "No. Silence follows a fair launch model with 80% of the tokens available through public fair launch on Solana. There are no presales or early investor allocations. This ensures a level playing field for all participants.",
    },
    {
      question: "What makes Silence different from other meme coins?",
      answer: "Silence stands out with its unique narrative and interactive gameplay elements. While most meme coins only offer community and speculation, Silence adds an actual use case through its read-and-forget gameplay, creating a more engaging experience.",
    },
    {
      question: "How can I join the Silence community?",
      answer: "Join us on Discord, Twitter, and Telegram. Participate in our meme contests, memory challenges, and collaborative storytelling sessions. The community is the keeper of the story, and everyone is welcome to contribute.",
    },
    {
      question: "When is the token launch?",
      answer: "The $SILENCE token is scheduled to launch in Q2 2025 with a fair launch on major Solana DEXs like Raydium/Orca. Follow our social channels for the latest updates on the exact launch date.",
    },
    {
      question: "Will my memory actually be erased?",
      answer: "No! The 'memory loss' is part of the game mechanics and storytelling. We don't have the technology to erase memories (yet). The experience simulates forgetting through disappearing text and randomized storytelling.",
    }
  ];

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
              Frequently Asked Questions
            </h1>
            
            <div className="glass-card rounded-xl p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                    <AccordionTrigger className="text-left text-white hover:text-silence-purple transition-colors py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-white/60">
                Don't see your question? Join our community on Discord or Twitter to ask!
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
