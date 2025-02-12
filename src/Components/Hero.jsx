import { motion } from "framer-motion";
import HeroImage from '../assets/user-image.jpg';
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  const particles = Array.from({ length: 20 });

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
    </motion.div>
  );
};

export default Hero;