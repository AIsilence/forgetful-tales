
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TokenomicsContent } from "@/components/TokenomicsContent";

const Tokenomics = () => {
  return (
    <div className="min-h-screen bg-silence-dark text-white">
      <Navbar />
      <div className="pt-20">
        <TokenomicsContent />
      </div>
      <Footer />
    </div>
  );
};

export default Tokenomics;
