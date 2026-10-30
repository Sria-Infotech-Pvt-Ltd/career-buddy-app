import { useState } from 'react'
import { Link } from 'react-router-dom'
import { policyCards } from '../pages/policies'
import {
  steps, features, resumeTools, practice, skillUp, departments,
  candidateBenefits, employerBenefits, plans, faqs, CONTACT,
} from '../data'
import Icon from './Icon'
// import PlayBadge from './PlayBadge' // TODO: re-enable with the Download section
import ScreenGallery from './ScreenGallery'

function Heading({ eyebrow, title, text, center = true }) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h2">{title}</h2>
      {text && <p className="lead">{text}</p>}
    </div>
  )
}

export function HowItWorks() {
  return (
    <section id="how" className="section bg-tint">
      <div className="container-x">
        <Heading eyebrow="How it works" title="From learning to landing the job" text="Everything you do feeds the next step. A scored resume unlocks mock interviews, and a strong interview unlocks job recommendations." />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="card">
              <span className="text-3xl font-extrabold text-amber">{s.n}</span>
              <h3 className="mt-2 text-lg font-bold text-navy">{s.title}</h3>
              <p className="mt-2 text-sm text-slate">{s.text}</p>
            </li>
          ))}
        </ol>
        <ScreenGallery />
      </div>
    </section>
  )
}

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container-x">
        <Heading eyebrow="Features" title="Everything you need, in one app" text="No separate resume tool, interview app and learning platform. Career Buddy LMS connects all three." />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <article key={f.title} className="card">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary"><Icon name={f.icon} /></span>
              <h3 className="mt-4 text-lg font-bold text-navy">{f.title}</h3>
              <p className="mt-2 text-sm text-slate">{f.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-extrabold text-navy">Four resume tools</h3>
            <p className="mt-2 text-slate">See exactly how your resume stacks up against the job you want.</p>
            <ul className="mt-6 space-y-4">
              {resumeTools.map((r) => (
                <li key={r.title} className="rounded-xl border border-line p-4">
                  <p className="font-semibold text-navy">{r.title}</p>
                  <p className="mt-1 text-sm text-slate">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-navy">Interview preparation</h3>
            <p className="mt-2 text-slate">Real-time, AI-evaluated practice that gives actual feedback, not scripted Q&amp;A.</p>
            <ul className="mt-6 space-y-4">
              {practice.map((r) => (
                <li key={r.title} className="rounded-xl border border-line p-4">
                  <p className="font-semibold text-navy">{r.title}</p>
                  <p className="mt-1 text-sm text-slate">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SkillUp() {
  return (
    <section id="skillup" className="section bg-navy text-white">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow !bg-white/10 !text-amber">Skill Up</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Choose a department. Pick your role. Start learning.</h2>
          <p className="mt-4 text-white/70">Learning organised the way a career actually is: department, then role, then the specific courses that role needs.</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {skillUp.map((s) => (
            <span key={s} className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-white/90">{s}</span>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h3 className="text-xl font-bold text-amber">Tech Center</h3>
            <p className="mt-1 text-sm text-white/70">IT career paths, with roles and courses inside each department.</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {departments.tech.map((d) => <li key={d} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm">{d}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <h3 className="text-xl font-bold text-amber">Non-IT Center</h3>
            <p className="mt-1 text-sm text-white/70">The same structure for non-technical professional tracks.</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {departments.nonIt.map((d) => <li key={d} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm">{d}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function Benefits({ title, text, items, tone }) {
  return (
    <div className={`rounded-3xl p-8 ${tone === 'primary' ? 'bg-primary text-white' : 'border border-line bg-white'}`}>
      <h3 className={`text-2xl font-extrabold ${tone === 'primary' ? '' : 'text-navy'}`}>{title}</h3>
      <p className={`mt-2 text-sm ${tone === 'primary' ? 'text-white/80' : 'text-slate'}`}>{text}</p>
      <ul className="mt-6 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex gap-3 text-sm">
            <Icon name="check" className={`mt-0.5 h-5 w-5 shrink-0 ${tone === 'primary' ? 'text-amber' : 'text-primary'}`} />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Audience() {
  return (
    <section id="audience" className="section">
      <div className="container-x">
        <Heading eyebrow="Two experiences, one platform" title="For candidates and for employers" text="Separate logins, dashboards and menus, built around what each side needs." />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Benefits tone="primary" title="For Candidates" text="Students, graduates, active job seekers and professionals." items={candidateBenefits} />
          <Benefits title="For Employers" text="Recruiters and hiring teams who want to find candidates who are already job-ready." items={employerBenefits} />
        </div>
      </div>
    </section>
  )
}

export function Plans() {
  return (
    <section id="plans" className="section bg-tint">
      <div className="container-x">
        <Heading eyebrow="Plans" title="Simple annual plans" text="Prices are in Indian rupees. Paid plans last 1 year and are processed securely through Razorpay." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <article key={p.name} className={`relative flex flex-col rounded-3xl bg-white p-8 ${p.highlight ? 'border-2 border-primary shadow-lg2' : 'border border-line shadow-sm'}`}>
              {p.highlight && <span className="absolute -top-3 left-8 rounded-full bg-amber px-3 py-1 text-xs font-bold text-navy">Most popular</span>}
              <h3 className="text-lg font-bold text-navy">{p.name}</h3>
              <p className="mt-4 text-4xl font-extrabold text-navy">{p.price}</p>
              <p className="text-sm text-slate">{p.period}</p>
              <ul className="my-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-ink">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {/* TODO: re-enable plan CTAs once the app is live on Google Play
              <Link to="/#download" className={`btn ${p.highlight ? 'btn-primary' : 'btn-ghost'}`}>{p.cta}</Link>
              */}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section">
      <div className="container-x max-w-3xl">
        <Heading eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mt-10 divide-y divide-line rounded-2xl border border-line">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-navy"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                {f.q}
                <Icon name="chevron" className={`h-5 w-5 shrink-0 text-primary transition ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && <p className="px-5 pb-5 text-sm text-slate">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PoliciesSection() {
  return (
    <section id="policies" className="section bg-tint">
      <div className="container-x">
        <Heading eyebrow="Our Policies" title="Clear terms, plainly stated." />
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {policyCards.map((c) => (
            <Link key={c.to} to={c.to} className="card block">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary"><Icon name={c.icon} /></span>
              <h3 className="mt-4 text-lg font-bold text-navy">{c.title}</h3>
              <p className="mt-2 text-sm text-slate">{c.text}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* TODO: re-enable once the app is live on Google Play
export function Download() {
  return (
    <section id="download" className="px-4 pb-16 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-primary-dark p-8 text-center text-white sm:p-14">
        <img src="/riya.png" alt="" className="mx-auto h-24 w-24 object-contain" />
        <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Build your skills. Build your resume. Get hired.</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">Download Career Buddy LMS and start for free.</p>
        <div className="mt-8 flex justify-center"><PlayBadge light /></div>
      </div>
    </section>
  )
}
*/

export function Footer() {
  const hasContact = CONTACT.email || CONTACT.phone || CONTACT.address
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-x grid gap-10 py-14 md:grid-cols-3">
        <div>
          <img src="/logo-light.png" alt="Career Buddy" className="h-10 w-auto" />
          <p className="mt-4 max-w-xs text-sm">An all-in-one career-readiness platform for job seekers, connecting employers to candidates who are already prepared.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[['Features', '/#features'], ['How it Works', '/#how'], ['Skill Up', '/#skillup'], ['Plans', '/#plans'], ['FAQ', '/#faq']].map(([l, h]) => (
              <li key={h}><Link to={h} className="hover:text-amber">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          {hasContact ? (
            <ul className="mt-4 space-y-2 text-sm">
              {CONTACT.email && <li><a href={`mailto:${CONTACT.email}`} className="hover:text-amber">{CONTACT.email}</a></li>}
              {CONTACT.phone && <li><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-amber">{CONTACT.phone}</a></li>}
              {CONTACT.address && <li>{CONTACT.address}</li>}
            </ul>
          ) : (
            <p className="mt-4 text-sm">Support contact details coming soon.</p>
          )}
        </div>
      </div>
      <div className="container-x flex flex-wrap justify-center gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-xs">
        {policyCards.map((c) => <Link key={c.to} to={c.to} className="hover:text-amber">{c.title}</Link>)}
      </div>
      <div className="py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Career Buddy LMS. All rights reserved.
      </div>
    </footer>
  )
}
