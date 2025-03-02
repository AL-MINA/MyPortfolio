import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroImage from '../assets/user-image.jpg';
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const particles = Array.from({ length: 20 });
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
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

  return (
    <motion.div 
      className="h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white relative overflow-hidden flex items-center justify-center"
      id="about"
    >
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
        className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-pink-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
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
          className="max-w-4xl mx-auto"
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
            className="flex flex-wrap justify-center gap-6"
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
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 cursor-pointer after:content-['scroll_to_top'] after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 w-16 h-16 rounded-full border-4 border-pink-400 bg-black flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 group/button overflow-hidden active:scale-90 z-50 ${
          showBackToTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg className="w-3 fill-white delay-50 duration-200 group-hover/button:-translate-y-12" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </motion.button>
    </motion.div>
  );
};

export default Hero;