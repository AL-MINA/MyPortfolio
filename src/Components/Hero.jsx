import HeroImage from '../assets/user-image.jpg'

const Hero = () => {
  return (
     <div className='bg-black text-white text-center pt-56 py-20 pb-48 relative overflow-hidden' id='about'>
 
      <div className='absolute inset-0 bg-gradient-to-br from-pink-900/20 to-blue-900/20 opacity-50 z-0'></div>
      
      <div className='absolute -top-20 -right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-2xl animate-pulse z-0'></div>
      <div className='absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-2xl animate-pulse z-0'></div>
      
      <div className='relative z-10'>
        <img 
          src={HeroImage} 
          alt='' 
          className='mx-auto mb-8 w-48 h-48 rounded-full object-cover border-4 border-pink-300/50 shadow-2xl transform transition-transform duration-300 hover:scale-105 hover:rotate-6'
        />
        <h1 className='text-4xl font-bold mb-4'>
          I'm {" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500'>
            Almina Tanglao
          </span>
          , Graphic Designer | Frontend Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300 max-w-2xl mx-auto px-4'>
          I specialize in building modern and responsive web applications with a passion for creating intuitive and visually stunning digital experiences.
        </p>
        <div className='mt-10 space-x-4 flex justify-center'>
          <button className='flex items-center gap-2 bg-gradient-to-r from-pink-300 to-pink-500 text-white transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full shadow-lg hover:shadow-xl'>
            Contact With Me →
          </button>
          <button className='flex items-center gap-2 border-2 border-pink-300 text-pink-300 transform transition-transform duration-300 hover:scale-105 px-6 py-3 rounded-full hover:bg-pink-300/10'>
            Download Resume ↓
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero