import ExperienceCard from '@/components/ExperienceCard';

const experiences = [
  {
    companyName: "Contentsquare",
    jobTitle: "Senior Engineering Manager",
    dates: "May 2025 - Present",
    responsibilities: ["Leading engineering teams to deliver impactful solutions."],
    companyLogo: "/logos/contentsquare.png", // Placeholder
  },
  {
    companyName: "Carbon Crushers",
    jobTitle: "Co-Founder & CTO",
    dates: "March 2024 - Present",
    responsibilities: [
      "Harness the power of advertising to fuel environmental change.",
      "Develop engaging software, games and services that contribute to a greener planet.",
      "Contribute to planting trees and reducing carbon footprints with every product release."
    ],
    companyLogo: "/logos/carbon-crushers.png", // Placeholder
  },
  {
    companyName: "Hotjar",
    jobTitle: "Engineering Manager",
    dates: "September 2022 - May 2025",
    responsibilities: [
      "Led the Activation Squad, guiding new users to unlock product potential.",
      "Managed a team of seven professionals (frontend/backend engineers, designer, product manager).",
      "Set strategic direction for the squad, fostering open communication and aligning objectives with Hotjar's vision.",
      "Empowered team members through mentoring and professional growth.",
      "Improved onboarding process for a smooth user journey.",
      "Involved in hiring (20+ manager interviews), budget allocations, and setting expectations for individual contributors."
    ],
    companyLogo: "/logos/hotjar.png", // Placeholder
  },
  {
    companyName: "Sloowy",
    jobTitle: "Chief Technology Officer (CTO) & Principal Engineer",
    dates: "March 2022 - March 2024",
    responsibilities: [
      "Led technological transformation as CTO and sole engineer.",
      "Transitioned from native iOS/Android apps to a single React-Native app, speeding up deployment and bug fixes.",
      "Migrated backend services from Java to Node.js, enhancing scalability and performance.",
      "Implemented tracking and a discount system, boosting user satisfaction.",
      "Acted as a key technical advisor for stakeholders and investors.",
      "Engaged directly with users to refine product offerings."
    ],
    companyLogo: "/logos/sloowy.png", // Placeholder
  },
  {
    companyName: "Xpertai",
    jobTitle: "Frontend Team Lead",
    dates: "September 2021 - September 2022",
    responsibilities: [
      "Led a remote team of developers.",
      "Planned work for the next 3-12 months with Product Owner and Design Team.",
      "Mentored and coached team members.",
      "Created a component library in Typescript.",
      "Implemented a design system.",
      "Improved code quality and practices.",
      "Created a career path for talent growth.",
      "Changed workflow to improve communication with Design (UI Reviews with Chromatic).",
      "Supported test automation initiative.",
      "Helped elaborate the Roadmap."
    ],
    companyLogo: "/logos/xpertai.png", // Placeholder
  },
  {
    companyName: "Xpertai",
    jobTitle: "JS Frontend Engineer",
    dates: "November 2020 - September 2021",
    responsibilities: [
      "Created a complete MVP of Ayoba web.",
      "Collaborated with Design, Android, iOS, Backend, QA teams.",
      "Estimated team work.",
      "Conducted code reviews (TDD, DRY, SOLID).",
      "Participated in refinement sessions with Product team.",
      "Deployed new features to Production.",
      "Realized demonstrations to clients."
    ],
    companyLogo: "/logos/xpertai.png", // Placeholder
  },
  {
    companyName: "Red Points",
    jobTitle: "Front End Engineer",
    dates: "April 2019 - October 2020",
    responsibilities: [
      "Converted legacy code to React/Redux architecture.",
      "Worked in collaboration with Product Owners, Architect, Designers, QA.",
      "Followed agile methodologies (scrum).",
      "Realized tech research and prototypes.",
      "Launched a new project and extended main projects.",
      "Mentored junior profiles."
    ],
    companyLogo: "/logos/redpoints.png", // Placeholder
  },
  {
    companyName: "Adaptive",
    jobTitle: "Frontend Web Developer",
    dates: "October 2017 - April 2019",
    responsibilities: [
        "Developed user interfaces for financial applications.",
        "Collaborated with backend teams for API integration.",
        "Maintained and improved existing frontend codebase.",
    ], // Inferred placeholder
    companyLogo: "/logos/adaptive.png", // Placeholder
  },
  {
    companyName: "Steamulo",
    jobTitle: "Web Developer",
    dates: "April 2017 - October 2017",
    responsibilities: [
        "Developed web applications for various clients.",
        "Participated in the full software development lifecycle.",
        "Worked with multiple web technologies.",
    ], // Inferred placeholder
    companyLogo: "/logos/steamulo.png", // Placeholder
  },
  {
    companyName: "Electrolux",
    jobTitle: "Développeur Web et Mobile",
    dates: "May 2015 - March 2017",
    responsibilities: [
        "Developed and maintained web and mobile applications for internal use.",
        "Contributed to UI/UX design and implementation.",
        "Supported cross-functional teams with technical expertise.",
    ], // Inferred placeholder
    companyLogo: "/logos/electrolux.png", // Placeholder
  },
  {
    companyName: "Studio-Solution.com LTD",
    jobTitle: "Développeur Web et Mobile",
    dates: "July 2014 - April 2015",
    responsibilities: [
        "Developed websites and mobile applications for diverse clients.",
        "Managed project timelines and deliverables.",
        "Provided technical support and maintenance post-launch.",
    ], // Inferred placeholder
    companyLogo: "/logos/studio-solution.png", // Placeholder
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">My Experience</h2>
      <div className="max-w-4xl mx-auto px-4">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            companyName={exp.companyName}
            jobTitle={exp.jobTitle}
            dates={exp.dates}
            responsibilities={exp.responsibilities}
            companyLogo={exp.companyLogo}
          />
        ))}
      </div>
    </section>
  );
};
export default ExperienceSection;
