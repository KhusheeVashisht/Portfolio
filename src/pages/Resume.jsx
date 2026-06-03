import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { useScrollAnimation } from '../hooks/useCustom';
import { ASSET_PATHS } from '../utils/constants';

const Resume = ({ portfolio }) => {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  const timeline = portfolio?.timeline || [];

  return (
    <section ref={sectionRef} id="resume" className="min-h-screen flex items-center py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-10">
          <div className="inline-flex items-center rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan mb-5">
            Resume
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4">
            <span className="gradient-text">Resume & Technical Progression</span>
          </h2>
          <div className="w-20 h-1 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue"></div>
          <p className="mt-4 max-w-3xl text-gray-400">
            Download the latest resume PDF and review the technical growth story reflected by the live GitHub repositories.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-dark-border/50 bg-dark-card/50 p-8"
          >
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-neon-cyan/30 bg-neon-cyan/10 text-neon-cyan">
              <FiDownload size={30} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Resume</h3>
            <p className="mb-6 text-gray-400">
              Download the latest recruiter-ready PDF resume for applications, interviews, and quick screening.
            </p>
            <a
              href={ASSET_PATHS.resume}
              download="Khushee_Vashisht_Resume.pdf"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-neon-cyan to-neon-blue px-6 py-3 font-bold text-dark-bg transition-transform hover:scale-[1.02]"
            >
              <FiDownload size={18} />
              Download Resume
            </a>
          </motion.div>

          <div className="md:col-span-2 space-y-4">
            {timeline.map((stage, index) => (
              <motion.article
                key={stage.stage}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-dark-border/50 bg-dark-card/40 p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <h3 className="text-xl font-bold text-white">{stage.stage}</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${stage.complete ? 'bg-neon-cyan/10 text-neon-cyan' : 'bg-dark-bg/60 text-gray-400'}`}>
                    {stage.complete ? 'Evidence found' : 'In progress'}
                  </span>
                </div>
                <p className="text-lg font-medium text-neon-cyan mb-2">{stage.title}</p>
                <p className="text-gray-300 leading-7 mb-4">{stage.description}</p>
                <div className="flex flex-wrap gap-2">
                  {(stage.evidence || []).map((evidence) => (
                    <span key={evidence} className="rounded-full border border-dark-border/60 bg-dark-bg/40 px-3 py-1 text-xs uppercase tracking-[0.18em] text-gray-400">
                      {evidence}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
