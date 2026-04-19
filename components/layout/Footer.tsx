const links = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-8 md:flex-row md:justify-between md:px-8">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <span className="font-display text-[16px] font-bold text-text">
            Impact<span className="text-accent">Nexus</span>
          </span>
          <span className="text-[12px] text-muted">
            © 2025 Impact Nexus. All rights reserved.
          </span>
        </div>

        <nav className="flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[12px] text-muted transition-colors duration-200 hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
