import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-[#733F0E]">
      <div className="h-1 bg-[#F7EACA]" />
      <nav className="bg-[#FAF5F1]">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="./logo.png"
                alt="Logo"
                className="w-50 h-40 transition-transform duration-500"
              />
            </Link>

            <div className="hidden md:flex items-center gap-12 ml-auto">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-[#733F0E] hover:text-[#859CC5] font-medium px-3 py-2 rounded-md hover:bg-[#F7EACA] transition-all duration-300"
                >
                  {item}
                </Link>
              ))}
              <a
                href="https://github.com/AL-MINA"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#733F0E] text-[#FAF5F1] px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                GITHUB
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#733F0E] hover:text-[#859CC5] focus:outline-none p-2 bg-[#F7EACA] rounded-lg"
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                <span
                  className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>

          <div
            className={`md:hidden transform transition-all duration-300 origin-top ${
              isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0"
            }`}
          >
            <div className="py-4 space-y-2 bg-[#FAF5F1] rounded-lg mt-2 shadow-lg">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block px-4 py-2 text-[#733F0E] hover:text-[#859CC5] hover:bg-[#F7EACA] transition-colors duration-300"
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
