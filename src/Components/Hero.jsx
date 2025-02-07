import { motion, useScroll, useTransform } from "framer-motion";
import HeroImage from '../assets/user-image.jpg';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const yMove = useTransform(scrollYProgress, [0, 1], [0, -300]); // Moves up faster on scroll

  return (
    <motion.div 
      style={{ y: yMove }}
      className='bg-black text-white text-center pt-56 py-20 pb-48 relative overflow-hidden'
      id='about'
    >
      <div className='absolute inset-0 bg-gradient-to-br from-pink-900/20 to-blue-900/20 opacity-50 z-0'></div>
      <div className='absolute -top-20 -right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-2xl animate-pulse z-0'></div>
      <div className='absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-2xl animate-pulse z-0'></div>

      <div className='relative z-10'>
        <motion.img 
          src={HeroImage} 
          alt='' 
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover border-4 border-pink-300/50 shadow-2xl'
          whileHover={{ scale: 1.1, rotate: 6 }}
          transition={{ duration: 0.3 }}
        />
        <h1 className='text-4xl font-bold mb-4'>
          I'm{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500'>
            Almina Tanglao
          </span>
          , Graphic Designer | Frontend Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300 max-w-2xl mx-auto px-4'>
          I specialize in building modern and responsive web applications with a passion for creating intuitive and visually stunning digital experiences.
        </p>
        <div className='mt-10 space-x-4 flex justify-center'>
          <motion.button 
            className='flex items-center gap-2 bg-gradient-to-r from-pink-300 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Contact With Me →
          </motion.button>
          <motion.a 
            href="/RESUME [Tanglao, Almina].pdf" // Link to the resume
            download // Ensures the PDF is downloaded when clicked
            className='flex items-center gap-2 border-2 border-pink-300 text-pink-300 px-6 py-3 rounded-full hover:bg-pink-300/10'
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            Download Resume ↓
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
