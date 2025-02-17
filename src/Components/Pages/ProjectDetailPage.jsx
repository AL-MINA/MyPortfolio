import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import cookies from '../../assets/cookie.png';
import area from '../../assets/area.jpg';
import caution from '../../assets/caution.png';
import { FaArrowLeft } from 'react-icons/fa';

const projectData = [
  {
    id: 1,
    name: 'SWEET IN A BOX',
    description: 'Sweet in a Box is a delightful cookies shop website dedicated to showcasing a variety of sweet treats. The site features a comprehensive price list, detailed descriptions of product flavors, locations for easy access, and an engaging history of the cookies and their sweet journey.',
    technologies: 'HTML, CSS, PHP, JS',
    images: [cookies, 'path/to/sweet-image1.jpg', 'path/to/sweet-image2.jpg'],
    github: 'https://github.com/AL-MINA/Sweet-in-a-Box.git',
    liveDemo: 'https://sweetinabox.com',
  },
  {
    id: 2,
    name: 'AREA : YOUR HOME AWAY FROM HOME',
    description: 'AREA is a dynamic travel and lifestyle website designed to offer a seamless experience, much like Airbnb. The site features easy accommodation bookings, detailed travel guides, and a wide range of lifestyle experiences, providing users with all they need for their next adventure.',
    technologies: 'HTML, CSS, PHP, JS, MYSQL',
    images: [area, 'path/to/area-image1.jpg', 'path/to/area-image2.jpg'],
    github: 'https://github.com/AL-MINA/AREA-DWEBIMAN.git',
    liveDemo: 'https://areahome.com',
  },
  {
    id: 3,
    name: 'CAUTION COFFEE',
    description: 'Caution Coffee is a vibrant cafe and premium supply store located in Angeles City, Pampanga. The website highlights its expertly crafted coffee offerings, premium supplies, and inviting ambiance, providing an immersive experience for coffee lovers and enthusiasts.',
    technologies: 'HTML, BOOTSTRAP, CSS, JS, EJS, FIREBASE',
    images: [caution, 'path/to/caution-image1.jpg', 'path/to/caution-image2.jpg'],
    github: 'https://github.com/AL-MINA/CAUTION-COFFEE-ADBASE-WEBPUB.git',
    liveDemo: 'https://cautioncoffee.com',
  },
];

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectDetail = projectData.find((proj) => proj.id === parseInt(id));
    setProject(projectDetail);
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12">
      <div className="container mx-auto px-8 md:px-16">
        <motion.button
          onClick={() => navigate('/projects')}
          className="mb-8 text-white bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-lg shadow-md transition duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
         <FaArrowLeft/> 
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-extrabold text-gray-200">{project.name}</h1>
          <p className="text-lg text-gray-400 mt-4">{project.description}</p>
          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg bg-gray-800"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img
                src={image}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-6" 
        >
          <p className="text-lg text-gray-400 mb-4">Technologies: {project.technologies}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center gap-8">
            <motion.a
              href={project.liveDemo}
              className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-full transition duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Live Demo
            </motion.a>

            <motion.a
              href={project.github}
              className="inline-block bg-gradient-to-r from-pink-950 to-red-950 text-white px-6 py-3 rounded-full transition duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              GitHub Repository
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
