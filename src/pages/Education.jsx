import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useCustom';

const educationTimeline = [
  {
    institution: 'Assam Valley English High School',
    period: '2019-2020',
    program: 'Matriculation (SEBA)',
    result: '60.5%',
  },
  {
    institution: 'Pragjyotish College, Assam',
    period: '2020-2022',
    program: 'Higher Secondary Education (AHSEC)',
    result: '76.4%',
  },
  {
    institution: 'Pragjyotish College, Assam',
    period: '2022-2025',
    program: 'Bachelor of Computer Applications (BCA)',
    result: 'CGPA: 8.23',
  },
  {
    institution: 'Chandigarh University',
    period: '2025-Present',
    program: 'Master of Computer Applications (AI & ML)',
    result: 'Current SGPA: 8.53',
  },
];

const Education = () => {
  const sectionRef = useRef(null);
  useScrollAnimation(sectionRef);

  return (
    <section ref={sectionRef} id="education" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="inline-flex items-center rounded-full border border-neon-cyan/20 bg-neon-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan mb-5">
            Education Timeline
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-['Poppins'] mb-4">
            <span className="gradient-text">Academic Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full"></div>
          <p className="mt-4 max-w-3xl text-gray-400">
            A clear progression from school foundations to an MCA specialization in Artificial Intelligence and Machine Learning.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-purple md:left-1/2 md:block"></div>

          <div className="space-y-8">
            {educationTimeline.map((item, index) => {
              const isRight = index % 2 === 1;

              return (
                <motion.article
                  key={`${item.institution}-${item.period}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.55 }}
                  className={`relative grid gap-6 md:grid-cols-2 md:items-center ${isRight ? '' : 'md:text-right'}`}
                >
                  <div className={`${isRight ? 'md:col-start-2' : ''}`}>
                    <div className="group relative overflow-hidden rounded-2xl border border-dark-border/50 bg-dark-card/45 p-6 backdrop-blur transition-all hover:border-neon-cyan/50">
                      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple opacity-0 blur transition duration-300 group-hover:opacity-40 -z-10"></div>
                      <div className={`mb-4 flex flex-wrap items-center gap-3 ${isRight ? '' : 'md:justify-end'}`}>
                        <span className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neon-cyan">
                          {item.period}
                        </span>
                        <span className="rounded-full border border-neon-purple/30 bg-neon-purple/10 px-3 py-1 text-xs font-semibold text-neon-purple">
                          {item.result}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.institution}</h3>
                      <p className="mt-2 text-lg font-medium text-neon-cyan">{item.program}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-neon-cyan bg-dark-bg shadow-lg shadow-neon-cyan/40 md:left-1/2 md:block"></div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
