import { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaPaperPlane, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

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
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-6xl text-center mb-8">
        <motion.h2
          className="text-4xl font-bold mb-4 text-gray-200"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          CONTACT US
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-pink-500 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        ></motion.div>
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-gradient-to-br from-gray-900 to-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-700">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-gray-200">Contact Info</h3>
          <p className="text-gray-300 text-lg">We can collaborate and create something amazing together!</p>
          <div className="space-y-6">
            <motion.div
              className="group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <FaEnvelope className="text-pink-500 text-xl" />
              <a href="mailto:tanglaoalmina11@gmail.com" className="text-gray-200 hover:text-pink-400 transition text-lg">
                tanglaoalmina11@gmail.com
              </a>
            </motion.div>
            <motion.div
              className="group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <FaPhone className="text-pink-500 text-xl" />
              <a href="tel:+1234567890" className="text-gray-200 hover:text-pink-400 transition text-lg">
                +63 969 567 4925
              </a>
            </motion.div>
            <motion.div
              className="group flex items-center gap-4 p-4 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
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

        <motion.div
          className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 p-8 rounded-xl shadow-lg border border-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-gray-200 mb-6 text-center">Send a Message</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
            />
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Your Phone No"
              required
              className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              className="w-full col-span-1 sm:col-span-2 p-4 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500"
              rows="5"
            ></textarea>
            <motion.button
              type="submit"
              className={`w-full col-span-1 sm:col-span-2 py-4 px-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg shadow-lg flex items-center justify-center gap-2 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane className="text-lg" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
            {status && (
              <p className="text-center text-sm mt-2 text-gray-300 col-span-1 sm:col-span-2">{status}</p>
            )}
          </form>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 cursor-pointer after:content-['scroll_to_top'] after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 w-16 h-16 rounded-full border-4 border-pink-400 bg-black flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-36 group/button overflow-hidden active:scale-90 z-50 ${
          showBackToTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showBackToTop ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <svg className="w-3 fill-white delay-50 duration-200 group-hover/button:-translate-y-12" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </motion.button>
    </motion.div>
  );
}