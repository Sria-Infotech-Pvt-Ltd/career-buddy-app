import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../data'
import Icon from './Icon'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-transparent'}`}>
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Career Buddy home">
          <img src="/logo.png" alt="" className="h-9 w-9 rounded-lg object-contain" />
          <span className="text-lg font-semibold text-navy">Career<b className="font-extrabold text-primary">Buddy</b></span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link key={l.href} to={l.href} className="text-sm font-medium text-slate transition hover:text-primary">{l.label}</Link>
          ))}
        </nav>

        {/* TODO: re-enable once the app is live on Google Play
        <div className="hidden lg:block">
          <Link to="/#download" className="btn btn-primary">Download App</Link>
        </div>
        */}

        <button
          className="rounded-lg p-2 text-navy lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </div>

      {open && (
        <nav className="container-x flex flex-col gap-1 pb-4 lg:hidden" aria-label="Mobile">
          {navLinks.map((l) => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-navy hover:bg-primary-soft">
              {l.label}
            </Link>
          ))}
          {/* TODO: re-enable once the app is live on Google Play
          <Link to="/#download" onClick={() => setOpen(false)} className="btn btn-primary mt-2">Download App</Link>
          */}
        </nav>
      )}
    </header>
  )
}
