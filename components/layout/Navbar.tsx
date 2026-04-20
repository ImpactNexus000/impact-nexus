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
    <>
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
      </header>

      <div
        className={cn(
          'fixed inset-0 z-[60] flex flex-col bg-bg2 transition-transform duration-300 md:hidden',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
        aria-hidden={!open}
      >
        <div
          className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px]"
          aria-hidden="true"
          style={{
            background:
              'radial-gradient(ellipse, rgba(91,110,245,0.22) 0%, transparent 70%)',
          }}
        />

        <div className="relative flex items-center justify-between border-b border-[color:var(--border)] px-5 py-4">
          <Logo />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="relative flex h-10 w-10 items-center justify-center rounded-md border border-[color:var(--border)] bg-surface/60 text-text transition-colors duration-200 hover:border-[color:var(--border-hover)]"
          >
            <span className="absolute block h-[1.5px] w-5 rotate-45 bg-text" />
            <span className="absolute block h-[1.5px] w-5 -rotate-45 bg-text" />
          </button>
        </div>

        <nav className="relative flex flex-col gap-2 p-4">
          <div
            className="px-3 pb-2 pt-1 text-[11px] font-semibold uppercase text-muted"
            style={{ letterSpacing: '1.8px' }}
          >
            Menu
          </div>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between rounded-[12px] border border-[color:var(--border)] bg-surface px-5 py-4 transition-colors duration-200 hover:border-accent/30 hover:bg-accent/10"
            >
              <span className="font-display text-[18px] font-semibold text-text transition-colors duration-200 group-hover:text-accent">
                {link.label}
              </span>
              <span
                aria-hidden="true"
                className="text-[18px] text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:text-accent"
              >
                →
              </span>
            </a>
          ))}
        </nav>

        <div className="relative mt-auto flex flex-col gap-4 border-t border-[color:var(--border)] bg-bg2 p-5">
          <Button
            variant="primary"
            href="#contact"
            onClick={() => setOpen(false)}
            className="w-full"
          >
            Get in Touch →
          </Button>
          <a
            href="mailto:impactnexus000@gmail.com"
            className="text-center text-[13px] text-muted transition-colors duration-200 hover:text-text"
          >
            impactnexus000@gmail.com
          </a>
        </div>
      </div>
    </>
  )
}
