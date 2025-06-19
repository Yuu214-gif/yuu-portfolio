import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

interface ProjectCard {
  img: string;
  title: string;
  tech: string;
  link?: string;
}

export default function ProjectSection() {
  const projectCard: ProjectCard[] = [
    {
      img: "/assets/images/landingpage1.jpg",
      title: "Epic Arena",
      tech: "Next.js",
      link: "https://epic-arena.vercel.app/",
    },
    {
      img: "/assets/images/landingpage2.jpg",
      title: "Electros",
      tech: "React.js",
      link: "https://electros-landing.vercel.app/",
    },
    {
      img: "/assets/images/landingpage3.jpg",
      title: "GameTour",
      tech: "React.js",
      link: "https://yuu214-gif.github.io/game_tour/",
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="projects" className="py-24 bg-gray-200">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-8 justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-2">My Projects</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Some of my recent works
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projectCard.map((project, index) => (
            <motion.div key={index} variants={item}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ img, title, tech, link }: ProjectCard) {
  return (
    <motion.div 
      className="group block overflow-hidden rounded-md shadow-lg transition-all dark:shadow-gray-800/50 hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-fill transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="bg-white p-5 dark:bg-gray-800">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="inline-block py-1 text-sm font-medium text-gray-800 dark:text-gray-200">
            {tech}
          </span>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href={link}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View <MdArrowOutward />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}