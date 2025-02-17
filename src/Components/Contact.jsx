import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaPaperPlane, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    const discordPayload = {
      username: "Contact Form Bot",
      avatar_url: "https://cdn-icons-png.flaticon.com/512/2111/2111375.png", 
      embeds: [
        {
          title: "📩 New Contact Form Submission",
          color: 0xFF007F, 
          fields: [
            { name: "👤 First Name", value: `**${form.firstName}**`, inline: true },
            { name: "👤 Last Name", value: `**${form.lastName}**`, inline: true },
            { name: "📧 Email", value: `**${form.email}**`, inline: true },
            { name: "📞 Phone", value: `**${form.phone || "N/A"}**`, inline: true },
            { name: "📝 Message", value: `>>> ${form.message || "_No message provided._"}` },
          ],
          footer: {
            text: "Submitted via Contact Form",
          },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      await fetch("https://discordapp.com/api/webhooks/1338773984816140309/09zKbil5GZgDRPtfF1B93hktoDbqa7KivL_uZN1MpVJ4Seuaku-e-6Wee_NtqbZjp4oE", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(discordPayload),
      });
      setStatus("Message sent successfully!");
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black to-gray-900 text-black px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="w-full max-w-6xl text-center mb-8">
        <h2 className="text-5xl font-bold text-gray-200">CONTACT US</h2>
        <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-700">
        <motion.div className="space-y-8">
          <h3 className="text-3xl font-bold text-gray-200">Contact Info</h3>
          <p className="text-gray-300 text-lg">We can collaborate and create something amazing together!</p>
          <div className="space-y-6">
            <motion.div className="group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300">
              <FaEnvelope className="text-pink-500 text-xl" />
              <a href="mailto:tanglaoalmina11@gmail.com" className="text-gray-200 hover:text-pink-400 transition text-lg">
                tanglaoalmina11@gmail.com
              </a>
            </motion.div>
            <motion.div className="group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300">
              <FaPhone className="text-pink-500 text-xl" />
              <a href="tel:+1234567890" className="text-gray-200 hover:text-pink-400 transition text-lg">
                +63 969 567 4925
              </a>
            </motion.div>
            <motion.div className="group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300">
              <FaMapMarkedAlt className="text-pink-500 text-xl" />
              <span className="text-gray-200 text-lg">Angeles City, Philippines</span>
            </motion.div>
          </div>
          
          <div className="pt-4 border-t border-gray-700">
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/AL-MINA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-200 hover:text-pink-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/almina-tanglao-55b83634a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-200 hover:text-pink-400 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
            </div>
          </div>
        </motion.div>
        <motion.div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-8 rounded-xl shadow-lg border border-gray-700">
          <h3 className="text-3xl font-bold text-gray-200 mb-6 text-center">Send a Message</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500" />
            <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500" />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your Email" required className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500" />
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="Your Phone No" required className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" required className="w-full col-span-1 sm:col-span-2 p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500" rows="5"></textarea>
            <motion.button type="submit" className={`w-full col-span-1 sm:col-span-2 py-4 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg shadow-lg flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`} disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <FaPaperPlane className="text-lg" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
            {status && <p className="text-center text-sm mt-2 text-gray-300 col-span-1 sm:col-span-2">{status}</p>}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
