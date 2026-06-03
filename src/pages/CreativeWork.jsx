import { motion } from 'framer-motion';
const CreativeWork = ({ portfolio }) => {
  const philosophy = portfolio?.philosophy || [];

  return (
    <section id="philosophy" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-10">
          <div className="inline-flex items-center rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan mb-5">
            Development Philosophy
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4">
            <span className="gradient-text">How the portfolio is built</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue"></div>
          <p className="mt-4 max-w-3xl text-gray-400">
            This section explains the product mindset behind the portfolio: why some projects are pinned, why some experiments stay visible, and how the site stays self-updating from GitHub.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {philosophy.map((point, index) => (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-dark-border/50 bg-dark-card/40 p-6 backdrop-blur"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue font-bold text-dark-bg">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-gray-300 leading-7">{point.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeWork;
