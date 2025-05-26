import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-6 shadow-md">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl font-bold mb-4 sm:mb-0">My Portfolio</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
