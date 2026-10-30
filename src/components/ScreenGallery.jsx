import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

const screens = [
  { src: '/screens/resume-ats.png', alt: 'Career Buddy resume analysis and ATS score screen', caption: 'Resume Analysis & ATS Score' },
  { src: '/screens/dashboard.png', alt: 'Career Buddy candidate dashboard', caption: 'Candidate Dashboard' },
  { src: '/screens/activities.png', alt: 'Career Buddy English activities screen', caption: 'English Activities' },
  { src: '/screens/employer-login.png', alt: 'Career Buddy employer login screen', caption: 'Employer Login' },
  { src: '/screens/recruiter-portal.png', alt: 'Career Buddy recruiter portal screen', caption: 'Recruiter Portal' },
]

export default function ScreenGallery() {
  const ref = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const update = () => {
    const el = ref.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }

  useEffect(update, [])

  const scrollBy = (dir) => ref.current?.scrollBy({ left: dir * 260, behavior: 'smooth' })

  return (
    <div className="mt-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="eyebrow">Product Gallery</span>
        <h3 className="h2">A look inside Career Buddy.</h3>
        <p className="lead">A selection of real screens from the application.</p>
      </div>

      <div className="relative mt-10">
        {[['Previous screen', -1, atStart, 'left-1 sm:-left-5', 'rotate-90'], ['Next screen', 1, atEnd, 'right-1 sm:-right-5', '-rotate-90']].map(([label, dir, disabled, pos, rot]) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            disabled={disabled}
            onClick={() => scrollBy(dir)}
            className={`absolute top-[40%] z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-white text-navy shadow-md2 transition hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-30 sm:grid ${pos}`}
          >
            <Icon name="chevron" className={`h-5 w-5 ${rot}`} />
          </button>
        ))}

        <ul
          ref={ref}
          onScroll={update}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-1 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {screens.map((s) => (
            <li key={s.src} className="w-[220px] shrink-0 snap-center sm:w-[240px]">
              <div className="overflow-hidden rounded-[2rem] border-[6px] border-navy bg-white shadow-lg2">
                <img src={s.src} alt={s.alt} loading="lazy" className="block h-auto w-full" />
              </div>
              <p className="mt-4 text-center text-sm font-semibold text-navy">{s.caption}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
