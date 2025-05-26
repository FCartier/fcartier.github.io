import Image from 'next/image';
import SkillBadge from './SkillBadge'; // Assuming SkillBadge can be reused here

interface ProjectCardProps {
  projectName: string;
  description: string;
  technologies: string[];
  projectLink?: string;
  imageUrl?: string; // Optional image for the project
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  description,
  technologies,
  projectLink,
  imageUrl,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6 transition-shadow duration-300 hover:shadow-xl flex flex-col h-full">
      {imageUrl && (
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            alt={`${projectName} project preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{projectName}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap">
            {technologies.map((tech, index) => (
              <SkillBadge key={index} skillName={tech} />
            ))}
          </div>
        </div>
      </div>
      {projectLink && (
        <div className="mt-auto pt-4">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 focus:ring-blue-500 rounded-sm transition-colors duration-200"
          >
            View Project &rarr;
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
