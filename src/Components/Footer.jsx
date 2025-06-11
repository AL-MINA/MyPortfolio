import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const navItems = ["About", "Projects", "Contact"];
  const socialLinks = [
    { href: "https://www.facebook.com/almina.tanglao", label: "Facebook", icon: <FaFacebook /> },
    { href: "https://github.com/AL-MINA", label: "GitHub", icon: <FaGithub /> },
    { href: "mailto:tanglaoalmina11@gmail.com", label: "Email", icon: <FaEnvelope /> },
    { href: "https://www.linkedin.com/in/almina-tanglao-55b83634a", label: "LinkedIn", icon: <FaLinkedin /> },
  ];

  return (
    
    <footer className="bg-[#FAF5F1] py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
          <nav className="w-full md:w-auto flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm">
            <Link
              to="/"
              className="text-[#733F0E] hover:text-[#859CC5] "
            >
              Home
            </Link>
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-[#733F0E] hover:text-[#859CC5] "
              >
                {item}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4 text-lg">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                className="text-[#733F0E] hover:text-[#859CC5] bg-[#F7EACA] p-2 rounded transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <p className="text-sm text-[#859CC5] text-center my-4">
          Crafting digital experiences with passion and precision.
        </p>

        <div className="border-t" style={{ borderColor: "#F7EACA" }} />

        <p className="text-center text-sm text-[#733F0E] mt-4">
          &copy; {new Date().getFullYear()} Almina Tanglao. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
