import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FaCertificate, FaDownload, FaEye, FaArrowUp, FaTimes } from 'react-icons/fa';

import AboutImage from '../assets/about-me.jpg';
import ResponsiveCert from '../assets/responsive.png';
import JavaAlgoCert from '../assets/JavaAlgo.png';
import CourseraCert from '../assets/coursera.png';
import SEO1Cert from '../assets/SEO-I.png';
import SEO2Cert from '../assets/SEO-II.png';
import NetworksCert from '../assets/networks.png';
import CyberCert from '../assets/cyber.png';
import Ga4Cert from '../assets/GA4.png';

const CircleProgress = ({ percentage, name }) => {
  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  return (
    <div className="transition-colors duration-300">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            className="text-[#733F0E]"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="48"
            cy="48"
          />
          <motion.circle
            className="text-[#859CC5]"
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
          <span className="text-xl font-bold text-[#733F0E]">{percentage}%</span>
        </div>
      </div>
      <span className="mt-4 text-base font-medium text-[#733F0E]">{name}</span>
    </div>
  );
};

CircleProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

const CertificationCard = ({ cert, onView }) => (
  <motion.div
    className="group relative overflow-hidden rounded-2xl bg-[#F7EACA] h-[450px] flex flex-col justify-between"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="absolute inset-0 bg-[#FAF5F1] opacity-0 group-hover:opacity-60 transition-opacity duration-300 rounded-2xl" />
    <div className="relative p-6 h-full flex flex-col">
      <div className="mb-4">
        <FaCertificate className="text-3xl text-[#733F0E] group-hover:text-[#859CC5] transition-colors duration-300" />
      </div>
      <div className="flex-grow">
        <h4 className="text-xl font-bold mb-2 text-[#733F0E] group-hover:text-[#859CC5] transition-colors duration-300">
          {cert.title}
        </h4>
        <p className="text-[#733F0E] text-sm mb-4">{cert.source}</p>
      </div>
      <div className="relative mb-4 overflow-hidden rounded-lg h-[180px]">
        <img
          src={cert.img}
          alt={cert.title}
          className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300 rounded-lg"
        />
        <div className="absolute inset-0 bg-[#FAF5F1]/70 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-lg" />
      </div>
      <div className="flex flex-wrap items-center justify-between gap-2 mt-4">
        <button
          onClick={() => onView(cert)}
          className="flex-1 py-2 px-4 rounded-lg bg-[#733F0E]/80 hover:bg-[#859CC5] transition-all duration-300 flex items-center justify-center space-x-2 group"
        >
          <FaEye className="text-sm group-hover:scale-110 transition-transform duration-300 text-[#FAF5F1]" />
          <span className="text-sm font-medium text-[#FAF5F1]">Preview</span>
        </button>
        <a
          href={cert.img}
          download
          className="flex-1 py-2 px-4 rounded-lg bg-[#733F0E]/80 hover:bg-[#859CC5] transition-all duration-300 flex items-center justify-center space-x-2 group"
        >
          <FaDownload className="text-sm group-hover:scale-110 transition-transform duration-300 text-[#FAF5F1]" />
          <span className="text-sm font-medium text-[#FAF5F1]">Download</span>
        </a>
      </div>
    </div>
  </motion.div>
);

CertificationCard.propTypes = {
  cert: PropTypes.shape({
    title: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
  onView: PropTypes.func.isRequired,
};

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const skills = [
    { name: 'HTML | CSS', level: 'w-10/12' },
    { name: 'BOOTSTRAP | TAILWIND', level: 'w-9/12' },
    { name: 'REACT JS | ANGULAR JS', level: 'w-7/12' },
    { name: 'VUE JS | NODE JS', level: 'w-7/12' },
    { name: 'MYSQL | MONGODB', level: 'w-6/12' },
    { name: 'GITHUB | MICROSOFT', level: 'w-10/12' },
    { name: 'FIGMA | CANVA', level: 'w-11/12' },
  ];

  const softSkills = [
    { name: 'Accountabilty', percentage: 95 },
    { name: 'Adaptability', percentage: 92 },
    { name: 'Communication', percentage: 90 },
    { name: 'Creativity', percentage: 95 },
    { name: 'Empathy', percentage: 89 },
    { name: 'Patience', percentage: 98 },
    { name: 'Teamwork', percentage: 97 },
    { name: 'Time Management', percentage: 92 },
  ];

  const certifications = [
    { title: 'Introduction to Networks', source: 'Cisco Networking Academy Certification', img: NetworksCert },
    { title: 'Cybersecurity Essentials', source: 'Cisco Networking Academy Certification', img: CyberCert },
    { title: 'Responsive Web Design', source: 'freeCodeCamp Certification', img: ResponsiveCert },
    { title: 'Legacy Javascript Algorithms and Data Structures', source: 'freeCodeCamp Certification', img: JavaAlgoCert },
    { title: 'Get Started with Figma', source: 'Coursera Certification', img: CourseraCert },
    { title: 'SEO I', source: 'Hubspot Certification', img: SEO1Cert },
    { title: 'SEO II', source: 'Hubspot Certification', img: SEO2Cert },
    { title: 'Google Analytics 4', source: 'Google Certification', img: Ga4Cert },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="bg-[#FAF5F1] py-20"
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
          <h2 className="text-4xl font-bold mb-4 text-[#733F0E]">ABOUT ME</h2>
          <div className="w-24 h-1 bg-[#859CC5] mx-auto rounded-full mb-8" />
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
                className="w-full h-auto rounded-2xl object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#F7EACA] rounded-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            </div>
            <div className="mt-8 p-6 bg-[#F7EACA] rounded-xl">
              <p className="text-[#733F0E] text-lg leading-relaxed">
                I'm a fourth-year web development student passionate about front-end design, creating user-friendly and visually engaging digital experiences. As a Graphic Designer and Frontend Developer, I focus on building modern, responsive web applications. Outside of work, I enjoy movies, coffee shops, and time with loved ones.
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
              <h3 className="text-2xl font-bold mb-8 text-center text-[#733F0E]">Technical Skills</h3>
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
                    <label className="w-3/12 pr-4 text-[#733F0E]">{skill.name}</label>
                    <div className="grow bg-[#F7EACA] rounded-full h-3">
                      <div
                        className={`bg-[#859CC5] h-3 rounded-full transform transition-transform duration-300 hover:scale-105 ${skill.level}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-8 text-center text-[#733F0E]">Soft Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {softSkills.map(({ name, percentage }, index) => (
                  <CircleProgress key={index} percentage={percentage} name={name} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="max-w-7xl mx-auto px-4 md:px-8 lg:px-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-[#733F0E]">Certifications</h3>
          <div className="overflow-x-auto overflow-y-hidden scrollbar-custom">
            <div className="flex gap-6 px-1 py-2 md:px-4 min-w-max">
              {certifications.map((cert, index) => (
                <div key={index} className="flex-shrink-0 w-[40%] max-w-xs snap-start">
                  <CertificationCard cert={cert} onView={setSelectedCert} />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="relative max-w-3xl max-h-[90vh] overflow-auto rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-[#FAF5F1] hover:text-[#859CC5] text-2xl"
                onClick={() => setSelectedCert(null)}
              >
                <FaTimes />
              </button>
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                className="rounded-lg max-w-full max-h-[80vh]"
              />
            </motion.div>
          </motion.div>
        )}

        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-8 right-8 p-4 rounded-full bg-[#733F0E]/90 hover:bg-[#859CC5] text-[#FAF5F1] shadow-lg transition-colors duration-300"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default About;
