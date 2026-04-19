'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.1, staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[600px] w-[600px] -translate-x-1/2"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse, rgba(91,110,245,0.18) 0%, transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute right-[-120px] top-[60px] h-[360px] w-[360px]"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse, rgba(139,92,246,0.16) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-3xl flex-col items-start gap-7"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-accent"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent pulse-dot" />
            Product-Driven Tech Company
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display font-extrabold leading-[1.05] text-text"
            style={{
              fontSize: 'clamp(32px, 7vw, 58px)',
              letterSpacing: '-1.5px',
            }}
          >
            Building digital solutions that{' '}
            <span className="gradient-text">actually matter</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-[480px] text-[16px] leading-relaxed text-subtle"
          >
            Impact Nexus is a product studio turning complex real-world problems
            into elegant, scalable digital tools — built for the people who need
            them most.
          </motion.p>

          <motion.div
            variants={item}
            className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            <Button variant="primary" href="#products">
              View Products →
            </Button>
            <Button variant="ghost" href="#contact">
              Get in Touch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
