import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-black via-blue-950 to-black py-8'>
      <div className='container mx-auto px-6 md:px-12 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between mb-6 text-center md:text-left'>
          <div className='mb-6 md:mb-0'>

            <h3 className='text-lg font-bold mb-2 text-gray-400'>EXPLORE</h3>
            <a href="/" className="block text-white hover:text-pink-400">Home</a>
            <Link to="/about" className="block text-white hover:text-pink-400">About</Link>
              <Link to="/projects" className="block text-white hover:text-pink-400">Projects</Link>
              <Link to="/contact" className="block text-white hover:text-pink-400">Contact</Link>
          </div>
          
          <div className='mb-6 md:mb-0'>
            <h3 className='text-lg font-bold mb-2 text-gray-400'>CONTACT</h3>
            <div className='flex flex-col items-center md:items-start space-y-2 mt-2'>
              <a href='mailto:tanglaoalmina11@gmail.com' className='text-white hover:text-pink-400 flex items-center'>
                <FaEnvelope className='mr-2 ' />tanglaoalmina11@gmail.com
              </a>
            </div>
            <div className='flex flex-col items-center md:items-start space-y-2 mt-2'>
              <a href='tel:+639695674925' className='text-white hover:text-pink-400 flex items-center'>
                <FaPhone className='mr-2 ' /> +63 969 5674 925
              </a>
            </div>
          </div>
          
          <div>
            <h3 className='text-lg font-bold mb-2 text-gray-400'>SOCIALS</h3>
            <div className='flex flex-col items-center md:items-start space-y-2 mt-2'>
              <a href='https://www.facebook.com/almina.tanglao' className='text-white hover:text-pink-400 flex items-center'>
                <FaFacebook className='mr-2' /> Facebook
              </a>
              <a href='https://github.com/AL-MINA' className='text-white hover:text-pink-400 flex items-center'>
                <FaGithub className='mr-2' /> Github
              </a>
              <a href='https://www.instagram.com/almstnglao/?utm_source=ig_web_button_share_sheet' className='text-white hover:text-pink-400 flex items-center'>
                <FaInstagram className='mr-2' /> Instagram
              </a>
              <a href='https://www.linkedin.com/in/almina-tanglao-55b83634a/' className='text-white hover:text-pink-400 flex items-center'>
                <FaLinkedin className='mr-2' /> Linkedin
              </a>
            </div>
          </div>
        </div>

        <div className='text-center text-white font-semibold mb-6'>
          <p>Code, Design, Innovate.</p>
        </div>

        <div className='text-center text-4xl md:text-9xl font-bold text-gray-400'>
         <Link to="/" className=' hover:text-pink-400'> 
          <p>&copy;AT WEB & DESIGN</p>
        </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
