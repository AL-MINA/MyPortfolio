import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import s1 from '../../assets/S1.png';
import s2 from '../../assets/S2.png';
import s3 from '../../assets/S3.png';
import a1 from '../../assets/A1.png';
import a2 from '../../assets/A2.png';
import a3 from '../../assets/A3.png';
import c1 from '../../assets/C1.png';
import c2 from '../../assets/C2.png';
import c3 from '../../assets/C3.png';

const projectData = [
  {
    id: 1,
    name: 'SWEET IN A BOX',
    description: 'Sweet in a Box is a delightful cookies shop website dedicated to showcasing a variety of sweet treats. The site features a comprehensive price list, detailed descriptions of product flavors, locations for easy access, and an engaging history of the cookies and their sweet journey.',
    technologies: 'HTML, CSS, PHP, JS',
    images: [s1, s2, s3],
    github: 'https://github.com/AL-MINA/Sweet-in-a-Box.git',
    liveDemo: 'https://sweetinabox.netlify.app',
  },
  {
    id: 2,
    name: 'AREA : YOUR HOME AWAY FROM HOME',
    description: 'AREA is a dynamic travel and lifestyle website designed to offer a seamless experience, much like Airbnb. The site features easy accommodation bookings, detailed travel guides, and a wide range of lifestyle experiences, providing users with all they need for their next adventure.',
    technologies: 'HTML, CSS, PHP, JS, MYSQL',
    images: [a1, a2, a3],
    github: 'https://github.com/AL-MINA/AREA-DWEBIMAN.git',
    liveDemo: 'https://areahomes.hstn.me/',
  },
  {
    id: 3,
    name: 'CAUTION COFFEE',
    description: 'Caution Coffee is a vibrant cafe and premium supply store located in Angeles City, Pampanga. The website highlights its expertly crafted coffee offerings, premium supplies, and inviting ambiance, providing an immersive experience for coffee lovers and enthusiasts.',
    technologies: 'HTML, BOOTSTRAP, CSS, JS, EJS, FIREBASE',
    images: [c1, c2, c3],
    github: 'https://github.com/AL-MINA/CAUTION-COFFEE-ADBASE-WEBPUB.git',
    liveDemo: 'https://caution-coffee.onrender.com/',
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => navigate('/projects')}
            className="bg-blue-950 text-center w-48 rounded-2xl h-14 relative text-white text-xl font-semibold border-4 border-blue group"
            type="button"
          >
            <div className="bg-pink-400 rounded-xl h-12 w-1/4 grid place-items-center absolute left-0 top-0 group-hover:w-full z-10 duration-500">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                ></path>
                <path
                  fill="#000000"
                  d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                ></path>
              </svg>
            </div>
            <p className="translate-x-4">Go Back</p>
          </button>
        </motion.div>

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