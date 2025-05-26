import SkillBadge from '@/components/SkillBadge';

const primarySkills = ["Manager of Managers", "Written Communication", "Team Performance", "Strategic Planning", "Mentoring & Coaching", "Process Improvement"];
const technicalSkills = [
  "React", "Redux", "TypeScript", "JavaScript (ES6+)", "Node.js", "React-Native", 
  "Java", "Swift", "HTML5", "CSS3", 
  "API Design & Integration", "Unit Testing", "End-to-End Testing", "CI/CD", 
  "Git", "GitHub Actions", "Storybook", "Styled-components", "Tailwind CSS",
  "Agile Methodologies", "SCRUM", "JIRA", "Chromatic", "Firebase", "AWS (Basics)"
];
const languageSkills = [
  { name: "Français", level: "Native or Bilingual" },
  { name: "Anglais", level: "Full Professional" },
  { name: "Espagnol", level: "Full Professional" },
];

const certifications = [
  { name: "Foundations of IT Security: Core Concepts", issuer: "Google" },
  { name: "Taronja - Spanish Course (B1)", issuer: "Taronja Spanish School" },
];

const honors = [
  { name: "Hackathon 2016 Winner", event: "Electrolux Internal Hackathon" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
      
      <div className="max-w-4xl mx-auto px-4">
        {/* Primary Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center sm:text-left">Core Strengths</h3>
          <div className="flex flex-wrap justify-center sm:justify-start">
            {primarySkills.map((skill) => (
              <SkillBadge key={skill} skillName={skill} />
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center sm:text-left">Technical Proficiencies</h3>
          <div className="flex flex-wrap justify-center sm:justify-start">
            {technicalSkills.map((skill) => (
              <SkillBadge key={skill} skillName={skill} />
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center sm:text-left">Languages</h3>
          <div className="space-y-2">
            {languageSkills.map((lang) => (
              <div key={lang.name} className="flex items-center">
                <SkillBadge skillName={lang.name} />
                <span className="ml-2 text-gray-700 dark:text-gray-300">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Honors */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 text-center sm:text-left">Certifications & Honors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">Certifications</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                {certifications.map((cert) => (
                  <li key={cert.name}>{cert.name} - <span className="italic">{cert.issuer}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-3">Honors</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                {honors.map((honor) => (
                  <li key={honor.name}>{honor.name} - <span className="italic">{honor.event}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
export default SkillsSection;
