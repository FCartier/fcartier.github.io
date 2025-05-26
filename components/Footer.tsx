const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white p-6 text-center mt-12 shadow-md">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} My Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
