// import PlayBadge from './PlayBadge' // TODO: re-enable with the Google Play listing
import { CONTACT } from '../data'

function Screen({ src, alt }) {
  return (
    <div className="w-48 overflow-hidden rounded-[24px] border-4 border-navy bg-white shadow-lg2 sm:w-56">
      <img src={src} alt={alt} className="block w-full" />
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-primary-soft via-white to-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/20 to-amber/20 blur-[120px] sm:h-[520px] sm:w-[520px]"
      />
      <div className="relative mx-auto grid min-h-[90vh] max-w-6xl items-center gap-12 px-4 pb-24 pt-32 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pt-36">
        <div className="reveal min-w-0 text-center lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary">Career-Readiness Platform</p>
          <h1 className="mb-5 text-4xl font-extrabold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            Your Career, <span className="text-primary">Ready.</span>
          </h1>
          <p className="mx-auto mb-9 max-w-xl text-base text-slate sm:text-lg lg:mx-0">
            Career Buddy LMS brings together resume-building, AI-powered interview practice and structured skill
            development in one platform, so job seekers can move from learning to applying with confidence, and
            employers can hire candidates who have already put in the work.
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <a href="#how" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-dark px-7 py-3.5 text-sm font-semibold text-white shadow-md2 transition-transform hover:scale-[1.03]">
              See How It Works
            </a>
            <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center justify-center rounded-full border border-line bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-primary hover:text-primary">
              Contact Us
            </a>
            {/* <PlayBadge /> */}
          </div>
        </div>

        <div className="reveal reveal-delay flex min-w-0 flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="sm:translate-y-6"><Screen src="/screens/dashboard.png" alt="Career Buddy candidate dashboard" /></div>
          <div className="sm:-translate-y-6"><Screen src="/screens/resume-ats.png" alt="Career Buddy resume analysis and ATS score" /></div>
        </div>
      </div>
    </section>
  )
}
