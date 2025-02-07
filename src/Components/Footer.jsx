import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                <div className="flex-1 mb-4 md:mb-0">
                    <h3 className='text-2xl font-bold mb-2'>AT Web & Design</h3>
                    <p className='text-gray-400'>Graphic Designer | Frontend Developer based in the PH, specializing web and designs</p>
                </div>
                <div className="flex-1 w-full relative">
                    <div className="flex">
                        <input 
                        type='email' 
                        placeholder='Your Email'
                        className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-pink-300 pr-24"
                        />
                        <button
                        type='submit'
                        className='absolute right-0 top-0 bottom-0 bg-gradient-to-r from-pink-300 to-pink-500 text-white px-4 py-2 rounded-r-lg'
                        >
                        Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center'>
                <p className='text-gray-400'>
                    © {new Date().getFullYear()} Tanglao. All rights reserved.
                </p>
                <div className='flex space-x-4 my-4 md:my-0'>
                   <a href='#' className='text-gray-400 hover:text-white'>
                        <FaFacebook />
                    </a>
                    <a href='#' className='text-gray-400 hover:text-white'>
                        <FaInstagram />
                    </a>
                    <a href='#' className='text-gray-400 hover:text-white'>
                        <FaLinkedin />
                    </a>
                    <a href='#' className='text-gray-400 hover:text-white'>
                        <FaGithub />
                    </a>
                </div>
                <div className='flex space-x-4 my-4 md:my-0'>
                    <Link to='/about' className='text-gray-400 hover:text-white'>
                        About
                    </Link>
                    <Link to='/projects' className='text-gray-400 hover:text-white'>
                        Projects
                    </Link>
                    <Link to='/contact' className='text-gray-400 hover:text-white'>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
