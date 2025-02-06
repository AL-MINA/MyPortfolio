import AboutImage from '../assets/about-me.png'

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <img src={AboutImage} alt='' className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
          <div className='flex-1'>
          <p className='text-lg mb-8'>
          I'm a third-year web development student passionate about front-end design, creating user-friendly and visually engaging digital experiences. As a Graphic Designer and Frontend Developer, I focus on building modern, responsive web applications. Outside of work, I enjoy movies, coffee shops, and time with loved ones.
          </p>
          <div className='space-y-6'>
            <div className='flex items-center'>
              <label htmlFor='htmlandcss' className='w-3/12 pr-4'>HTML | CSS</label>
              <div className='grow bg-gray-800 rounded-full h-3'>
              <div 
                className='bg-gradient-to-r from-pink-300 to-pink-500 h-3 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'></div>
              </div>
            </div>
            <div className='flex items-center'>
              <label htmlFor='bootstrap' className='w-3/12 pr-4'>BOOTSTRAP | TAILWIND</label>
              <div className='grow bg-gray-800 rounded-full h-3'>
              <div 
                className='bg-gradient-to-r from-pink-300 to-pink-500 h-3 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'></div>
              </div>
            </div>
            <div className='flex items-center'>
              <label htmlFor='frameworks' className='w-3/12 pr-4'>REACT JS | ANGULAR JS</label>
              <div className='grow bg-gray-800 rounded-full h-3'>
              <div 
                className='bg-gradient-to-r from-pink-300 to-pink-500 h-3 rounded-full transform transition-transform duration-300 hover:scale-105 w-7/12'></div>
              </div>
            </div>
            <div className='flex items-center'>
              <label htmlFor='databases' className='w-3/12 pr-4'>MYSQL | MONGODB</label>
              <div className='grow bg-gray-800 rounded-full h-3'>
              <div 
                className='bg-gradient-to-r from-pink-300 to-pink-500 h-3 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12'></div>
              </div>
            </div>
            <div className='flex items-center'>
              <label htmlFor='design' className='w-3/12 pr-4'>FIGMA | CANVA</label>
              <div className='grow bg-gray-800 rounded-full h-3'>
              <div 
                className='bg-gradient-to-r from-pink-300 to-pink-500 h-3 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'></div>
              </div>
            </div>
            </div>  
            <div className='mt-12 flex justify-between text-center'>
                <div>
                  <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500'>
                    97%
                  </h3>
                  <p>Teamwork</p>
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500'>
                    90%
                  </h3>
                  <p>Communication</p>
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500'>
                    95%
                  </h3>
                  <p>Creativity</p>
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500'>
                    92%
                  </h3>
                  <p>Time Management</p>
                </div>
            </div>
            <div className='mt-20'>
              <h3 className='text-2xl font-bold mb-8 text-center'>CERTIFICATIONS</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-gray-800 p-5 rounded-lg'>
                  <h4 className='font-semibold text-lg mb-2'>Web Development Professional</h4>
                  <p className='text-sm text-gray-400'>Google Developer Certification</p>
                </div>
                <div className='bg-gray-800 p-5 rounded-lg'>
                  <h4 className='font-semibold text-lg mb-2'>Frontend React Specialist</h4>
                  <p className='text-sm text-gray-400'>Udemy Certification</p>
                </div>
                <div className='bg-gray-800 p-5 rounded-lg'>
                  <h4 className='font-semibold text-lg mb-2'>UX/UI Design Fundamentals</h4>
                  <p className='text-sm text-gray-400'>Coursera Certification</p>
                </div>
                <div className='bg-gray-800 p-5 rounded-lg'>
                  <h4 className='font-semibold text-lg mb-2'>Responsive Web Design</h4>
                  <p className='text-sm text-gray-400'>freeCodeCamp Certification</p>
                </div>
                <div className='bg-gray-800 p-5 rounded-lg'>
                  <h4 className='font-semibold text-lg mb-2'>Legacy Javascript Algorithms and Data Structures</h4>
                  <p className='text-sm text-gray-400'>freeCodeCamp Certification</p>
                </div>
                <div className='bg-gray-800 p-5 rounded-lg'>
                  <h4 className='font-semibold text-lg mb-2'>SEO I</h4>
                  <p className='text-sm text-gray-400'>Hubspot Certification</p>
                </div>
                <div className='bg-gray-800 p-5 rounded-lg'>
                  <h4 className='font-semibold text-lg mb-2'>SEO II</h4>
                  <p className='text-sm text-gray-400'>Hubspot Certification</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;