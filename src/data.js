// Content transcribed from the Career Buddy LMS application overview.
// Items marked TODO need confirmation from the business before launch.

export const PLAY_STORE_URL = '#download' // TODO: replace with the real Google Play listing URL
export const CONTACT = { email: 'dev@royalstaffing.in', phone: '+91 96664 22240', address: null }

export const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How it Works', href: '/#how' },
  { label: 'Skill Up', href: '/#skillup' },
  { label: "Who It's For", href: '/#audience' },
  { label: 'Plans', href: '/#plans' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Policies', href: '/#policies' },
]

export const steps = [
  { n: '01', title: 'Learn', text: 'Build English, communication, technical and non-technical skills through structured Skill Up content.' },
  { n: '02', title: 'Build', text: 'Create a standout resume and see exactly how it scores against the job you want.' },
  { n: '03', title: 'Practice', text: 'Rehearse with AI mock interviews, group discussions and timed speaking, with real feedback.' },
  { n: '04', title: 'Apply', text: 'Move straight into real job applications, with your resume attached.' },
]

export const features = [
  { icon: 'resume', title: 'Resume Tools', text: 'Upload a resume and get an AI score against a target job description, or build one with a guided builder.' },
  { icon: 'mic', title: 'AI Mock Interview', text: 'Answer AI-generated questions by speaking or typing, then get a score and feedback.' },
  { icon: 'book', title: 'Skill Up', text: 'English, grammar, vocabulary, aptitude, plus role-by-role Tech Center and Non-IT Center courses.' },
  { icon: 'briefcase', title: 'Job Matching', text: 'Browse openings, view details and apply directly, with recommendations unlocked as your readiness grows.' },
  { icon: 'chat', title: 'Riya AI Assistant', text: 'Ask Riya anything by text or voice, and jump straight to the feature you need.' },
  { icon: 'cert', title: 'Certificates', text: 'Score 70 or above in learning content and download a personal PDF certificate.' },
]

export const resumeTools = [
  { title: 'Resume Parsing & ATS Scoring', text: 'Upload your resume and an optional job description. Get a score and feedback, with a history so you can track improvement.' },
  { title: 'Manual Resume Builder', text: 'An AI-assisted, guided builder that suggests structure and content for your target role, with an exportable result.' },
  { title: 'Create Resume Builder', text: 'A simple, free-form builder. Build and preview without an account, and save it later by logging in.' },
  { title: 'Career Paths Explorer', text: 'Explore IT and Non-IT departments and roles, open to everyone, to see what a role requires.' },
]

export const practice = [
  { title: 'AI Mock Interview', text: 'Simulated interview with AI questions, a camera-based identity check and a score afterwards. Unlocks at a strong ATS score.' },
  { title: 'Group Discussion', text: 'A live, AI-moderated group discussion that mirrors a real group interview round.' },
  { title: 'Just A Minute (JAM)', text: 'Timed, impromptu speaking practice with AI feedback, followed by a graded assessment.' },
  { title: 'Roleplay Workshop', text: 'AI-generated scenarios (storytelling, situational responses) to rehearse real communication.' },
]

export const skillUp = [
  'English Learning', 'Grammar', 'Vocabulary & Idioms', 'Speaking & Presentation',
  'Writing & Correspondence', 'Negotiation & Meetings', 'Interactive Roleplay', 'Aptitude', 'Tech',
]

export const departments = {
  tech: ['Development', 'DevOps & Infrastructure', 'Quality Assurance & Testing', 'Business Analysis', 'Product Management', 'Design / UX-UI'],
  nonIt: ['Recruitment', 'Customer Support', 'Other non-technical professional tracks'],
}

export const candidateBenefits = [
  'Build a resume that gets noticed',
  'Practice interviews with real feedback',
  'Learn the exact skills your target role needs',
  'Earn certificates for strong scores',
  'Apply to jobs directly from the app',
]

export const employerBenefits = [
  'Post jobs across IT and Non-IT categories',
  'Review applicants per job, with notes and status tracking',
  'Search registered candidates by skill, location and experience',
  'Export candidate results to a spreadsheet',
  'Manage your company profile at any time',
]

export const plans = [
  {
    name: 'Free', price: '₹0', period: 'Get started', cta: 'Start for Free',
    features: [
      'Skill Up: English, Vocabulary and Grammar',
      'Access to 1 practice Activity',
      '4 Resume Parsing & ATS Score analyses',
    ],
  },
  {
    name: 'Normal User', price: '₹499', period: '+ 18% GST / year', cta: 'Choose Normal', highlight: true,
    features: [
      'All practice Activities',
      'Full Skill Up: English, Aptitude, Tech Center, Non-IT Center, with certificates for 70+',
      'Candidate Dashboard',
      'Unlimited Resume Parsing / ATS analysis',
      'AI Mock Interviews (unlocked at a 90%+ ATS score)',
      'Up to 5 matched job recommendations (unlocked at a 90%+ mock interview score)',
    ],
  },
  {
    name: 'Pro User', price: '₹999', period: '+ 18% GST / year', cta: 'Go Pro',
    features: [
      'Everything in Normal',
      'Expanded AI Mock Interview formats: voice and non-voice, service-desk and technical',
      'Unlimited matched job recommendations',
      'Direct job applications with your resume automatically attached',
    ],
  },
]

export const faqs = [
  { q: 'Who is Career Buddy LMS for?', a: 'Job seekers, including students, fresh graduates, active applicants and experienced professionals, and employers who want to hire prepared candidates.' },
  { q: 'Do I need an account to explore?', a: 'No. You can browse the Career Paths Explorer and build and preview a resume without an account. Saving a resume and most other features need you to sign in.' },
  { q: 'How do the AI Mock Interview and job recommendations unlock?', a: 'On the Normal plan, the AI Mock Interview unlocks when your resume reaches a 90%+ ATS score, and job recommendations unlock when a mock interview scores 90%+.' },
  { q: 'How are payments handled?', a: 'Payments are processed by Razorpay, a secure third-party gateway. The app never directly handles your card, bank or UPI details.' },
  { q: 'Can I cancel or request a refund?', a: 'There is no in-app option for this yet. Please email dev@royalstaffing.in or call +91 96664 22240.' },
  { q: 'Are AI scores a guarantee of getting hired?', a: 'No. AI scoring is feedback and guidance to help you improve, not a guarantee of any outcome.' },
]
