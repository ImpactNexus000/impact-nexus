'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { SectionTag } from '@/components/ui/SectionTag'

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

const channels = [
  {
    label: 'Email',
    value: 'impactnexus000@gmail.com',
    href: 'mailto:impactnexus000@gmail.com',
  },
  {
    label: 'Based in',
    value: 'United Kingdom',
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[-140px] h-[520px] w-[520px] -translate-x-1/2"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse, rgba(91,110,245,0.14) 0%, transparent 70%)',
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-[60px]"
      >
        <div className="flex flex-col gap-6">
          <motion.div variants={reveal}>
            <SectionTag>Contact</SectionTag>
          </motion.div>

          <motion.h2
            variants={reveal}
            className="font-display text-[32px] font-bold leading-[1.1] text-text md:text-[40px]"
            style={{ letterSpacing: '-0.8px' }}
          >
            Let&apos;s build something that{' '}
            <span className="gradient-text">actually matters</span>.
          </motion.h2>

          <motion.p
            variants={reveal}
            className="max-w-[480px] text-[16px] leading-relaxed text-subtle"
          >
            Working on a problem that touches real people? We partner with
            founders, clinics, NGOs, and teams who care about shipping useful
            things. Tell us what you&apos;re building.
          </motion.p>

          <motion.div variants={reveal} className="mt-2 flex flex-wrap gap-3">
            <Button variant="primary" href="mailto:impactnexus000@gmail.com">
              Start a conversation →
            </Button>
            <Button
              variant="ghost"
              href="https://mhirascollection.com"
              target="_blank"
              rel="noreferrer"
            >
              See our work
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={reveal}
          className="rounded-[14px] border border-[color:var(--border)] bg-surface p-6 md:p-8"
        >
          <ul className="flex flex-col divide-y divide-[color:var(--border)]">
            {channels.map((c) => (
              <li key={c.label} className="flex flex-col gap-1 py-4 first:pt-0 last:pb-0">
                <span
                  className="text-[11px] font-semibold uppercase text-muted"
                  style={{ letterSpacing: '1.8px' }}
                >
                  {c.label}
                </span>
                {c.href ? (
                  <a
                    href={c.href}
                    className="font-display text-[20px] font-medium text-text transition-colors duration-200 hover:text-accent"
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="font-display text-[20px] font-medium text-text">
                    {c.value}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}
