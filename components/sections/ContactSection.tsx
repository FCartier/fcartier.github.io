const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Get In Touch
      </h2>
      <div className="max-w-lg mx-auto px-4 text-center">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          I'm always open to discussing new opportunities, projects, or just connecting with like-minded professionals. 
          Feel free to reach out!
        </p>
        <div className="space-y-6">
          <div>
            <a 
              href="mailto:flo.cartier@hotmail.fr" 
              className="inline-block w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus:ring-blue-500 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Email Me (flo.cartier@hotmail.fr)
            </a>
          </div>
          <div>
            <a 
              href="https://www.linkedin.com/in/floriancartier" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus:ring-gray-500 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Connect on LinkedIn (floriancartier)
            </a>
          </div>
        </div>
        <p className="mt-12 text-gray-600 dark:text-gray-400">
          You can also find my resume{" "}
          <a 
            href="/resume.pdf" // Placeholder link
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block px-6 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 dark:focus:ring-offset-gray-900 focus:ring-indigo-500 transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            Download Here
          </a>
          {" "} (placeholder).
        </p>
      </div>
    </section>
  );
};
export default ContactSection;
