import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import HeroImage from '../assets/user-image.jpg';
import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import cookies from '../assets/cookie.webp';
import area from '../assets/area.webp';

const featuredProjects = [
  {
    id: 1,
    name: 'SWEET IN A BOX',
    image: cookies,
    description: 'Cookies Website'
  },
  {
    id: 2,
    name: 'AREA',
    image: area,
    description: 'Air BnB Website'
  }
];

const Hero = () => {
  const particles = Array.from({ length: 20 });
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      if (projectsRef.current) {
        const rect = projectsRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        setProjectsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden"
      id="about"
    >
      <div className="min-h-screen relative flex items-center justify-center">
        {particles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, 30, 0], opacity: [0, 1, 0] }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 opacity-50" />
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="relative inline-block mb-8">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-xl opacity-75"
                animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={HeroImage}
                  alt="Profile" 
                  className="relative w-40 h-40 rounded-full object-cover border-4 border-white/10 shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink-500/20 to-purple-500/20 animate-pulse" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold mb-4 leading-tight">
                I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
                  Almina Tanglao
                </span>
              </h1>
              <h2 className="text-2xl font-medium mb-6 text-gray-300">
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  Graphic Designer
                </motion.span>{" "}
                <span className="text-pink-400">|</span>{" "}
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                  Frontend Developer
                </motion.span>
              </h2>

              <h2 className="text-3xl md:text-4xl font-bold text-center mt-4 mb-6 tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Interfaces That Impress, Code That Connects
              </h2>

              <motion.p 
                className="text-xl text-gray-300 mb-8 leading-relaxed"
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
                  className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative flex items-center gap-2 text-white">
                    Contact Me
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <FaArrowRight/>
                    </motion.span>
                  </span>
                </motion.a>
                <motion.a 
                  href="/RESUME [Tanglao, Almina].pdf"
                  download
                  className="group relative px-8 py-4 border-2 border-purple-400/50 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="relative flex items-center gap-2 text-white">
                    Download Resume
                    <motion.span animate={{ y: [0, -5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                      <FaArrowDown/>
                    </motion.span>
                  </span>
                </motion.a>
              </motion.div>

             <div className="flex justify-center">
                <motion.div
                    className="cursor-pointer flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-pink-400 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 mt-8 shadow-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ 
                    opacity: { delay: 2, duration: 0.5 },
                    y: { delay: 2, duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    onClick={scrollToProjects}
                    >
                  <FaArrowDown className="text-2xl" />
                </motion.div>
              </div>



            </motion.div>
          </div>
        </div>
      </div>

      <div 
        ref={projectsRef}
        className="min-h-screen relative bg-gradient-to-b from-gray-900 to-black flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10 opacity-40" />
        <motion.div 
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative z-10 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: projectsVisible ? 1 : 0, y: projectsVisible ? 0 : 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text inline-block">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A Showcase of my recent Project Works!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {featuredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="relative group h-96 w-full [perspective:1000px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: projectsVisible ? 1 : 0, 
                  y: projectsVisible ? 0 : 30 
                }}
                transition={{ duration: 0.6, delay: projectsVisible ? 0.2 + (index * 0.2) : 0 }}
              >
                <div
                  className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] shadow-2xl"
                >
                  <div
                    className="absolute w-full h-full rounded-xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 border border-purple-500/20 backdrop-blur-sm overflow-hidden [backface-visibility:hidden]"
                  >
                    <div 
                      className="w-full h-3/5 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-110"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                    
                    <div className="p-6">
                      <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-4"></div>
                      
                      <h3 className="text-2xl font-bold mb-2 text-white">
                        {project.name}
                      </h3>
                      
                      <p className="text-gray-300">{project.description}</p>
                      
                      <p className="text-sm mt-4 text-pink-400 opacity-75">Hover to see details!</p>
                    </div>
                  </div>
                  
                  <div
                    className="absolute w-full h-full rounded-xl bg-gradient-to-br from-pink-500/30 to-purple-500/30 p-6 text-white border border-pink-500/30 backdrop-blur-sm [transform:rotateX(180deg)] [backface-visibility:hidden]"
                  >
                    <div className="flex flex-col h-full">
                      <div className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                        {project.name}
                      </div>
                      <div className="flex-grow">
                        <p className="text-lg mb-4">
                          This project showcases my skills in {project.description.toLowerCase()}. Click below to see more details.
                        </p>
                        
                        <div className="space-y-2 text-gray-300">
                          <div className="flex gap-2">
                            <span className="text-pink-400">•</span>
                            <span>Visual design</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-pink-400">•</span>
                            <span>Responsive implementation</span>
                          </div>
                          <div className="flex gap-2">
                            <span className="text-pink-400">•</span>
                            <span>User experience optimization</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-auto">
                        <Link
                          to={`/projects/${project.id}`}
                          className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-medium hover:opacity-90 transition-colors flex items-center gap-2"
                        >
                          View Project 
                          <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <FaArrowRight />
                          </motion.span>
                        </Link>
                        <div className="text-3xl">✨</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: projectsVisible ? 1 : 0,
              y: projectsVisible ? 0 : 20
            }}
            transition={{ duration: 0.6, delay: projectsVisible ? 0.8 : 0 }}
          >
            <Link 
              to="/projects" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 hover:from-pink-500/30 hover:to-purple-500/30 text-white rounded-full transition-all duration-300 border border-purple-500/30 hover:border-purple-500/60 shadow-lg hover:shadow-purple-500/20"
            >
              <span className="mr-2 font-medium">Explore All Projects</span>
              <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 cursor-pointer w-16 h-16 rounded-full border-4 border-pink-400 bg-black flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 group/button overflow-hidden active:scale-90 z-50 ${
          showBackToTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg className="w-3 fill-white delay-50 duration-200 group-hover/button:-translate-y-12" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
        <span className="absolute opacity-0 group-hover/button:opacity-100 transition-opacity duration-200 translate-y-12 group-hover/button:translate-y-0 text-white whitespace-nowrap">scroll to top</span>
      </motion.button>
    </motion.div>
  );
};

export default Hero;