
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RoadmapContent } from "@/components/RoadmapContent";

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-silence-dark text-white">
      <Navbar />
      <div className="pt-20">
        <RoadmapContent />
      </div>
      <Footer />
    </div>
  );
};

export default Roadmap;
