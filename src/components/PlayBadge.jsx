import { PLAY_STORE_URL } from '../data'

export default function PlayBadge({ light = false }) {
  return (
    <a
      href={PLAY_STORE_URL}
      aria-label="Get it on Google Play"
      className={`inline-flex items-center gap-3 rounded-xl px-5 py-2.5 shadow-md2 transition hover:-translate-y-0.5 ${light ? 'bg-white text-navy' : 'bg-navy text-white'}`}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
        <path fill="#00d2ff" d="M3.6 2.2a1.6 1.6 0 0 0-.6 1.3v17c0 .5.2.9.6 1.3L13 12z" />
        <path fill="#ffc400" d="M16.2 8.8L13 12l3.2 3.2 3.9-2.2c1.1-.6 1.1-2.2 0-2.8z" />
        <path fill="#ff3a44" d="M13 12L3.6 21.8c.4.4 1 .4 1.7.1l10.9-6.7z" />
        <path fill="#00e676" d="M13 12l3.2-3.2L5.3 2.1c-.7-.4-1.3-.3-1.7.1z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wide opacity-80">Get it on</span>
        <span className="block text-base font-semibold">Google Play</span>
      </span>
    </a>
  )
}
