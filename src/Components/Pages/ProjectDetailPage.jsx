import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import s1 from '../../assets/S1.png';
import s2 from '../../assets/S2.png';
import s3 from '../../assets/S3.png';
import a1 from '../../assets/A1.png';
import a2 from '../../assets/A2.png';
import a3 from '../../assets/A3.png';
import c1 from '../../assets/C1.png';
import c2 from '../../assets/C2.png';
import c3 from '../../assets/C3.png';
import t1 from '../../assets/T1.png';
import t2 from '../../assets/T2.png';
import t3 from '../../assets/T3.png';
import g1 from '../../assets/G1.png';
import g2 from '../../assets/G2.png';
import g3 from '../../assets/G3.png';
import is1 from '../../assets/IS1.png';
import is2 from '../../assets/IS2.png';
import is3 from '../../assets/IS3.png';


const projectData = [
  {
    id: 1,
    name: 'SWEET IN A BOX',
    description: 'Sweet in a Box is a delightful cookies shop website dedicated to showcasing a variety of sweet treats. The site features a comprehensive price list, detailed descriptions of product flavors, locations for easy access, and an engaging history of the cookies and their sweet journey.',
    technologies: 'HTML, CSS, PHP, JS',
    images: [s1, s2, s3],
    liveDemo: 'https://sweetinabox.netlify.app',
  },
  {
    id: 2,
    name: 'AREA : YOUR HOME AWAY FROM HOME',
    description: 'AREA is a dynamic travel and lifestyle website designed to offer a seamless experience, much like Airbnb. The site features easy accommodation bookings, detailed travel guides, and a wide range of lifestyle experiences, providing users with all they need for their next adventure.',
    technologies: 'HTML, CSS, PHP, JS, MYSQL',
    images: [a1, a2, a3],
    liveDemo: 'https://areahomes.hstn.me/',
  },
  {
    id: 3,
    name: 'CAUTION COFFEE',
    description: 'Caution Coffee is a vibrant cafe and premium supply store located in Angeles City, Pampanga. The website highlights its expertly crafted coffee offerings, premium supplies, and inviting ambiance, providing an immersive experience for coffee lovers and enthusiasts.',
    technologies: 'HTML, BOOTSTRAP, CSS, JS, EJS, FIREBASE',
    images: [c1, c2, c3],
    liveDemo: 'https://caution-coffee.onrender.com/',
  },
  {
    id: 4,
    name: 'TRENDMINS',
    description: "Trendmins is a blog that explores the ever-evolving world of trends, covering fashion, lifestyle, and culture. It highlights the latest styles, from trendy sneakers and clothing brands to emerging lifestyle movements and cultural influences. Whether you're looking for fashion inspiration, insights into popular trends, or a glimpse into what’s shaping modern culture.",
    technologies: 'WORDPRESS',
    images: [t1, t2, t3],
    liveDemo: 'https://trendmins.wordpress.com',
  },
 {
    id: 5,
    name: 'Graphics Design Works',
    description: "AT Graphics Collection showcases a selection of my best graphic design works, highlighting creativity and visual storytelling.",
    technologies: 'HTML, CSS, JS, TAILWIND, CANVA',
    images: [g1, g2, g3],
    liveDemo: 'https://atgraphics-collection.netlify.app',
  },
  {
    id: 6,
    name: 'Graphics Design Works',
    description: "Intern Sreet is an online platform that connects job seekers (interns) with employers (companies).",
    technologies: 'REACT JS, TAILWIND, NODE JS, EXPRESS JS, PostgreSQL',
    images: [is1, is2, is3],
    liveDemo: 'https://internstreetph.site/',
  },
];

const Arrow = ({ direction, onClick }) => (
  <div
    className={`absolute z-10 ${direction === 'next' ? 'right-8' : 'left-8'} top-1/2 -translate-y-1/2 flex items-center justify-center bg-pink-500 h-12 w-12 rounded-full cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300`}
    onClick={onClick}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d={direction === 'next' ? 'M9 5L16 12L9 19' : 'M15 19L8 12L15 5'} 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const projectDetail = projectData.find((proj) => proj.id === parseInt(id));
    setProject(projectDetail);
  }, [id]);

  if (!project) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-blue-950 p-8 rounded-lg shadow-2xl">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-pink-400 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-pink-400 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-pink-400 rounded"></div>
              <div className="h-4 bg-pink-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (current, next) => setCurrentSlide(next),
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    appendDots: dots => (
      <div className="relative bottom-8">
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        className={`h-3 w-3 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-pink-500 scale-125' : 'bg-gray-400'}`}
      />
    ),
    responsive: [{ breakpoint: 768, settings: { arrows: false } }]
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-blue-950 text-white min-h-screen py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-16 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }} 
          className="mb-12"
        >
          <button
            onClick={() => navigate('/projects')}
            className="bg-blue-950 text-center w-48 rounded-full h-14 relative text-white text-xl font-semibold border-2 border-pink-500 group shadow-lg shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300"
            type="button"
          >

            <div className="absolute left-4 top-0 h-full flex items-center justify-center z-20">
              <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <div className="bg-pink-500 rounded-full h-full w-14 absolute left-0 top-0 group-hover:w-full z-10 duration-500 ease-in-out"></div>
            <p className="relative z-20 ml-6 group-hover:text-white transition-colors duration-500">Go Back</p>
          </button>
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-pink-400 mt-8">{project.name}</h1>

        <p className="text-lg text-gray-300 mt-4 text-center">{project.description}</p>

        <div className="carousel-container relative mb-16 overflow-hidden rounded-xl mt-8">
          <Slider {...sliderSettings}>
            {project.images.map((image, index) => (
              <div key={index} className="p-4 bg-gray-900 rounded-lg">
                <div className="border-4 border-pink-400 rounded-lg p-2">
                  <img 
                    src={image} 
                    alt={`${project.name} Screenshot ${index + 1}`} 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-200">Technologies Used</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.split(',').map((tech, index) => (
              <span key={index} className="px-5 py-3 bg-blue-900/50 rounded-full text-gray-200 font-medium border border-pink-500/30">
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

         <motion.div className="text-center px-4 mb-8">
  <a 
    href={project.liveDemo} 
    className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30"
    target="_blank" 
    rel="noopener noreferrer"
  >
    <div className="flex items-center gap-2">
      <span>View Live Demo</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </a>
</motion.div>

      </div>
    </div>
  );
};

export default ProjectDetailPage;
