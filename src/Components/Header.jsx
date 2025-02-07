import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline">AT Web & Design</div>
        <div className="space-x-6 md:space-x-12">
          <Link to="/" className="text-pink-300 hover:text-gray-400 transition-colors duration-300">
            Home
          </Link>
          <Link to="/about" className="text-pink-300 hover:text-gray-400 transition-colors duration-300">
            About Me
          </Link>
          <Link to="/projects" className="text-pink-300 hover:text-gray-400 transition-colors duration-300">
            Projects
          </Link>
          <Link to="/contact" className="text-pink-300 hover:text-gray-400 transition-colors duration-300">
            Contact
          </Link>
        </div>
        <button className="bg-gradient-to-r from-pink-950 to-red-950 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Header;
