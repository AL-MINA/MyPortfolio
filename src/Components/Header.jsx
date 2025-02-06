// import { Link } from 'react-router-dom';


  const Header  = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        <div className='t ext-2xl font bold hidden md:inline'>AT Web & Design</div>
          <div className='space-x-12'>
            <a href='#Home' className='text-pink-300 hover:text-gray-400'>Home</a>
            <a href='#About' className='text-pink-300 hover:text-gray-400'>About Me</a>
            <a href='#Resume' className='text-pink-300 hover:text-gray-400'>Resume</a>
            <a href='#Projects' className='text-pink-300 hover:text-gray-400'>Projects</a>
            <a href='#Contact' className='text-pink-300 hover:text-gray-400'>Contact</a>
        </div>
          <button className='bg-gradient-to-r from-pink-950 to-red-950 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact me</button>
      </div>
   </nav>
  )
}

export default Header;
