import { Link, Navigate, useParams } from 'react-router-dom'
import { policies, POLICY_UPDATED, SUPPORT_EMAIL } from './policies'
import Icon from '../components/Icon'

function Mail() {
  return <a className="font-semibold text-primary underline" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
}

export default function PolicyPage({ slug }) {
  const p = policies[slug]
  if (!p) return <Navigate to="/" replace />

  return (
    <div className="container-x max-w-3xl pb-20 pt-28 sm:pt-32">
      <Link to="/" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
        <Icon name="chevron" className="h-4 w-4 rotate-90" /> Back to home
      </Link>
      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">{p.title}</h1>
      <p className="mt-2 text-sm text-slate">Last updated: {POLICY_UPDATED}</p>

      <div className="mt-8 space-y-8 text-slate">
        {p.intro && <p>{p.intro}</p>}
        {p.sections.map((s) => (
          <section key={s.h}>
            <h2 className="text-xl font-bold text-navy">{s.h}</h2>
            {(s.text || s.email) && (
              <p className="mt-2">
                {s.text} {s.email && <Mail />}
                {s.email && s.text && !s.after && '.'}
              </p>
            )}
            {s.list && (
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                {s.list.map((li) =>
                  Array.isArray(li) ? (
                    <li key={li[0]}><strong className="text-navy">{li[0]}</strong> – {li[1]}</li>
                  ) : (
                    <li key={li}>{li}</li>
                  ),
                )}
              </ul>
            )}
            {s.after && <p className="mt-3">{s.after}</p>}
          </section>
        ))}
      </div>
    </div>
  )
}
