'use client'

import { motion } from 'framer-motion'
import { SectionTag } from '@/components/ui/SectionTag'
import { VisionCard } from '@/components/ui/VisionCard'

const visionCards = [
  {
    title: 'Mission',
    description:
      'Build practical, high-quality digital products that create measurable impact — no compromise on engineering or design.',
  },
  {
    title: 'Approach',
    description:
      'Domain research first. Prototypes fast. Scale thoughtfully. We move with urgency and build with discipline.',
  },
  {
    title: 'Who we serve',
    description:
      'Rural communities, urban professionals, clinics, NGOs, HMOs, schools — anyone underserved by today\u2019s tech ecosystem.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.08 },
  },
}

export function Vision() {
  return (
    <section
      id="vision"
      className="border-y border-[color:var(--border)] bg-bg2 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-[60px]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-7"
        >
          <motion.div variants={reveal}>
            <SectionTag>Vision</SectionTag>
          </motion.div>

          <motion.blockquote
            variants={reveal}
            className="border-l-[3px] border-accent pl-6 font-display text-[24px] font-bold leading-[1.3] text-text md:text-[28px]"
            style={{ letterSpacing: '-0.4px' }}
          >
            &ldquo;Technology should reach the people who need it{' '}
            <span className="text-accent">most</span> — not just those who can
            afford the premium tier.&rdquo;
          </motion.blockquote>

          <motion.p
            variants={reveal}
            className="max-w-[460px] text-[15px] leading-relaxed text-subtle"
          >
            We measure our work by the distance between the problem and the
            person it affects. The closer we get, the better we build.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-4"
        >
          {visionCards.map((v) => (
            <motion.div key={v.title} variants={reveal}>
              <VisionCard title={v.title} description={v.description} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
