const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 border-b border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
      <div className="max-w-3xl mx-auto px-4">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
          I’m the person who clears the path so engineers can focus on what they do best—building amazing things. 
          I make processes run like a well-oiled machine, ensuring the work stays exciting, challenging, and impactful. 
          My secret? I get to know what makes each person tick and align that with what the team needs to succeed. 
          I’m the first to high-five you when you crush it, and the first to ask, “What happened here?” when things don’t go as planned. 
          Maybe there’s a reason, or maybe there’s a fix, but either way—I’m here to help you do your best work, every time.
        </p>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center sm:text-left">Languages</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>Français (Native or Bilingual)</li>
            <li>Anglais (Full Professional)</li>
            <li>Espagnol (Full Professional)</li>
          </ul>
        </div>
        <div className="mt-6 text-center sm:text-left">
          <p className="text-md text-gray-600 dark:text-gray-400">
            Location: Barcelona, Catalonia, Spain
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
