'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Vision', href: '#vision' },
]

function Logo() {
  return (
    <a href="#" className="font-display text-[20px] font-bold tracking-tight text-text">
      Impact<span className="text-accent">Nexus</span>
    </a>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-200',
        scrolled ? 'border-b border-[color:var(--border)]' : 'border-b border-transparent',
      )}
      style={{ backgroundColor: 'rgba(6,7,13,0.9)' }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-subtle transition-colors duration-200 hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" href="#contact">
            Get in Touch →
          </Button>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] text-text md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <div className="flex flex-col gap-[5px]">
            <span
              className={cn(
                'block h-[1.5px] w-5 bg-text transition-transform duration-200',
                open && 'translate-y-[6.5px] rotate-45',
              )}
            />
            <span
              className={cn(
                'block h-[1.5px] w-5 bg-text transition-opacity duration-200',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'block h-[1.5px] w-5 bg-text transition-transform duration-200',
                open && '-translate-y-[6.5px] -rotate-45',
              )}
            />
          </div>
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 top-[65px] z-40 flex flex-col gap-6 border-t border-[color:var(--border)] px-6 py-8 transition-transform duration-300 md:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        style={{ backgroundColor: 'rgba(6,7,13,0.98)' }}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="font-display text-[24px] font-semibold text-text"
          >
            {link.label}
          </a>
        ))}
        <div className="mt-4">
          <Button variant="primary" href="#contact" onClick={() => setOpen(false)}>
            Get in Touch →
          </Button>
        </div>
      </div>
    </header>
  )
}
