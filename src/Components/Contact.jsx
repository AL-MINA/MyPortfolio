import { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt, FaPaperPlane, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
          color: 0x733f0e,
          fields: [
            { name: "👤 First Name", value: `**${form.firstName}**`, inline: true },
            { name: "👤 Last Name", value: `**${form.lastName}**`, inline: true },
            { name: "📧 Email", value: `**${form.email}**`, inline: true },
            { name: "📞 Phone", value: `**${form.phone || "N/A"}**`, inline: true },
            { name: "📝 Message", value: `>>> ${form.message || "_No message provided._"}` },
          ],
          footer: { text: "Submitted via Contact Form" },
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      await fetch(
        "https://discordapp.com/api/webhooks/1338773984816140309/09zKbil5GZgDRPtfF1B93hktoDbqa7KivL_uZN1MpVJ4Seuaku-e-6Wee_NtqbZjp4oE",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(discordPayload),
        }
      );
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
      className="min-h-screen flex flex-col items-center justify-center bg-[#FAF5F1] text-[#733F0E] px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-6xl text-center mb-8">
        <motion.h2
          className="text-4xl font-bold mb-4 text-[#733F0E]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          CONTACT US
        </motion.h2>
        <motion.div
          className="w-24 h-1 bg-[#859CC5] mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#F7EACA] p-10 rounded-2xl shadow-lg border border-[#733F0E]">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-[#733F0E]">Contact Info</h3>
          <p className="text-[#859CC5] text-lg">
            We can collaborate and create something amazing together!
          </p>
          <div className="space-y-6">
            {[{
              icon: <FaEnvelope className="text-[#733F0E] text-xl" />,
              href: "mailto:tanglaoalmina11@gmail.com",
              label: "tanglaoalmina11@gmail.com",
              delay: 0.7,
            }, {
              icon: <FaPhone className="text-[#733F0E] text-xl" />,
              href: "tel:+1234567890",
              label: "+63 969 567 4925",
              delay: 0.8,
            }, {
              icon: <FaMapMarkedAlt className="text-[#733F0E] text-xl" />,
              label: "Angeles City, Philippines",
              delay: 0.9,
            }].map(({ icon, href, label, delay }, i) => (
              <motion.div
                key={i}
                className="group flex items-center gap-4 p-4 rounded-xl bg-[#FAF5F1] hover:bg-[#F7EACA] transition-all duration-300 border border-[#733F0E]"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay }}
              >
                {icon}
                {href ? (
                  <a
                    href={href}
                    className="text-[#733F0E] hover:text-[#859CC5] transition text-lg"
                  >
                    {label}
                  </a>
                ) : (
                  <span className="text-[#733F0E] text-lg">{label}</span>
                )}
              </motion.div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#733F0E]">
            <div className="flex gap-4">
              {[
                { href: "https://github.com/AL-MINA", icon: <FaGithub className="text-xl" /> },
                { href: "https://www.linkedin.com/in/almina-tanglao-55b83634a", icon: <FaLinkedin className="text-xl" /> },
              ].map(({ href, icon }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#733F0E] hover:text-[#859CC5] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bg-[#FAF5F1] p-8 rounded-xl shadow-md border border-[#733F0E]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-3xl font-bold text-[#733F0E] mb-6 text-center">Send a Message</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "firstName", placeholder: "First Name", required: true },
              { name: "lastName", placeholder: "Last Name", required: true },
              { name: "email", placeholder: "Your Email", type: "email", required: true },
              { name: "phone", placeholder: "Your Phone No", type: "tel", required: true },
            ].map(({ name, placeholder, type = "text", required }, i) => (
              <input
                key={i}
                name={name}
                type={type}
                value={form[name]}
                onChange={handleChange}
                placeholder={placeholder}
                required={required}
                className="w-full p-4 rounded-lg bg-[#F7EACA] border border-[#733F0E] text-[#733F0E] placeholder-[#859CC5] focus:ring-2 focus:ring-[#859CC5]"
              />
            ))}
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full col-span-1 sm:col-span-2 p-4 rounded-lg bg-[#F7EACA] border border-[#733F0E] text-[#733F0E] placeholder-[#859CC5] focus:ring-2 focus:ring-[#859CC5]"
            />
            <motion.button
              type="submit"
              className={`w-full col-span-1 sm:col-span-2 py-4 px-6 bg-[#733F0E] text-[#FAF5F1] rounded-lg shadow-md flex items-center justify-center gap-2 ${
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
              <p className="text-center text-sm mt-2 text-[#733F0E] col-span-1 sm:col-span-2">{status}</p>
            )}
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
