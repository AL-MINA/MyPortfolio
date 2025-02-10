import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, 
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
        {
          to_name: 'Almina',
          from_name: formData.from_name,
          reply_to: formData.reply_to,
          message: formData.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('Message sent successfully:', response);
          setSubmitStatus('success');
          setFormData({ from_name: '', reply_to: '', message: '' });
        },
        (error) => {
          console.error('Sending Error:', error);
          setSubmitStatus('error');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 3000);
      });
  };

  return (
    <motion.div
      className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-black px-6 py-16'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      id='contact'
    >
      <div className='w-full max-w-6xl text-center mb-8'>
        <h2 className='text-5xl font-bold text-gray-200'>CONTACT ME</h2>
        <div className='w-24 h-1 bg-pink-500 mx-auto rounded-full'></div>
      </div>
      <div className='w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-700'>
        <motion.div
          className='space-y-8'
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className='text-3xl font-bold text-gray-200'>
            Contact Info
          </h3>
          <p className='text-gray-300 text-lg'>
            Let's collaborate and create something amazing together!
          </p>
          <div className='space-y-6'>
            <motion.div 
              className='group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300'
              whileHover={{ x: 10 }}
            >
              <div className='p-3 bg-pink-500/20 rounded-lg group-hover:bg-pink-500/30 transition-colors'>
                <FaEnvelope className='text-pink-500 text-xl' />
              </div>
              <a 
                href='mailto:tanglaoalmina11@gmail.com' 
                className='text-gray-200 hover:text-pink-400 transition text-lg'
              >
                tanglaoalmina11@gmail.com
              </a>
            </motion.div>

            <motion.div 
              className='group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300'
              whileHover={{ x: 10 }}
            >
              <div className='p-3 bg-pink-500/20 rounded-lg group-hover:bg-pink-500/30 transition-colors'>
                <FaPhone className='text-pink-500 text-xl' />
              </div>
              <a 
                href='tel:+639695674925' 
                className='text-gray-200 hover:text-pink-400 transition text-lg'
              >
                +63 969 5674 925
              </a>
            </motion.div>

            <motion.div 
              className='group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300'
              whileHover={{ x: 10 }}
            >
              <div className='p-3 bg-pink-500/20 rounded-lg group-hover:bg-pink-500/30 transition-colors'>
                <FaMapMarkedAlt className='text-pink-500 text-xl' />
              </div>
              <span className='text-gray-200 text-lg'>
                Angeles City, Pampanga, Philippines
              </span>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className='relative bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-8 rounded-xl shadow-lg border border-gray-700'
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className='text-3xl font-bold text-gray-200 mb-6 text-center'>
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className='space-y-5'>
            <div className='space-y-2'>
              <input
                type='text'
                name='from_name'
                value={formData.from_name}
                onChange={handleChange}
                className='w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 placeholder-gray-400 text-white transition-all duration-300'
                placeholder='Enter your Name'
                required
              />
            </div>
            
            <div className='space-y-2'>
              <input
                type='email'
                name='reply_to'
                value={formData.reply_to}
                onChange={handleChange}
                className='w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 placeholder-gray-400 text-white transition-all duration-300'
                placeholder='Enter a valid email address'
                required
              />
            </div>

            <div className='space-y-2'>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                className='w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 placeholder-gray-400 text-white transition-all duration-300'
                rows='5'
                placeholder='Your Message'
                required
              />
            </div>

            <motion.button
              type='submit'
              className={`w-full py-4 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg shadow-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 font-semibold flex items-center justify-center gap-2 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane className='text-lg' />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>

            {submitStatus && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center p-3 rounded-lg ${
                  submitStatus === 'success'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {submitStatus === 'success'
                  ? 'Message sent successfully!'
                  : 'Failed to send message. Please try again.'}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;