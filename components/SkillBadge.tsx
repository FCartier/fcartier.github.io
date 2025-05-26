interface SkillBadgeProps {
  skillName: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skillName }) => {
  return (
    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full shadow-sm">
      {skillName}
    </span>
  );
};

export default SkillBadge;
