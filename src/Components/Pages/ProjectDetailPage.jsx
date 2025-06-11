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
    name: 'Intern Street',
    description: "Intern Street is an online platform that connects job seekers (interns) with employers (companies).",
    technologies: 'REACT JS, TAILWIND, NODE JS, EXPRESS JS, PostgreSQL',
    images: [is1, is2, is3],
    liveDemo: 'https://internstreetph.site/',
  },
];

const Arrow = ({ direction, onClick }) => (
  <div
    className={`absolute z-10 top-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 rounded-full cursor-pointer shadow-lg transition-shadow duration-300 hover:shadow-xl ${direction === 'next' ? 'right-8 bg-[#859CC5]' : 'left-8 bg-[#859CC5]'}`}
    onClick={onClick}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d={direction === 'next' ? 'M9 5L16 12L9 19' : 'M15 19L8 12L15 5'}
        stroke="#FAF5F1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

Arrow.propTypes = {
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const projectDetail = projectData.find((proj) => proj.id === parseInt(id, 10));
    setProject(projectDetail);
  }, [id]);

  if (!project) return (
    <div className="flex items-center justify-center min-h-screen bg-[#733F0E]">
      <div className="bg-[#859CC5] p-8 rounded-lg shadow-2xl">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-[#F7EACA] h-12 w-12" />
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-[#F7EACA] rounded w-3/4" />
            <div className="space-y-2">
              <div className="h-4 bg-[#F7EACA] rounded" />
              <div className="h-4 bg-[#F7EACA] rounded w-5/6" />
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
    beforeChange: (_, next) => setCurrentSlide(next),
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    appendDots: dots => (
      <div className="relative bottom-8">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        className={`h-3 w-3 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-[#859CC5] scale-125' : 'bg-[#F7EACA]'}`}
      />
    ),
    responsive: [{ breakpoint: 768, settings: { arrows: false } }],
  };

  return (
    <div className="bg-[#FAF5F1] text-[#733F0E] min-h-screen py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <button
            onClick={() => navigate('/projects')}
            type="button"
            className="relative w-48 h-14 text-xl font-semibold text-center text-[#FAF5F1] bg-[#859CC5] rounded-full border-2 border-[#733F0E] shadow-lg shadow-[#733F0E]/20 hover:shadow-[#733F0E]/40 transition-all duration-300 group"
          >
            <div className="absolute left-4 top-0 flex items-center justify-center h-full z-20">
              <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#FAF5F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="absolute left-0 top-0 w-14 h-full bg-[#F7EACA] rounded-full duration-500 ease-in-out group-hover:w-full z-10" />
            <p className="relative z-20 ml-6 transition-colors duration-500 group-hover:text-[#733F0E]">Go Back</p>
          </button>
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#859CC5] mt-8">{project.name}</h1>

        <p className="mt-4 text-lg text-center">{project.description}</p>

        <div className="carousel-container relative overflow-hidden rounded-xl mt-8 mb-16">
          <Slider {...sliderSettings}>
            {project.images.map((image, idx) => (
              <div key={idx} className="p-4 bg-[#F7EACA] rounded-lg">
                <div className="p-2 border-4 border-[#859CC5] rounded-lg">
                  <img
                    src={image}
                    alt={`${project.name} Screenshot ${idx + 1}`}
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="mb-8 text-center">
          <h3 className="mb-6 text-2xl font-bold text-[#733F0E]">Technologies Used</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {project.technologies.split(',').map((tech, idx) => (
              <span
                key={idx}
                className="px-5 py-3 font-medium text-[#733F0E] bg-[#859CC5]/20 rounded-full border border-[#733F0E]/30"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        </div>

        <motion.div className="mb-8 px-4 text-center">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg font-bold text-[#FAF5F1] bg-[#859CC5] rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#859CC5]/40"
          >
            <div className="flex items-center gap-2">
              <span>View Live Demo</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13 7L18 12L13 17M18 12H6"
                  stroke="#FAF5F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
