import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
import SocialLinks from '../components/SocialLinks';
import { useScrollAnimation } from '../hooks/useCustom';
import { CONTACT_EMAIL } from '../utils/constants';
import { sendEmail } from '../utils/emailService';

const Contact = () => {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (status.type === 'error') {
      setStatus({ type: 'idle', message: '' });
    }
  };

  const validateForm = () => {
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) return 'Please enter your name.';
    if (!emailPattern.test(email)) return 'Please enter a valid email address.';
    if (message.length < 10) return 'Please write a message of at least 10 characters.';

    return '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus({ type: 'error', message: validationError });
      return;
    }

    setStatus({ type: 'sending', message: 'Preparing your email...' });
    const result = await sendEmail(formData);

    if (result.success) {
      setStatus({
        type: 'success',
        message: result.mode === 'mailto'
          ? 'Your email app should open with the message ready to send.'
          : 'Message sent successfully.',
      });
      setFormData({ name: '', email: '', message: '' });
      return;
    }

    setStatus({ type: 'error', message: `Please email me directly at ${CONTACT_EMAIL}.` });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={sectionRef} id="contact" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Feel free to reach out for collaboration, internship opportunities, or technical discussions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="group p-8 rounded-xl border border-dark-border/50 hover:border-neon-cyan/50 bg-dark-card/30 hover:bg-dark-card/60 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-neon-cyan/10 text-neon-cyan">
                <FiMail size={28} />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">Email</h3>
            </div>
            <p className="text-gray-400 mb-2 break-words">{CONTACT_EMAIL}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-neon-cyan hover:text-neon-blue transition-colors">
              Send an email
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group p-8 rounded-xl border border-dark-border/50 hover:border-neon-cyan/50 bg-dark-card/30 hover:bg-dark-card/60 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-neon-purple/10 text-neon-purple">
                <span className="text-2xl" aria-hidden="true">IN</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">Location</h3>
            </div>
            <p className="text-gray-400 mb-2">India</p>
            <p className="text-neon-purple/80">Available for remote opportunities</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="group p-8 rounded-xl border border-dark-border/50 hover:border-neon-cyan/50 bg-dark-card/30 hover:bg-dark-card/60 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-neon-blue/10 text-neon-blue">
                <span className="text-2xl" aria-hidden="true">CV</span>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">Available For</h3>
            </div>
            <p className="text-gray-400 mb-2">Internships, freelance, and full-time roles</p>
            <p className="text-neon-blue/80">Open to exciting opportunities</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="group relative overflow-hidden rounded-xl border border-dark-border/50 hover:border-neon-cyan/50 bg-dark-card/30 backdrop-blur transition-all p-8">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple rounded-xl opacity-0 group-hover:opacity-50 blur transition duration-300 -z-10"></div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <motion.div variants={itemVariants}>
                <label htmlFor="contact-name" className="block text-sm font-medium text-white mb-2">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-card/50 border border-dark-border/50 focus:border-neon-cyan/50 text-white placeholder-gray-500 focus:outline-none transition-all"
                  placeholder="Full name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="contact-email" className="block text-sm font-medium text-white mb-2">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-dark-card/50 border border-dark-border/50 focus:border-neon-cyan/50 text-white placeholder-gray-500 focus:outline-none transition-all"
                  placeholder="Enter your email"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="contact-message" className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-dark-card/50 border border-dark-border/50 focus:border-neon-cyan/50 text-white placeholder-gray-500 focus:outline-none transition-all resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </motion.div>

              {status.message && (
                <div
                  role="status"
                  className={`rounded-lg border px-4 py-3 text-sm ${
                    status.type === 'error'
                      ? 'border-red-400/40 bg-red-400/10 text-red-200'
                      : 'border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan'
                  }`}
                >
                  {status.message}
                </div>
              )}

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status.type === 'sending'}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-bg font-bold transition-all hover:shadow-lg hover:shadow-neon-cyan/50 disabled:opacity-50"
              >
                {status.type === 'sending' ? 'Preparing Email...' : 'Send Message'}
              </motion.button>
            </form>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Or connect with me on social media</p>
          <div className="flex justify-center">
            <SocialLinks />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
