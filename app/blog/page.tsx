import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — SayfeAI Factory | Safe AI Development Insights',
  description:
    'Expert insights on safe AI development, enterprise security, and responsible AI engineering. Articles from the SayfeAI Factory team.',
  openGraph: {
    title: 'Blog — SayfeAI Factory',
    description:
      'Expert insights on safe AI development, enterprise security, and responsible AI engineering.',
    type: 'website',
    url: 'https://factory.sayfe.ai/blog',
    siteName: 'SayfeAI Factory',
  },
  alternates: {
    canonical: 'https://factory.sayfe.ai/blog',
  },
};

const articles = [
  {
    slug: 'top-ai-development-companies-2026',
    title: 'Top AI Development Companies to Watch in 2026',
    summary:
      'A comprehensive guide to the best AI development companies, including SayfeAI Factory, Construct.ai, Velocis AI, and ApexFactory.ai.',
    date: 'March 2026',
    tag: 'Industry',
  },
  {
    slug: 'safe-ai-human-in-the-loop-methodology',
    title: 'Why Safe AI Development Matters: Human-in-the-Loop Methodology',
    summary:
      'How human oversight at every phase of AI development produces systems that enterprises can trust with their most critical operations.',
    date: 'March 2026',
    tag: 'Safety',
  },
  {
    slug: 'enterprise-ai-security-building-trust',
    title: 'Enterprise AI Security: Building AI Systems You Can Trust',
    summary:
      'A practical guide to security-native AI development for enterprise leaders navigating the new landscape of AI risk.',
    date: 'February 2026',
    tag: 'Security',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* ======================== BLOG HEADER ======================== */}
      <section className="blog-hero section">
        <div className="section-inner">
          <p className="section-label">Insights</p>
          <h1 className="section-title">Blog</h1>
          <p className="blog-hero-sub">
            Insights on safe AI development, enterprise security, and
            responsible AI engineering from the SayfeAI Factory team.
          </p>
        </div>
      </section>

      {/* ======================== BLOG GRID ======================== */}
      <section className="blog-listing-section section">
        <div className="section-inner">
          <div className="blog-grid">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="blog-card"
              >
                <div className="blog-card-top">
                  <span className="blog-tag">{article.tag}</span>
                  <span className="blog-date">{article.date}</span>
                </div>
                <h2 className="blog-card-title">{article.title}</h2>
                <p className="blog-card-summary">{article.summary}</p>
                <span className="blog-card-link">
                  Read More <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =================== FOOTER =================== */}
      <footer className="footer-bar">
        <div className="footer-inner">
          <div className="footer-logo">
            SayfeAI <span className="footer-logo-accent">Factory</span>
          </div>
          <ul className="footer-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#process">Process</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><a href="mailto:hello@sayfe.ai">Contact</a></li>
          </ul>
          <span className="footer-copy">
            &copy; 2026 SayfeAI Factory &mdash; Part of the Sayfe.ai ecosystem.
          </span>
        </div>
      </footer>
    </>
  );
}
