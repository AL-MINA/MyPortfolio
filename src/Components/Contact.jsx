import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   message: ''
 });

 const handleChange = (e) => {
   const { name, value } = e.target;
   setFormData(prevState => ({
     ...prevState,
     [name]: value
   }));
 };

 const handleSubmit = (e) => {
   e.preventDefault();
   console.log('Form submitted:', formData);
   setFormData({
     name: '',
     email: '',
     message: ''
   });
 };

 return (
   <motion.div 
     className='bg-black text-white pt-56 py-20 pb-48' 
     id='contact'
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
         Contact Me
       </motion.h2>
       
       <div className='flex flex-col md:flex-row items-center md:space-x-12'>
         <motion.div 
           className='flex-1'
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           viewport={{ once: true }}
         >
           <h3 className='text-2xl mb-4'>Let's Talk</h3>
           <p>I'm open to discussing web development projects or partnership opportunities</p>
           <div className='mb-4 mt-8'>
             <FaEnvelope className='inline-block text-pink-300 mr-2' />
             <a href='mailto:tanglaoalmina11@gmail.com' className='hover:underline'>tanglaoalmina11@gmail.com</a>
           </div>
           <div className='mb-4 mt-8'>
             <FaPhone className='inline-block text-pink-300 mr-2' />
             <span>+63 969 5674 925</span>
           </div>
           <div className='mb-4 mt-8'>
             <FaMapMarkedAlt className='inline-block text-pink-300 mr-2' />
             <span>Holy Family Village Phase 2, Angeles City, Pampanga, Philippines</span>
           </div>
         </motion.div>
         
         <motion.div 
           className='flex-1 w-full'
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           viewport={{ once: true }}
         >
           <form onSubmit={handleSubmit} className='space-y-4'>
             <div>
               <label htmlFor='name' className='block mb-2'>Your Name</label>
               <input 
                 type='text'
                 id='name'
                 name='name'
                 value={formData.name}
                 onChange={handleChange}
                 className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-pink-300'
                 placeholder='Enter Your Name'
                 required
               />
             </div>
             <div>
               <label htmlFor='email' className='block mb-2'>Email</label>
               <input 
                 type='email'
                 id='email'
                 name='email'
                 value={formData.email}
                 onChange={handleChange}
                 className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-pink-300'
                 placeholder='Enter Your Email'
                 required
               />
             </div>
             <div>
               <label htmlFor='message' className='block mb-2'>Message</label>
               <textarea 
                 id='message'
                 name='message'
                 value={formData.message}
                 onChange={handleChange}
                 className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-pink-300'
                 rows='5'
                 placeholder='Enter Your Message'
                 required
               />
             </div>
             <button 
               type='submit'
               className='bg-gradient-to-r from-pink-950 to-red-950 text-white w-full md:w-auto transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'
             >
               Send
             </button>
           </form>
         </motion.div>
       </div>
     </div>
   </motion.div>
 );
}

export default Contact;
