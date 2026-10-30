// Policy content, structured after the Royal HRMS reference (Privacy, Terms, Account & Data Deletion)
// and written from the facts in the Career Buddy LMS application overview.
// NOTE: have legal counsel review before publishing to the Play Store.

export const POLICY_UPDATED = '30 October 2026'
export const SUPPORT_EMAIL = 'dev@royalstaffing.in'

export const policyCards = [
  { to: '/privacy_policy', title: 'Privacy Policy', icon: 'shield', text: 'What data Career Buddy LMS collects, why, and how it is used.' },
  { to: '/data_deletion', title: 'Account & Data Deletion', icon: 'trash', text: 'How to request deletion of your account and the personal data tied to it.' },
  { to: '/terms_conditions', title: 'Terms & Conditions', icon: 'doc', text: 'The rules that govern acceptable use of the Career Buddy LMS application.' },
]

export const policies = {
  privacy_policy: {
    title: 'Privacy Policy',
    intro:
      'This policy explains what information Career Buddy LMS collects when you create a candidate or employer account, why it is collected, and how it is used.',
    sections: [
      {
        h: 'Information We Collect',
        list: [
          ['Account and contact details', 'name, email address and phone number, verified with a one-time code before your account is created.'],
          ['Candidate profile information', 'education history, work experience, skills, salary expectations and location preferences, used to build your profile and match you to relevant jobs.'],
          ['Resume files', 'resumes you upload or build, and the ATS scores and feedback generated for them.'],
          ['Identity-verification details', 'government identity details collected during candidate onboarding, used only for identity confirmation.'],
          ['Camera and microphone data', 'during an AI Mock Interview the device camera is used to verify identity and monitor session integrity, and your spoken or typed answers are evaluated to produce a score and feedback.'],
          ['Employer details', 'company name, industry, company contact person, company registration or tax details and an optional logo.'],
          ['Learning and activity data', 'your progress, scores and certificates across Skill Up and practice activities.'],
          ['Payment records', 'a record of your subscription payments. Payments are processed by Razorpay, so we never directly handle your card, bank or UPI details.'],
        ],
      },
      {
        h: 'How We Use Your Information',
        list: [
          'To create and manage your account and to sign you in.',
          'To score your resume, evaluate practice and interview responses, and unlock features based on your results.',
          'To match candidates with job openings and let employers review applicants.',
          'To process subscriptions and maintain your payment history.',
        ],
      },
      {
        h: 'How Information Is Shared',
        list: [
          'With employers, when you apply to a job or when your profile appears in an employer’s candidate search.',
          'With service providers who help us host and operate the platform, including AI services that evaluate resumes and responses, and the Razorpay payment gateway.',
          'When required for legal reasons.',
        ],
        after: 'We do not sell your personal data to third parties.',
      },
      {
        h: 'Your Choices',
        text: 'You can review the details you provided at registration, and employers can update their company profile at any time. For anything you cannot change yourself, or to ask about your data, contact us at',
        email: true,
      },
    ],
  },

  terms_conditions: {
    title: 'Terms and Conditions',
    intro:
      'These terms govern your use of the Career Buddy LMS application. By creating an account or signing in, you agree to use the app only for its intended purpose of career preparation and hiring.',
    sections: [
      {
        h: 'Accounts',
        list: [
          'You must provide accurate information and keep your login details confidential.',
          'Candidate and employer accounts are separate and each may use only the features meant for it.',
        ],
      },
      {
        h: 'Acceptable Use',
        text: 'You agree not to:',
        list: [
          'Use the App for any unlawful purpose, or submit false or misleading resumes, identity details or job postings.',
          'Attempt to access another user’s account or data without authorization.',
          'Attempt to bypass identity checks or interview-integrity monitoring.',
          'Reverse-engineer, decompile, or tamper with the App.',
        ],
      },
      {
        h: 'AI Scores and Feedback',
        text: 'Resume scores, interview scores and other AI-generated feedback are guidance to help you improve. They are not a guarantee of any hiring or career outcome.',
      },
      {
        h: 'Subscriptions and Payments',
        text: 'Paid plans are billed per year at the price shown in the App, plus applicable GST, and are processed securely by Razorpay. The App currently has no in-app option to cancel or request a refund. Please contact us using the details below for such requests.',
      },
      {
        h: 'Availability',
        text: 'The App is provided on an “as is” and “as available” basis. We work to keep it reliable but do not guarantee uninterrupted access.',
      },
      {
        h: 'Changes to These Terms',
        text: 'We may update these terms from time to time. Continued use of the App after a change means you accept the revised terms.',
      },
      {
        h: 'Contact',
        text: 'Questions about these terms can be sent to',
        email: true,
      },
    ],
  },

  data_deletion: {
    title: 'Account & Data Deletion Policy',
    sections: [
      {
        h: 'Who Can Request Deletion',
        text: 'Any individual with a Career Buddy LMS account, whether a candidate or an employer.',
      },
      {
        h: 'How to Request Deletion',
        text: 'Send a deletion request to',
        email: true,
        after: 'from the email address registered to your account. We will verify the request and act on it within 30 days. The App has no in-app account deletion option at present.',
      },
      {
        h: 'What Gets Deleted',
        list: [
          'Your profile and registration details',
          'Uploaded and built resumes, and resume scores',
          'Identity-verification details',
          'Learning progress, activity scores and certificates',
        ],
      },
      {
        h: 'What May Be Retained',
        list: [
          'Payment and transaction records needed for accounting and tax purposes',
          'Records needed to resolve disputes or enforce our agreements',
          'Aggregated or anonymized data that no longer identifies you',
          'Information we are legally required to retain',
        ],
      },
    ],
  },
}
