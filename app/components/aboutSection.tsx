import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-gray-200 overflow-hidden"
    >

      {/* Container untuk gambar dan konten */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">

        {/* Bagian Teks (kanan) - Animasi turun */}
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
          className="w-full space-y-6"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">
            About Me
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-base md:text-xl xl:text-2xl text-gray-600 leading-relaxed text-center"
          >
            A{" "}
            <span className="text-blue-600 font-medium">
              Front-End Developer
            </span>{" "}
            and{" "}
            <span className="text-blue-600 font-medium">UI/UX Designer</span>,
            I love converting designs from figma into functional code
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="text-base md:text-xl xl:text-2xl text-gray-600 leading-relaxed text-center"
          >
            The tools I often use are{" "}
            <span className="font-semibold">Next.js</span>,{" "}
            <span className="font-semibold">Tailwind CSS</span>, and <span className="font-semibold">Figma</span>  to
            design modern looks. I also leverage AI to accelerate development
            and problem-solving.
          </motion.p>

          {/* Tech stack icons dengan animasi stagger */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-8 pt-4 items-center justify-center"
          >
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring" }}>
              <Image
                src="/assets/skills/Next.js.svg"
                alt="next.js"
                width={50}
                height={50}
              />
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring" }}>
              <Image
                src="/assets/skills/Tailwind CSS.svg"
                alt="tailwind"
                width={50}
                height={50}
              />
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ type: "spring" }}>
              <Image
                src="/assets/skills/Figma.svg"
                alt="figma"
                width={50}
                height={50}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
