import { motion } from 'framer-motion';
import { CONTACT_EMAIL } from '../utils/constants';

const policies = [
  {
    id: 'privacy',
    title: 'Privacy Policy',
    description: 'This portfolio does not collect personal data through a backend database. Contact form messages use your email client through a mailto fallback unless an email service is configured later.',
    points: ['GitHub project data is loaded from public GitHub APIs.', 'No payment, authentication, or tracking accounts are created here.', `For privacy questions, contact ${CONTACT_EMAIL}.`],
  },
  {
    id: 'terms',
    title: 'Terms of Service',
    description: 'This website is a personal portfolio for reviewing projects, education, skills, and contact information.',
    points: ['Project links open external websites such as GitHub or approved live demos.', 'Resume and portfolio content are provided for recruitment and collaboration review.', 'Please do not copy portfolio content without permission.'],
  },
];

const LegalSections = () => (
  <section className="py-16 relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2">
        {policies.map((policy, index) => (
          <motion.article
            key={policy.id}
            id={policy.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl border border-dark-border/50 bg-dark-card/35 p-6"
          >
            <h2 className="mb-3 text-2xl font-bold text-white">{policy.title}</h2>
            <p className="mb-4 text-sm leading-6 text-gray-400">{policy.description}</p>
            <ul className="space-y-2 text-sm text-gray-300">
              {policy.points.map((point) => (
                <li key={point} className="border-l border-neon-cyan/40 pl-3">{point}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default LegalSections;
