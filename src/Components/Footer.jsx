import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top section with flexible layout for mobile */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          {/* Navigation links */}
          <div className="w-full md:w-auto">
            <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm">
              <Link
                to="/"
                className="hover:text-pink-400 transition-colors px-2 py-1"
              >
                Home
              </Link>
              {["About", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-pink-400 transition-colors px-2 py-1"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social media icons */}
          <div className="flex gap-4 text-lg">
            <a
              href="https://www.facebook.com/almina.tanglao"
              className="hover:text-pink-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/AL-MINA"
              className="hover:text-pink-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:tanglaoalmina11@gmail.com"
              className="hover:text-pink-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/almina-tanglao-55b83634a"
              className="hover:text-pink-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Tagline - now properly centered and responsive */}
        <p className="text-sm text-gray-400 text-center my-4">
          Crafting digital experiences with passion and precision.
        </p>

        <div className="border-t border-gray-800 my-4" />

        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Almina Tanglao. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;