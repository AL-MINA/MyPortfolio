import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import AboutImage from '../assets/about-me.jpg';
import ResponsiveCert from '../assets/responsive.png';
import JavaAlgoCert from '../assets/JavaAlgo.png';
import CourseraCert from '../assets/coursera.png';
import SEO1Cert from '../assets/SEO-I.png';
import SEO2Cert from '../assets/SEO-II.png';
import NetworksCert from '../assets/networks.png';
import CyberCert from '../assets/cyber.png';
import Ga4Cert from '../assets/GA4.png';
import { FaCertificate, FaDownload, FaEye } from 'react-icons/fa';

const CircleProgress = ({ percentage, name }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  
  return (
    <div className="transition-colors duration-300">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            className="text-gray-700"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="48"
            cy="48"
          />
          <motion.circle
            className="text-pink-500"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="48"
            cy="48"
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "easeOut" }}
            strokeDasharray={circumference}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold">{percentage}%</span>
        </div>
      </div>
      <span className="mt-4 text-base font-medium">{name}</span>
    </div>
  );
};

CircleProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

const CertificationCard = ({ cert, onView }) => (
  <motion.div 
    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    <div className="relative p-6 h-full flex flex-col">
      <div className="mb-4">
        <FaCertificate className="text-3xl text-pink-500 group-hover:text-pink-400 transition-colors duration-300" />
      </div>
      
      <div className="flex-grow">
        <h4 className="text-xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors duration-300">
          {cert.title}
        </h4>
        <p className="text-gray-400 text-sm mb-4">
          {cert.source}
        </p>
      </div>

      <div className="relative mb-4 overflow-hidden rounded-lg">
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src={cert.img} 
            alt={cert.title}
            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
        <button
          onClick={() => onView(cert)}
          className="flex-1 py-2 px-4 rounded-lg bg-gray-700/50 hover:bg-pink-500 transition-all duration-300 flex items-center justify-center space-x-2 group"
        >
          <FaEye className="text-sm group-hover:scale-110 transition-transform duration-300 text-white" />
          <span className="text-sm font-medium text-gray-200">Preview</span>
        </button>
        <a
          href={cert.img}
          download
          className="flex-1 py-2 px-4 rounded-lg bg-gray-700/50 hover:bg-pink-500 transition-all duration-300 flex items-center justify-center space-x-2 group"
        >
          <FaDownload className="text-sm group-hover:scale-110 transition-transform duration-300 text-white" />
          <span className="text-sm font-medium text-gray-200">Download</span>
        </a>
      </div>
    </div>
  </motion.div>
);

CertificationCard.propTypes = {
  cert: PropTypes.shape({
    title: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired,
  onView: PropTypes.func.isRequired
};

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Handle scroll event to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const skills = [
    { name: 'HTML | CSS', level: 'w-10/12' },
    { name: 'BOOTSTRAP | TAILWIND', level: 'w-9/12' },
    { name: 'REACT JS | ANGULAR JS', level: 'w-7/12' },
    { name: 'VUE JS | NODE JS', level: 'w-7/12' },
    { name: 'MYSQL | MONGODB', level: 'w-6/12' },
    { name: 'GITHUB | MICROSOFT', level: 'w-10/12' },
    { name: 'FIGMA | CANVA', level: 'w-11/12' }
  ];

  const softSkills = [
    { name: 'Accountabilty', percentage: 95 },
    { name: 'Adaptability', percentage: 92 },
    { name: 'Communication', percentage: 90 },
    { name: 'Creativity', percentage: 95 },
    { name: 'Empathy', percentage: 89 },
    { name: 'Patience', percentage: 98 },
    { name: 'Teamwork', percentage: 97 },
    { name: 'Time Management', percentage: 92 }

  ];

  const certifications = [
    { title: 'Introduction to Networks', source: 'Cisco Networking Academy Certification', img: NetworksCert },
    { title: 'Cybersecurity Essentials', source: 'Cisco Networking Academy Certification', img: CyberCert },
    { title: 'Responsive Web Design', source: 'freeCodeCamp Certification', img: ResponsiveCert },
    { title: 'Legacy Javascript Algorithms and Data Structures', source: 'freeCodeCamp Certification', img: JavaAlgoCert },
    { title: 'Get Started with Figma', source: 'Coursera Certification', img: CourseraCert },
    { title: 'SEO I', source: 'Hubspot Certification', img: SEO1Cert },
    { title: 'SEO II', source: 'Hubspot Certification', img: SEO2Cert },
    { title: 'Google Analytics 4', source: 'Google Certification', img: Ga4Cert }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="bg-black text-white py-20"
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-200">ABOUT ME</h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <img 
                src={AboutImage} 
                alt="Almina Tanglao" 
                className="w-full h-auto rounded-2xl object-cover shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="mt-8 p-6 bg-gray-800 rounded-xl">
              <p className="text-lg leading-relaxed">
                I'm a third-year web development student passionate about front-end design, creating user-friendly and visually engaging digital experiences. As a Graphic Designer and Frontend Developer, I focus on building modern, responsive web applications. Outside of work, I enjoy movies, coffee shops, and time with loved ones.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
              <div className="space-y-6 max-w-3xl mx-auto">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -50 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <label className="w-3/12 pr-4">{skill.name}</label>
                    <div className="grow bg-gray-800 rounded-full h-3">
                      <div 
                        className={`bg-gradient-to-r from-pink-300 to-pink-500 h-3 rounded-full transform transition-transform duration-300 hover:scale-105 ${skill.level}`}>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center mx-auto text-center max-w-3xl">
                {softSkills.map((skill, index) => (
                  <CircleProgress
                    key={index}
                    percentage={skill.percentage}
                    name={skill.name}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard 
                key={index}
                cert={cert}
                onView={setSelectedCert}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: showScrollButton ? 1 : 0,
          scale: showScrollButton ? 1 : 0.5
        }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={scrollToTop}
          className="cursor-pointer relative after:content-['scroll_to_top'] after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 w-16 h-16 rounded-full  border-4 border-pink-400 bg-black pointer flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 group/button overflow-hidden active:scale-90"
        >
          <svg
            className="w-3 fill-white delay-50 duration-200 group-hover/button:-translate-y-12"
            viewBox="0 0 384 512"
          >
            <path
              d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            ></path>
          </svg>
        </button>
      </motion.div>

      {/* Certification Preview Modal */}
      {selectedCert && (
        <motion.div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 p-2 text-black hover:text-pink-500 transition-colors duration-300 text-2xl"
            >
              ✕
            </button>
            <motion.div 
              className="bg-gray-800 p-6 rounded-xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <h3 className="text-xl font-bold mb-4">{selectedCert.title}</h3>
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                className="w-full rounded-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default About;