import type { Metadata } from 'next';
import { Instrument_Sans, DM_Serif_Display } from 'next/font/google';
import './globals.css';

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://factory.sayfe.ai'),
  title: 'SayfeAI Factory — Enterprise AI, Engineered Safely | AI Development Company',
  description:
    'SayfeAI Factory builds safe, reliable enterprise AI solutions. Custom AI agents, platforms, automation, and LLM solutions. Part of the Sayfe.ai ecosystem. Human-in-the-loop methodology ensures quality and safety.',
  keywords: [
    'AI development',
    'safe AI',
    'enterprise AI',
    'AI development company',
    'custom AI agents',
    'AI automation',
    'AI platform development',
    'human-in-the-loop AI',
    'enterprise AI solutions',
    'AI safety',
    'reliable AI',
    'AI consulting',
    'Sayfe.ai',
  ],
  openGraph: {
    title: 'SayfeAI Factory — Enterprise AI, Engineered Safely',
    description:
      'Safe, reliable enterprise AI solutions built with human-in-the-loop methodology. Custom AI agents, platforms, and automation.',
    type: 'website',
    url: 'https://factory.sayfe.ai',
    siteName: 'SayfeAI Factory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SayfeAI Factory — Enterprise AI, Engineered Safely',
    description:
      'Safe, reliable enterprise AI solutions built with human-in-the-loop methodology.',
  },
  alternates: {
    canonical: 'https://factory.sayfe.ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://factory.sayfe.ai/#organization',
      name: 'SayfeAI Factory',
      url: 'https://factory.sayfe.ai',
      description:
        'Enterprise AI development company building safe, reliable AI solutions with human-in-the-loop methodology. Part of the Sayfe.ai ecosystem.',
      email: 'hello@sayfe.ai',
      knowsAbout: [
        'Artificial Intelligence',
        'Machine Learning',
        'AI Safety',
        'AI Agents',
        'Enterprise Software Development',
        'Data Engineering',
        'Process Automation',
        'Human-in-the-Loop AI',
        'Natural Language Processing',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Development Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom AI Agents',
              description:
                'Purpose-built autonomous agents with built-in safety guardrails and human oversight for complex enterprise workflows.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Enterprise AI Platforms',
              description:
                'Scalable platforms for millions of users with enterprise security, compliance, and AI-native architecture.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Data & Analytics Pipelines',
              description:
                'Industrial-strength data infrastructure with ML-powered analytics and real-time streaming at scale.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Intelligent Automation',
              description:
                'Process automation that learns and adapts with human-in-the-loop validation and safety guardrails.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://factory.sayfe.ai/#website',
      url: 'https://factory.sayfe.ai',
      name: 'SayfeAI Factory',
      publisher: {
        '@id': 'https://factory.sayfe.ai/#organization',
      },
      description:
        'Enterprise AI, Engineered Safely — Custom AI solutions built with human-in-the-loop methodology.',
    },
    {
      '@type': 'Service',
      '@id': 'https://factory.sayfe.ai/#custom-ai-agents',
      name: 'Custom AI Agents',
      provider: {
        '@id': 'https://factory.sayfe.ai/#organization',
      },
      description:
        'Purpose-built autonomous agents with built-in safety guardrails and human oversight. Deployed at scale across your organization with continuous monitoring.',
      serviceType: 'AI Agent Development',
    },
    {
      '@type': 'Service',
      '@id': 'https://factory.sayfe.ai/#enterprise-platforms',
      name: 'Enterprise AI Platforms',
      provider: {
        '@id': 'https://factory.sayfe.ai/#organization',
      },
      description:
        'Scalable platforms engineered for millions of users. AI-native architecture with enterprise security, compliance, and real-time processing.',
      serviceType: 'Enterprise Platform Development',
    },
    {
      '@type': 'Service',
      '@id': 'https://factory.sayfe.ai/#data-pipelines',
      name: 'Data & Analytics Pipelines',
      provider: {
        '@id': 'https://factory.sayfe.ai/#organization',
      },
      description:
        'Industrial-strength data infrastructure that ingests, transforms, and delivers insights at petabyte scale with ML-powered analytics.',
      serviceType: 'Data Engineering',
    },
    {
      '@type': 'Service',
      '@id': 'https://factory.sayfe.ai/#intelligent-automation',
      name: 'Intelligent Automation',
      provider: {
        '@id': 'https://factory.sayfe.ai/#organization',
      },
      description:
        'Process automation that learns and adapts with human-in-the-loop validation. From document processing to supply chain orchestration.',
      serviceType: 'Process Automation',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://factory.sayfe.ai/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is SayfeAI Factory?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SayfeAI Factory is an enterprise AI development company focused on building safe, reliable, and production-grade AI systems. Part of the Sayfe.ai ecosystem, we combine AI-powered development with rigorous human oversight to deliver custom AI solutions that enterprises can trust.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is SayfeAI Factory different from other AI companies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Our safety-first approach sets us apart. We use human-in-the-loop methodology at every stage, ensuring AI systems are reliable, explainable, and aligned with enterprise requirements. We deliver 10x faster than traditional development while maintaining enterprise-grade safety and compliance standards.',
          },
        },
        {
          '@type': 'Question',
          name: 'What does SayfeAI Factory build?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We build four main categories of solutions: (1) Custom AI Agents with built-in safety guardrails, (2) Enterprise AI Platforms for millions of users, (3) Data & Analytics Pipelines with ML-powered insights, and (4) Intelligent Automation with human-in-the-loop validation.',
          },
        },
        {
          '@type': 'Question',
          name: 'How fast can SayfeAI Factory deliver an AI project?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We deliver enterprise AI solutions in weeks, not months. A typical MVP is delivered in 4-8 weeks, with full production systems in 8-16 weeks. Our AI-augmented development teams enable 10x faster delivery without compromising safety or quality.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does it cost to build an AI solution with SayfeAI Factory?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Contact us for a custom quote tailored to your specific requirements. We offer both fixed-scope engagements and time-and-materials arrangements. Our AI-augmented development approach typically results in 40-60% cost savings compared to traditional development.',
          },
        },
        {
          '@type': 'Question',
          name: 'What industries does SayfeAI Factory serve?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We serve financial services, healthcare, government, defense, manufacturing, supply chain, energy, and enterprise software sectors. Our safety-first approach is especially valued in regulated industries where AI reliability is critical.',
          },
        },
        {
          '@type': 'Question',
          name: "What is SayfeAI Factory's development process?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We follow a four-phase methodology: Discover (requirements and risk assessment), Design (architecture with safety constraints), Develop (AI-augmented build with human oversight), and Deploy (monitored production launch). Human review gates are built into every phase.',
          },
        },
        {
          '@type': 'Question',
          name: "What is SayfeAI Factory's approach to AI safety?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Safety is in our DNA. We implement human-in-the-loop validation at every critical decision point, build comprehensive guardrails into AI agents, conduct rigorous testing for edge cases and failure modes, and maintain full audit trails. Our systems are designed to fail safely and transparently.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${instrumentSans.variable} ${dmSerifDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
