import Image from 'next/image';

interface ExperienceCardProps {
  companyName: string;
  jobTitle: string;
  dates: string;
  responsibilities: string[];
  companyLogo?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  companyName,
  jobTitle,
  dates,
  responsibilities,
  companyLogo,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6 transition-shadow duration-300 hover:shadow-xl">
      <div className="flex items-start mb-4">
        {companyLogo && (
          <div className="mr-4 flex-shrink-0">
            <Image
              src={companyLogo}
              alt={`${companyName} logo`}
              width={64} // Equivalent to w-16
              height={64} // Equivalent to h-16
              className="rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{companyName}</h3>
          <p className="text-md text-blue-600 dark:text-blue-400 font-semibold">{jobTitle}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{dates}</p>
        </div>
      </div>
      <div>
        <h4 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">Responsibilities:</h4>
        <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
          {responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceCard;
