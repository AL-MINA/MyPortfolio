import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleScroll = () => setRotate(window.scrollY > 50 ? 90 : 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative z-50 bg-gradient-to-r from-black via-blue-950 to-black">
      <div className="h-1 bg-gradient-to-r from-black via-blue-950 to-black" />
      <nav className="bg-gradient-to-br from-black via-blue-950 to-black">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="./logo.png"
                alt="Logo"
                className="w-14 h-14 transition-transform duration-500"
                style={{ transform: `rotate(${rotate}deg)` }}
              />
              <span className="text-xl font-semibold text-gray-400">Web & Design</span>
            </Link>

            <div className="hidden md:flex items-center gap-12 ml-auto">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-pink-400 font-medium px-3 py-2 rounded-md hover:bg-gray-600 transition-all duration-300"
                >
                  {item}
                </Link>
              ))}
              <a
                href="https://github.com/AL-MINA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-950 to-pink-800 text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                GITHUB
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 hover:text-pink-400 focus:outline-none p-2 bg-gray-700 rounded-lg"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>

          <div className={`md:hidden transform transition-all duration-300 ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'} origin-top`}>
            <div className="py-4 space-y-2 bg-gradient-to-br from-black via-blue-950 to-black rounded-lg mt-2 shadow-lg">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block px-4 py-2 text-gray-300 hover:text-pink-400 hover:bg-gray-600 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
