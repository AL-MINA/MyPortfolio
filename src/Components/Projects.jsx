import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { FaArrowRight } from 'react-icons/fa'; 
import cookies from '../assets/cookie.webp';
import area from '../assets/area.webp';
import caution from '../assets/caution.webp';
import trend from '../assets/trend.webp';
import graphics from '../assets/graphics.webp';

const projects = [
  {
    id: 1,
    name: 'SWEET IN A BOX',
    image: cookies,
  },
  {
    id: 2,
    name: 'AREA : YOUR HOME AWAY FROM HOME',
    image: area,
  },
  {
    id: 3,
    name: 'CAUTION COFFEE',
    image: caution,
  },
 {
    id: 4,
    name: 'TRENDMINS',
    image: trend,
  },
{
    id: 5,
    name: 'AT GRAPHICS COLLECTION',
    image: graphics,
  },
];

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100
};

const Projects = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className='bg-black text-white pt-56 py-20 pb-48 relative overflow-hidden' 
      id='projects'
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className='absolute inset-0 bg-gradient-to-br from-pink-900/20 to-blue-900/20 opacity-50 z-0'></div>

      <div className='absolute -top-20 -right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-2xl animate-pulse z-0'></div>
      <div className='absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-2xl animate-pulse z-0'></div>

      <div className='relative z-10 container mx-auto px-8 md:px-16 lg:px-24'>
        <motion.div 
          className='text-center mb-12'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-200">MY PROJECTS</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className='relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-2'
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              viewport={{ once: true }}
            >

              <motion.div 
                className='w-full h-64 bg-cover bg-center' 
                style={{ backgroundImage: `url(${project.image})` }}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={spring} 
                whileHover={{ scale: 1.05 }} 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-6 text-center z-10">
                <motion.h3 
                  className='text-3xl font-semibold text-white mb-2'
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.name}
                </motion.h3>

                <Link 
                  to={`/projects/${project.id}`} 
                  className='bg-gradient-to-r from-pink-950 to-red-950 text-white hover:text-pink-300 px-6 py-3 rounded-full text-lg flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:scale-105'
                >
                  <span>View Details</span>
                  <FaArrowRight className="text-white" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>  
      </div>
      
      {/* Back to Top Button */}
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          className="cursor-pointer fixed bottom-8 right-8 z-50 after:content-['scroll_to_top'] after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 w-16 h-16 rounded-full border-4 border-pink-400 bg-black pointer flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 group/button overflow-hidden active:scale-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-3 fill-white delay-50 duration-200 group-hover/button:-translate-y-12" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
          </svg>
        </motion.button>
      )}
    </motion.div>
  );
};

export default Projects;