import React from "react";
import { motion } from "framer-motion";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function HeroSection() {
  return (
    <section className="bg-slate-950 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline with scroll animation */}
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              type: "spring",
              stiffness: 80,
              damping: 10,
              delay: 0.2
            }}
          >
            <AuroraText>Build Something Impactful Today.</AuroraText>
          </motion.h1>

          {/* Description text with scroll animation */}
          <motion.p
            className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.8,
              delay: 0.4
            }}
          >
            I'm a freelancer offering top-quality, affordable services in
            product development. I'll help you succeed with building websites or
            apps. Contact me for one-time or ongoing support.
          </motion.p>

          {/* CTA Button with scroll and hover animation */}
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: 0.6
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            Hire Me
          </motion.button>
        </div>
      </div>
    </section>
  );
}