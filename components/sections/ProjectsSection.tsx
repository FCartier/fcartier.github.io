import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    projectName: "Carbon Crushers",
    description: "An innovative startup with a heart for the environment. Our mission is simple yet powerful: to harness the power of advertising to fuel environmental change. We develop engaging software, games and services that contribute to a greener planet. Every product we release is a step towards a larger goal - planting trees and reducing carbon footprints.",
    technologies: ["Software Development", "Game Development", "Environmental Tech", "Advertising Integration"],
    // projectLink: "Not available", // No link provided
    imageUrl: "/logos/carbon-crushers.png", // Using company logo as placeholder
  },
  {
    projectName: "Sloowy - Product Overhaul",
    description: "Led the technological transformation of an early-phase startup. Unified app development from native iOS/Android to React-Native and migrated backend from Java to Node.js to streamline product, enhance agility, and improve customer engagement.",
    technologies: ["React-Native", "Node.js", "Mobile App Development", "Backend Migration", "Product Strategy"],
    imageUrl: "/logos/sloowy.png", // Using company logo as placeholder
  },
  {
    projectName: "Ayoba Web MVP",
    description: "Led the creation of a complete Minimum Viable Product for Ayoba web, a free messaging app for African countries. This involved close collaboration with cross-functional teams and delivering a functional PWA.",
    technologies: ["JavaScript (ES6+)", "React", "Redux", "PWA", "Frontend Development", "API Integration"],
    imageUrl: "/logos/xpertai.png", // Using company logo as placeholder (Ayoba is by Xpertai/MTN)
  },
  {
    projectName: "Component Library & Design System (Xpertai)",
    description: "Created a comprehensive component library in TypeScript and implemented a design system to ensure UI consistency, improve code quality, and streamline development workflows across projects.",
    technologies: ["TypeScript", "React", "Storybook", "Design Systems", "Chromatic"],
    imageUrl: "/logos/xpertai.png", // Placeholder
  },
  {
    projectName: "Legacy Code Conversion (Red Points)",
    description: "Successfully converted a significant portion of legacy frontend code to a modern React/Redux architecture, improving performance, maintainability, and developer experience.",
    technologies: ["React", "Redux", "JavaScript", "Code Refactoring", "Software Architecture"],
    imageUrl: "/logos/redpoints.png", // Placeholder
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Projects I've Contributed To</h2>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              projectName={proj.projectName}
              description={proj.description}
              technologies={proj.technologies}
              projectLink={proj.projectLink}
              imageUrl={proj.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectsSection;
