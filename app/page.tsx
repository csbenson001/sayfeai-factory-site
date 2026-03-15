"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ======================== NAV ======================== */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">
            SayfeAI <span className="nav-logo-accent">Factory</span>
          </a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#why">Why SayfeAI</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="mailto:hello@sayfe.ai">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* ======================== HERO ======================== */}
      <section className="hero section">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-bg-dots" />
          <div className="hero-bg-circle hero-bg-circle-1" />
          <div className="hero-bg-circle hero-bg-circle-2" />
          <div className="hero-bg-circle hero-bg-circle-3" />
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow">Part of the Sayfe.ai Ecosystem</p>

          <h1 className="hero-headline">
            Enterprise AI,
            <span className="hero-headline-accent">Engineered Safely</span>
          </h1>

          <p className="hero-sub">
            We build safe, reliable AI solutions with human-in-the-loop
            methodology. Custom agents, platforms, and automation you can
            trust — delivered in weeks, not months.
          </p>

          <div className="hero-cta-row">
            <a href="mailto:hello@sayfe.ai" className="btn-primary">
              Start Your Project
            </a>
            <a href="#process" className="btn-secondary">
              Our Process
            </a>
          </div>
        </div>
      </section>

      {/* =================== WHAT WE BUILD =================== */}
      <section className="build-section section" id="services">
        <div className="section-inner">
          <p className="section-label reveal">Services</p>
          <h2 className="section-title reveal">What We Build</h2>
          <p className="section-subtitle reveal">
            Enterprise-grade AI solutions with safety and reliability built
            into every layer.
          </p>

          <div className="build-grid">
            {/* Card 1 */}
            <div className="build-card reveal reveal-delay-1">
              <span className="build-card-number">01</span>
              <div className="build-card-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: 'var(--yale-blue)' }}
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="build-card-title">Custom AI Agents</h3>
              <p className="build-card-desc">
                Purpose-built autonomous agents with built-in safety
                guardrails and human oversight. Deployed at scale with
                continuous monitoring and fail-safe mechanisms.
              </p>
            </div>

            {/* Card 2 */}
            <div className="build-card reveal reveal-delay-2">
              <span className="build-card-number">02</span>
              <div className="build-card-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: 'var(--yale-blue)' }}
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
              </div>
              <h3 className="build-card-title">Enterprise Platforms</h3>
              <p className="build-card-desc">
                Scalable platforms engineered for millions of users with
                enterprise security, compliance, and AI-native architecture
                built for reliability.
              </p>
            </div>

            {/* Card 3 */}
            <div className="build-card reveal reveal-delay-3">
              <span className="build-card-number">03</span>
              <div className="build-card-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: 'var(--yale-blue)' }}
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <h3 className="build-card-title">Data &amp; Analytics Pipelines</h3>
              <p className="build-card-desc">
                Industrial-strength data infrastructure with ML-powered
                analytics. Real-time streaming meets rigorous data quality
                monitoring at petabyte scale.
              </p>
            </div>

            {/* Card 4 */}
            <div className="build-card reveal reveal-delay-4">
              <span className="build-card-number">04</span>
              <div className="build-card-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  style={{ color: 'var(--yale-blue)' }}
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="build-card-title">Intelligent Automation</h3>
              <p className="build-card-desc">
                Process automation that learns and adapts with
                human-in-the-loop validation. From document processing to
                supply chain orchestration with safety guardrails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="process-section section" id="process">
        <div className="section-inner">
          <p className="section-label reveal">Our Process</p>
          <h2 className="section-title reveal">
            From Discovery to Deployment
          </h2>
          <p className="section-subtitle reveal">
            A rigorous, safety-first methodology with human review gates at
            every phase.
          </p>

          <div className="process-timeline">
            {/* Step 1 */}
            <div className="process-step reveal reveal-delay-1">
              <span className="process-step-num">01</span>
              <div className="process-step-dot" />
              <h3 className="process-step-title">Discover</h3>
              <p className="process-step-desc">
                Deep-dive discovery, risk assessment, and requirements
                mapping. We identify every constraint, integration point,
                and safety consideration before design begins.
              </p>
              <span className="process-step-arrow" aria-hidden="true">
                &#x276F;
              </span>
            </div>

            {/* Step 2 */}
            <div className="process-step reveal reveal-delay-2">
              <span className="process-step-num">02</span>
              <div className="process-step-dot" />
              <h3 className="process-step-title">Design</h3>
              <p className="process-step-desc">
                Architecture design with safety constraints baked in.
                Guardrails, failure modes, and human oversight points are
                defined alongside system architecture.
              </p>
              <span className="process-step-arrow" aria-hidden="true">
                &#x276F;
              </span>
            </div>

            {/* Step 3 */}
            <div className="process-step reveal reveal-delay-3">
              <span className="process-step-num">03</span>
              <div className="process-step-dot" />
              <h3 className="process-step-title">Develop</h3>
              <p className="process-step-desc">
                AI-augmented development with continuous human oversight.
                Rapid iteration with quality gates, safety testing, and
                rigorous code review at every sprint.
              </p>
              <span className="process-step-arrow" aria-hidden="true">
                &#x276F;
              </span>
            </div>

            {/* Step 4 */}
            <div className="process-step reveal reveal-delay-4">
              <span className="process-step-num">04</span>
              <div className="process-step-dot" />
              <h3 className="process-step-title">Deploy</h3>
              <p className="process-step-desc">
                Monitored production launch with zero-downtime deployment.
                Full observability, alerting, and runbooks from day one.
                Ongoing optimization and scaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHY SAYFEAI ==================== */}
      <section className="stats-section section" id="why">
        <div className="section-inner">
          <p className="section-label reveal">Why SayfeAI</p>
          <h2 className="section-title reveal">Built for Trust</h2>

          <div className="stats-grid">
            <div className="stat-item reveal reveal-delay-1">
              <div className="stat-value">10x</div>
              <div className="stat-label">Faster Delivery</div>
            </div>
            <div className="stat-item reveal reveal-delay-2">
              <div className="stat-value">Enterprise</div>
              <div className="stat-label">Grade Safety</div>
            </div>
            <div className="stat-item reveal reveal-delay-3">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Uptime SLA</div>
            </div>
            <div className="stat-item reveal reveal-delay-4">
              <div className="stat-value">Human</div>
              <div className="stat-label">In-the-Loop</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="faq-section section" id="faq">
        <div className="section-inner">
          <p className="section-label reveal">FAQ</p>
          <h2 className="section-title reveal">Frequently Asked Questions</h2>

          <div className="faq-grid">
            <details className="faq-item reveal reveal-delay-1">
              <summary className="faq-question">
                What is SayfeAI Factory?
              </summary>
              <div className="faq-answer">
                <p>
                  SayfeAI Factory is an enterprise AI development company
                  focused on building safe, reliable, and production-grade AI
                  systems. Part of the Sayfe.ai ecosystem, we combine
                  AI-powered development with rigorous human oversight to
                  deliver custom AI solutions that enterprises can trust.
                </p>
              </div>
            </details>

            <details className="faq-item reveal reveal-delay-2">
              <summary className="faq-question">
                How is SayfeAI Factory different from other AI companies?
              </summary>
              <div className="faq-answer">
                <p>
                  Our safety-first approach sets us apart. We use
                  human-in-the-loop methodology at every stage, ensuring AI
                  systems are reliable, explainable, and aligned with
                  enterprise requirements. We deliver 10x faster than
                  traditional development while maintaining enterprise-grade
                  safety and compliance standards.
                </p>
              </div>
            </details>

            <details className="faq-item reveal reveal-delay-3">
              <summary className="faq-question">
                What does SayfeAI Factory build?
              </summary>
              <div className="faq-answer">
                <p>
                  We build four main categories of solutions: Custom AI Agents
                  with built-in safety guardrails, Enterprise AI Platforms for
                  millions of users, Data &amp; Analytics Pipelines with
                  ML-powered insights, and Intelligent Automation with
                  human-in-the-loop validation.
                </p>
              </div>
            </details>

            <details className="faq-item reveal reveal-delay-4">
              <summary className="faq-question">
                How fast can SayfeAI Factory deliver an AI project?
              </summary>
              <div className="faq-answer">
                <p>
                  We deliver enterprise AI solutions in weeks, not months. A
                  typical MVP is delivered in 4&ndash;8 weeks, with full
                  production systems in 8&ndash;16 weeks. Our AI-augmented
                  development teams enable 10x faster delivery without
                  compromising safety or quality.
                </p>
              </div>
            </details>

            <details className="faq-item reveal reveal-delay-1">
              <summary className="faq-question">
                How much does it cost to build an AI solution with SayfeAI
                Factory?
              </summary>
              <div className="faq-answer">
                <p>
                  Contact us for a custom quote tailored to your specific
                  requirements. We offer both fixed-scope engagements and
                  time-and-materials arrangements. Our AI-augmented
                  development approach typically results in 40&ndash;60% cost
                  savings compared to traditional development.
                </p>
              </div>
            </details>

            <details className="faq-item reveal reveal-delay-2">
              <summary className="faq-question">
                What industries does SayfeAI Factory serve?
              </summary>
              <div className="faq-answer">
                <p>
                  We serve financial services, healthcare, government, defense,
                  manufacturing, supply chain, energy, and enterprise software
                  sectors. Our safety-first approach is especially valued in
                  regulated industries where AI reliability is critical.
                </p>
              </div>
            </details>

            <details className="faq-item reveal reveal-delay-3">
              <summary className="faq-question">
                What is SayfeAI Factory&apos;s development process?
              </summary>
              <div className="faq-answer">
                <p>
                  We follow a four-phase methodology: Discover (requirements
                  and risk assessment), Design (architecture with safety
                  constraints), Develop (AI-augmented build with human
                  oversight), and Deploy (monitored production launch). Human
                  review gates are built into every phase.
                </p>
              </div>
            </details>

            <details className="faq-item reveal reveal-delay-4">
              <summary className="faq-question">
                What is SayfeAI Factory&apos;s approach to AI safety?
              </summary>
              <div className="faq-answer">
                <p>
                  Safety is in our DNA. We implement human-in-the-loop
                  validation at every critical decision point, build
                  comprehensive guardrails into AI agents, conduct rigorous
                  testing for edge cases and failure modes, and maintain full
                  audit trails. Our systems are designed to fail safely and
                  transparently.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="cta-section section" id="contact">
        <div className="cta-bg-pattern" aria-hidden="true" />
        <div className="cta-inner">
          <p className="section-label reveal" style={{ justifyContent: 'center' }}>
            Get Started
          </p>
          <h2 className="cta-headline reveal">
            Ready to build AI
            <br />
            <span className="cta-headline-accent">you can trust?</span>
          </h2>
          <p className="cta-sub reveal">
            Tell us what you&apos;re building. Our team will architect a
            safe, reliable solution and deliver a detailed proposal within
            48 hours.
          </p>
          <div className="reveal" style={{ textAlign: 'center' }}>
            <a href="mailto:hello@sayfe.ai" className="btn-primary">
              Get In Touch
            </a>
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
            <li><a href="#services">Services</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#why">Why SayfeAI</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="#faq">FAQ</a></li>
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
