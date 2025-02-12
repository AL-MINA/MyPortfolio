import { motion } from 'framer-motion';
import cookies from '../assets/cookie.png';
import area from '../assets/area.jpg';
import caution from '../assets/caution.png';

const projects = [
  {
    id: 1,
    name: 'SWEET IN A BOX',
    technologies: 'HTML, CSS, PHP, JS',
    image: cookies,
    github: 'https://github.com/AL-MINA/Sweet-in-a-Box.git',
  },
  {
    id: 2,
    name: 'AREA : YOUR HOME AWAY FROM HOME',
    technologies: 'HTML, CSS, PHP, JS, MYSQL',
    image: area,
    github: 'https://github.com/AL-MINA/AREA-DWEBIMAN.git',
  },
  {
    id: 3,
    name: 'CAUTION COFFEE',
    technologies: 'HTML, BOOTSTRAP, CSS, JS, EJS, FIREBASE',
    image: caution,
    github: 'https://github.com/AL-MINA/CAUTION-COFFEE-ADBASE-WEBPUB.git',
  },
];

const Projects = () => {
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
          {projects.map(project => (
            <motion.div 
              key={project.id} 
              className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'
              initial={{ opacity: 0, scale: 0.8 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src={project.image} 
                alt={project.name} 
                className='rounded-lg mb-4 w-full h-48 object-cover'
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}
              />
              <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
              <p className='text-gray-400 mb-4'>{project.technologies}</p>
              <a 
                href={project.github} 
                className='inline-block bg-gradient-to-r from-pink-950 to-red-950 text-white px-4 py-2 rounded-full' 
                target='_blank' 
                rel='noopener noreferrer'
              >
                GitHub
              </a>
            </motion.div>
          ))}
        </div>  
      </div>
    </motion.div>
  );
};

export default Projects;