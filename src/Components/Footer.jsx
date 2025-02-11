
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { href: "https://www.facebook.com/almina.tanglao", icon: <FaFacebook />, label: "Facebook" },
    { href: "https://github.com/AL-MINA", icon: <FaGithub />, label: "Github" },
    { href: "https://www.instagram.com/almstnglao", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://www.linkedin.com/in/almina-tanglao-55b83634a", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "https://discord.gg/Ht4FamkA", icon: <FaDiscord />, label: "Discord" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              AT WEB & DESIGN
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Crafting digital experiences with passion and precision. We build something amazing together.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-pink-400 transition-colors duration-300 block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <div className="space-y-2">
              <a 
                href="mailto:tanglaoalmina11@gmail.com"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300 block"
              >
                tanglaoalmina11@gmail.com
              </a>
              <a href="tel:+1234567890" 
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300 block">
                +63 969 567 4925
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-pink-400 transform hover:scale-110 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} AT WEB & DESIGN. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 opacity-50" />
    </footer>
  );
};

export default Footer;