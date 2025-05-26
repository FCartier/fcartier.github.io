import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="mt-4 sm:mt-0">
      <ul className="flex flex-col sm:flex-row sm:space-x-6 space-y-2 sm:space-y-0 items-center">
        <li>
          <Link href="/" className="text-lg text-gray-100 hover:text-blue-400 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 rounded-md transition-colors duration-200 py-1">
            Home
          </Link>
        </li>
        <li>
          <Link href="/#experience" className="text-lg text-gray-100 hover:text-blue-400 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 rounded-md transition-colors duration-200 py-1">
            Experience
          </Link>
        </li>
        <li>
          <Link href="/#skills" className="text-lg text-gray-100 hover:text-blue-400 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 rounded-md transition-colors duration-200 py-1">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/#projects" className="text-lg text-gray-100 hover:text-blue-400 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 rounded-md transition-colors duration-200 py-1">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/#contact" className="text-lg text-gray-100 hover:text-blue-400 dark:hover:text-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 rounded-md transition-colors duration-200 py-1">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
