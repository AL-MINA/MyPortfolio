import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-6">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center gap-8">
          <nav className="flex gap-6 text-sm">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="hover:text-pink-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <p className="text-sm text-gray-400 text-center absolute left-1/2 transform -translate-x-1/2">
          Crafting digital experiences with passion and precision.
        </p>

        <div className="flex gap-4 text-lg">
          <a
            href="https://www.facebook.com/almina.tanglao"
            className="hover:text-pink-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://github.com/AL-MINA"
            className="hover:text-pink-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/almstnglao"
            className="hover:text-pink-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/almina-tanglao-55b83634a"
            className="hover:text-pink-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-800 my-4 mx-6" />

      <p className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Almina Tanglao. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
