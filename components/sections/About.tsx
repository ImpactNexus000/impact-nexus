'use client'

import { motion } from 'framer-motion'
import { PillarCard } from '@/components/ui/PillarCard'
import { SectionTag } from '@/components/ui/SectionTag'
import { StatCard } from '@/components/ui/StatCard'

const stats = [
  { value: '3', label: 'Products in Pipeline' },
  { value: '1', label: 'Live Products' },
  { value: 'AI', label: 'First Approach' },
  { value: 'UK', label: 'Headquartered' },
]

const pillars = [
  {
    icon: '⚡',
    title: 'Product-first thinking',
    description: 'Every line of code exists to serve a user need.',
  },
  {
    icon: '🔬',
    title: 'Domain expertise',
    description: 'We build in verticals we understand: health, payments, logistics.',
  },
  {
    icon: '🌍',
    title: 'Built for scale',
    description: 'Designed to reach underserved communities, not just early adopters.',
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
    transition: { delayChildren: 0.1, staggerChildren: 0.1 },
  },
}

export function About() {
  return (
    <section
      id="about"
      className="border-y border-[color:var(--border)] bg-bg2 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-[60px]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={reveal}>
            <SectionTag>About</SectionTag>
          </motion.div>
          <motion.h2
            variants={reveal}
            className="font-display text-[30px] font-bold leading-[1.1] text-text md:text-[36px]"
            style={{ letterSpacing: '-0.8px' }}
          >
            We don&apos;t build features. We solve problems.
          </motion.h2>
          <motion.p
            variants={reveal}
            className="max-w-[460px] text-[15px] leading-relaxed text-subtle"
          >
            Impact Nexus is a small team of product engineers shipping tools for
            healthcare, fintech, and commerce — with a bias toward the
            communities and workflows that mainstream tech ignores.
          </motion.p>

          <motion.div
            variants={reveal}
            className="mt-2 grid grid-cols-2 gap-3"
          >
            {stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-4"
        >
          {pillars.map((p) => (
            <motion.div key={p.title} variants={reveal}>
              <PillarCard icon={p.icon} title={p.title} description={p.description} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
