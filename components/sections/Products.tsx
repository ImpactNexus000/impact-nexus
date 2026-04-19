'use client'

import { motion } from 'framer-motion'
import { ProductCard } from '@/components/ui/ProductCard'
import { SectionTag } from '@/components/ui/SectionTag'
import { products } from '@/lib/products'

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

export function Products() {
  return (
    <section id="products" className="px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex max-w-2xl flex-col gap-5"
        >
          <motion.div variants={reveal}>
            <SectionTag>Products</SectionTag>
          </motion.div>
          <motion.h2
            variants={reveal}
            className="font-display text-[30px] font-bold leading-[1.1] text-text md:text-[36px]"
            style={{ letterSpacing: '-0.8px' }}
          >
            What we&apos;re building
          </motion.h2>
          <motion.p
            variants={reveal}
            className="text-[15px] leading-relaxed text-subtle"
          >
            Three products in motion — each solving a tangible problem for a
            specific community. Built with care, shipped with discipline.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-3"
        >
          {products.map((p) => (
            <motion.div key={p.name} variants={reveal}>
              <ProductCard
                name={p.name}
                description={p.description}
                status={p.status}
                linkLabel={p.linkLabel}
                href={p.href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
