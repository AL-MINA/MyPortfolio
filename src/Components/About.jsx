import { motion } from 'framer-motion';
import AboutImage from '../assets/about-me.png';

const About = () => {
  const skills = [
    { name: 'HTML | CSS', level: 'w-10/12' },
    { name: 'BOOTSTRAP | TAILWIND', level: 'w-9/12' },
    { name: 'REACT JS | ANGULAR JS', level: 'w-7/12' },
    { name: 'MYSQL | MONGODB', level: 'w-6/12' },
    { name: 'FIGMA | CANVA', level: 'w-11/12' }
  ];

  const softSkills = [
    { name: 'Teamwork', percentage: '97%' },
    { name: 'Communication', percentage: '90%' },
    { name: 'Creativity', percentage: '95%' },
    { name: 'Time Management', percentage: '92%' }
  ];

  const certifications = [
    { title: 'Web Development Professional', source: 'Google Developer Certification' },
    { title: 'Frontend React Specialist', source: 'Udemy Certification' },
    { title: 'UX/UI Design Fundamentals', source: 'Coursera Certification' },
    { title: 'Responsive Web Design', source: 'freeCodeCamp Certification' },
    { title: 'Legacy Javascript Algorithms and Data Structures', source: 'freeCodeCamp Certification' },
    { title: 'SEO I', source: 'Hubspot Certification' },
    { title: 'SEO II', source: 'Hubspot Certification' }
  ];

  return (
    <motion.div 
      className='bg-black text-white py-20' id='about'
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8, ease: 'easeOut' }} 
      viewport={{ once: true }}
    >
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <motion.h2 
          className='text-4xl font-bold text-center mb-12'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <motion.img 
            src={AboutImage} 
            alt='Almina Tanglao' 
            className='w-72 h-80 rounded object-cover mb-8 md:mb-0'
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />
          
          <motion.div 
            className='flex-1'
            initial={{ opacity: 0, x: 50 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className='text-lg mb-8'>
              I'm a third-year web development student passionate about front-end design, creating user-friendly and visually engaging digital experiences. As a Graphic Designer and Frontend Developer, I focus on building modern, responsive web applications. Outside of work, I enjoy movies, coffee shops, and time with loved ones.
            </p>
            
            <div className='space-y-6'>
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className='flex items-center'
                  initial={{ opacity: 0, x: -50 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <label className='w-3/12 pr-4'>{skill.name}</label>
                  <div className='grow bg-gray-800 rounded-full h-3'>
                    <div 
                      className={`bg-gradient-to-r from-pink-300 to-pink-500 h-3 rounded-full transform transition-transform duration-300 hover:scale-105 ${skill.level}`}>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className='mt-12 flex justify-between text-center'
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {softSkills.map((skill, index) => (
                <div key={index}>
                  <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500'>
                    {skill.percentage}
                  </h3>
                  <p>{skill.name}</p>
                </div>
              ))}
            </motion.div>

            <motion.div 
              className='mt-20'
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className='text-2xl font-bold mb-8 text-center'>CERTIFICATIONS</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {certifications.map((cert, index) => (
                  <motion.div 
                    key={index} 
                    className='bg-gray-800 p-5 rounded-lg'
                    initial={{ opacity: 0, scale: 0.8 }} 
                    whileInView={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className='font-semibold text-lg mb-2'>{cert.title}</h4>
                    <p className='text-sm text-gray-400'>{cert.source}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
