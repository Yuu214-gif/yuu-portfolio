'use client';
import Image from "next/image";
import { AuroraText } from "@/components/magicui/aurora-text";
import { WordRotate } from "@/components/magicui/word-rotate";
import { TextAnimate } from "@/components/magicui/text-animate";
import { motion } from "framer-motion";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function HeroSection() {
  const scrollToProjects = (): void => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-[80vh] flex items-center pt-21 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 md:mt-4">
          {/* Text Content */}
          <div className="w-full lg:w-[48%] flex flex-col justify-center">
            <div className="max-w-max">
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 10,
                  delay: 0.3,
                }}
                className="text-slate-700 font-bold text-xl xl:text-4xl xl:text-left md:text-3xl mb-2 text-center"
              >
                I'm <AuroraText>Wahyu!</AuroraText>
              </motion.div>
              <h1 className="text-black text-2xl xl:text-left md:text-5xl font-extrabold leading-tight mb-4 text-nowrap text-center">
                <WordRotate words={["Front-End Developer", "UI/UX Designer"]} />
              </h1>
              <div className="text-gray-600 text-sm text-center xl:text-left md:text-xl mb-8">
                <TextAnimate animation="slideUp" by="word" once>
                  A Front-End Developer And UI/UX Designer who builds Modern,
                  Responsive and Fully Animated Websites, Also expert in Slicing Design to Code
                </TextAnimate>
              </div>
              <div className="relative w-full justify-center gap-2 md:gap-4 flex xl:justify-start">
                {/* Contact Me Button with enhanced animation */}
                <motion.button
                  className="bg-blue-600 text-white px-4 md:px-6 rounded-lg hover:bg-blue-700 transition h-[calc(100%-8px)] py-4 border-1 border-blue-600 cursor-pointer text-xs md:text-lg text-nowrap"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  onClick={scrollToProjects}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.1
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 5px 15px -3px rgba(59, 130, 246, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Projects!
                </motion.button>

                {/* Download CV Button with enhanced animation */}
                <motion.button
                  className="bg-transparent border-1 border-slate-400 text-slate-700 px-4 md:px-6 rounded-lg hover:bg-blue-700 hover:text-white transition h-[calc(100%-8px)] py-4 cursor-pointer flex text-xs md:text-lg text-nowrap"
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 15,
                    delay: 0.1
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: "#1d4ed8",
                    color: "#ffffff",
                    borderColor: "#1d4ed8"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="https://drive.google.com/file/d/1duTAqdCgmyf6mjAI1zYM5r8njELY8ZhX/view?usp=sharing"
                    className="flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV{" "}
                    <motion.span
                      whileHover={{ y: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <IoIosArrowRoundDown className="w-4 h-4 md:size-7" />
                    </motion.span>
                  </a>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Image Container */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: 0.2,
            }}
            className="w-full lg:w-[48%] flex items-center justify-center md:mt-10"
          >
            <div className="relative w-full h-full max-w-xl aspect-[500/450]">
              <Image
                src="/assets/images/my-profile.jpg"
                alt="Front-End Developer Wahyu"
                fill
                className="rounded-lg object-cover shadow-md"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}