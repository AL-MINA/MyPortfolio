import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import HeroImage from '../assets/user-image.jpg';
import { FaArrowDown, FaArrowRight, FaArrowUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import caution from '../assets/caution.webp';
import area from '../assets/area.webp';

const featuredProjects = [
  { id: 3, name: 'CAUTION', image: caution, description: 'Caution Coffee Website' },
  { id: 2, name: 'AREA', image: area, description: 'Air BnB Website' }
];

const Hero = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
      if (projectsRef.current) {
        const rect = projectsRef.current.getBoundingClientRect();
        setProjectsVisible(rect.top < window.innerHeight * 0.75);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToProjects = () => projectsRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <motion.div className="bg-[#FAF5F1] text-[#733F0E] relative overflow-hidden" id="about">
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={HeroImage}
                alt="Profile"
                className="relative w-60 h-60 rounded-full object-cover border-4 border-[#733F0E] shadow-2xl mx-auto mb-8"
              />
              <h1 className="text-4xl font-bold mb-4 leading-tight">
                I'm <span className="text-[#859CC5]">Almina Tanglao</span>
              </h1>
              <h2 className="text-2xl font-medium mb-6 text-[#733F0E]">
                Graphic Designer <span className="text-[#859CC5]">|</span> Frontend Developer
              </h2>
              <h2 className="text-4xl md:text-4xl font-bold text-center mt-4 mb-6 tracking-wide text-[#733F0E]">
                Interfaces That Impress, Code That Connects
              </h2>
              <motion.p
                className="text-xl text-[#733F0E] mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                I specialize in building modern and responsive web applications with a passion for creating intuitive and visually stunning digital experiences.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-6 mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <motion.a
                  href="mailto:tanglaoalmina11@gmail.com"
                  className="group relative px-8 py-4 bg-[#733F0E] text-white rounded-full shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative flex items-center gap-2">
                    Contact Me
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <FaArrowRight />
                    </motion.span>
                  </span>
                </motion.a>

                <motion.a
                  href="/RESUME - Tanglao, A.pdf"
                  download
                  className="group relative px-8 py-4 border-2 border-[#859CC5] text-[#733F0E] rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative flex items-center gap-2">
                    Download Resume
                    <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <FaArrowDown />
                    </motion.span>
                  </span>
                </motion.a>
              </motion.div>

              <div className="flex justify-center">
                <motion.div
                  className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-full bg-[#F7EACA] text-[#733F0E] transition-all duration-300 transform hover:scale-110 mt-8 shadow-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, y: [0, 10, 0] }}
                  transition={{
                    opacity: { delay: 2, duration: 0.5 },
                    y: { delay: 2, duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                  }}
                  onClick={scrollToProjects}
                  aria-label="Scroll to projects"
                >
                  <FaArrowDown className="text-2xl" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div ref={projectsRef} className="min-h-screen bg-[#F7EACA] flex items-center">
        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: projectsVisible ? 1 : 0, y: projectsVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[#733F0E]">Featured Projects</h2>
            <div className="w-24 h-1 bg-[#859CC5] mx-auto rounded-full mb-4" />
            <p className="text-[#733F0E] max-w-2xl mx-auto">A Showcase of my recent Project Works!</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative group h-96 w-full shadow-lg border border-[#859CC5] rounded-xl overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: projectsVisible ? 1 : 0, y: projectsVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: projectsVisible ? 0.2 + index * 0.2 : 0 }}
              >
                <div
                  className="absolute w-full h-3/5 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute bottom-0 w-full bg-[#FAF5F1] p-6 mt-auto flex flex-col">
                  <h3 className="text-2xl font-bold mb-2 text-[#733F0E]">{project.name}</h3>
                  <p className="text-[#733F0E]">{project.description}</p>
                  <div className="flex justify-end mt-4">
                    <Link
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center px-6 py-2 bg-[#859CC5] text-white hover:text-[#733F0E] rounded-lg font-medium hover:opacity-90 transition-colors"
                    >
                      View Project
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="ml-2"
                      >
                        <FaArrowRight />
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full bg-[#733F0E] hover:bg-[#859CC5] text-[#FAF5F1] shadow-lg transition-colors duration-300 z-50 ${
          showBackToTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-2xl" />
      </motion.button>
    </motion.div>
  );
};

export default Hero;
