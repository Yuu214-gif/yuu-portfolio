import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

export default function SkillsSection() {
  const Skills = [
    {
      logo: "/assets/skills/VS Code.svg",
      text: "VS Code",
    },
    {
      logo: "/assets/skills/HTML5.svg",
      text: "HTML",
    },
    {
      logo: "/assets/skills/CSS3.svg",
      text: "CSS",
    },
    {
      logo: "/assets/skills/JavaScript.svg",
      text: "JavaScript",
    },
    {
      logo: "/assets/skills/PHP.svg",
      text: "PHP",
    },
    {
      logo: "/assets/skills/MySQL.svg",
      text: "MySQL",
    },
    {
      logo: "/assets/skills/Laravel.svg",
      text: "Laravel",
    },
    {
      logo: "/assets/skills/React.svg",
      text: "React",
    },
    {
      logo: "/assets/skills/Git.svg",
      text: "GIT",
    },
    {
      logo: "/assets/skills/Tailwind CSS.svg",
      text: "Tailwind",
    },
    {
      logo: "/assets/skills/Figma.svg",
      text: "Figma",
    },
    {
      logo: "/assets/skills/Next.js.svg",
      text: "Next.js",
    },
    {
      logo: "/assets/skills/TypeScript.svg",
      text: "TypeScript",
    },
  ];

  const firstRow = Skills.slice(0, Skills.length / 2);
  const secondRow = Skills.slice(Skills.length / 2);

  const SkillsCard = ({ logo, text }: { logo: string; text: string }) => {
    return (
      <figure
        className={cn(
          "relative h-full w-46 cursor-default overflow-hidden rounded-md p-4",
          // light styles
          "border-gray-950/[.1] bg-white hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}
      >
        <div className="flex flex-row items-center justify-center gap-2">
          <img className="" width="36" height="36" alt="logo" src={logo} />
          <div className="flex flex-col">
            <figcaption className="text-lg text-center font-semibold dark:text-white">
              {text}
            </figcaption>
          </div>
        </div>
      </figure>
    );
  };

  return (
    <section id="skills">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-gray-200 pt-16">
        <div className="container mx-auto px-4">
        <div className=" my-8 justify-start text-center">
          <h1 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-2 text-center">Skills & Tech Stack</h1>
          <p className="text-gray-600 dark:text-gray-300 text-center text-base xl:text-lg">
            Tech stack that i often use
          </p>
        </div>
        </div>
        <Marquee pauseOnHover className="[--duration:60s]">
          {firstRow.map((skill) => (
            <SkillsCard key={skill.text} {...skill} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:60s]">
          {secondRow.map((skill) => (
            <SkillsCard key={skill.text} {...skill} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 from-background"></div>
      </div>
    </section>
  );
}
