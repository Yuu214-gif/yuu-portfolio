import Image from "next/image";
import { motion } from "framer-motion";

interface CertificateData {
  img: string;
}

export default function CertificateSection() {
  const certificateList: CertificateData[] = [
    {
      img: "/assets/certificate/certificate (1).jpg",
    },
    {
      img: "/assets/certificate/certificate (2).jpg",
    },
    {
      img: "/assets/certificate/certificate (3).jpg",
    },
    {
      img: "/assets/certificate/certificate (4).jpg",
    },
    {
      img: "/assets/certificate/certificate (5).jpg",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="certificate" className="bg-gray-200">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          className="mb-8 justify-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl md:text-3xl font-bold leading-normal text-center xl:text-4xl">My Certificate</h1>
          <p className="text-gray-600 text-center text-base">My recent certificate</p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certificateList.map((certificate, index) => (
            <motion.div key={index} variants={item}>
              <CertificateCardComponent img={certificate.img} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CertificateCardComponent({
  img,
  index,
}: {
  img: string;
  index: number;
}) {
  return (
    <motion.div
      className="group block overflow-hidden rounded-md shadow-lg transition-all dark:shadow-gray-800/50 hover:shadow-xl"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative h-50 md:h-60 overflow-hidden">
        <Image
          src={img}
          alt={`Certificate ${index + 1}`}
          fill
          className="object-fill transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </motion.div>
  );
}
