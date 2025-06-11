import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; 
import { FaArrowRight, FaArrowUp } from 'react-icons/fa'; 
import cookies from '../assets/cookie.webp';
import area from '../assets/area.webp';
import caution from '../assets/caution.webp';
import trend from '../assets/trend.webp';
import graphics from '../assets/graphics.webp';
import intern from '../assets/intern.webp';

const projects = [
  { id: 1, name: 'SWEET IN A BOX', image: cookies },
  { id: 2, name: 'AREA : YOUR HOME AWAY FROM HOME', image: area },
  { id: 3, name: 'CAUTION COFFEE', image: caution },
  { id: 4, name: 'TRENDMINS', image: trend },
  { id: 5, name: 'AT GRAPHICS COLLECTION', image: graphics },
  { id: 6, name: 'INTERN STREET', image: intern },
];

const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100
};

const Projects = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <motion.div 
      className='bg-[#FAF5F1] text-[#733F0E] pt-56 py-20 pb-48 relative overflow-hidden' 
      id='projects'
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className='absolute -top-20 -right-20 w-96 h-96 bg-[#F7EACA]/40 rounded-full blur-2xl animate-pulse z-0'></div>
      <div className='absolute -bottom-20 -left-20 w-96 h-96 bg-[#F7EACA]/30 rounded-full blur-2xl animate-pulse z-0'></div>

      <div className='relative z-10 container mx-auto px-8 md:px-16 lg:px-24'>
        <motion.div 
          className='text-center mb-12'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">MY PROJECTS</h2>
          <div className="w-24 h-1 bg-[#859CC5] mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className='relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:rotate-2'
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6, delay: index * 0.2 }} 
              viewport={{ once: true }}
            >
              <motion.div 
                className='w-full h-64 relative'
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={spring} 
                whileHover={{ scale: 1.05 }} 
              >
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className='w-full h-full object-cover'
                />
              </motion.div>
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center z-10 bg-black bg-opacity-40">
                <motion.h3 
                  className='text-3xl font-semibold text-[#FAF5F1] mb-2'
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.name}
                </motion.h3>

                <Link 
                  to={`/projects/${project.id}`} 
                  className='bg-[#733F0E] text-[#FAF5F1] hover:bg-[#859CC5] hover:text-[#733F0E] px-6 py-3 rounded-full text-lg flex items-center space-x-2 transition-all duration-300 ease-in-out transform hover:scale-105'
                >
                  <span>View Details</span>
                  <FaArrowRight className="text-[#FAF5F1]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>  
      </div>
      
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[#733F0E] text-[#FAF5F1] hover:bg-[#859CC5] transition-colors duration-300 shadow-lg z-50"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </motion.div>
  );
};

export default Projects;
