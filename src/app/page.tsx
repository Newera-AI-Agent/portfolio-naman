import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const products = [
  {
    number: "01",
    name: "LND AI",
    type: "AI PRODUCT",
    description: "A product exploration focused on making useful intelligence feel close, clear, and practical.",
    destination: "Project destination not public",
    href: "#contact",
    tone: "acid",
  },
  {
    number: "02",
    name: "Talk AI Companion",
    type: "COMPANION EXPERIENCE",
    description: "An approachable AI companion concept for thinking out loud, getting unstuck, and moving ideas forward.",
    destination: "Project destination not public",
    href: "#contact",
    tone: "paper",
  },
  {
    number: "03",
    name: "NewEra AI Agent",
    type: "AGENT SYSTEM",
    description: "An agent experience built around turning intent into useful action, with a human in the loop.",
    destination: "Explore the work on GitHub",
    href: "https://github.com/namansoni78",
    tone: "blue",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true" className="arrow-icon">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Naman Soni home"><span>N/</span> NAMAN SONI</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-github" href="https://github.com/namansoni78" target="_blank" rel="noreferrer">GitHub <ArrowIcon /></a>
      </nav>

      <section id="top" className="hero page-section" aria-labelledby="hero-heading">
        <div className="hero-kicker"><span className="status-dot" aria-hidden="true" /> Independent creator / builder</div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 id="hero-heading">I build AI<br /><em>that feels useful.</em></h1>
            <p className="hero-intro">I&apos;m Naman Soni — creator of LND AI, Talk AI Companion, NewEra AI Agent, and other experiments at the edge of what software can do.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">See selected work <ArrowIcon /></a>
              <a className="text-link" href="https://github.com/namansoni78" target="_blank" rel="noreferrer">Open GitHub <ArrowIcon /></a>
            </div>
          </div>
          <div className="hero-mark" aria-label="A typographic mark representing ideas becoming useful tools">
            <div className="mark-frame"><span className="mark-top">IDEA</span><span className="mark-symbol">N<span>/</span></span><span className="mark-bottom">→ USEFUL</span></div>
            <p>Building in public<br />when there&apos;s something<br />worth sharing.</p>
          </div>
        </div>
        <div className="hero-footer"><span>Based wherever ideas get interesting</span><span>Scroll to explore <span aria-hidden="true">↓</span></span></div>
      </section>

      <section id="work" className="work-section page-section" aria-labelledby="work-heading">
        <div className="section-heading"><div><span className="eyebrow">Selected work / 2024—now</span><h2 id="work-heading">Things I&apos;ve<br /><em>been making.</em></h2></div><p className="section-note">A small index of products, companions, and agent experiments. Each one starts with a simple question: can this be more useful?</p></div>
        <div className="project-list">
          {products.map((product) => (
            <article className={`project-row tone-${product.tone}`} key={product.name}>
              <div className="project-number">{product.number}</div>
              <div className="project-main"><Badge variant={product.tone === "acid" ? "default" : "outline"}>{product.type}</Badge><h3>{product.name}</h3><p>{product.description}</p></div>
              <a className="project-link" href={product.href} target={product.href.startsWith("http") ? "_blank" : undefined} rel={product.href.startsWith("http") ? "noreferrer" : undefined}>{product.destination} <ArrowIcon /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section page-section" aria-labelledby="about-heading">
        <div className="about-label"><span className="eyebrow">A little context</span><span className="vertical-rule" aria-hidden="true" /></div>
        <div className="about-content"><h2 id="about-heading">Software should<br />meet people <em>where<br />they are.</em></h2><div className="about-copy"><p>I&apos;m interested in the gap between powerful technology and everyday life. My work is about closing that gap — building AI products and agent experiences that are thoughtful, direct, and genuinely helpful.</p><p>No grand claims here. Just a persistent curiosity about what happens when we give good tools a little more room to think.</p></div></div>
      </section>

      <section id="contact" className="contact-section page-section" aria-labelledby="contact-heading">
        <div className="contact-overline"><span className="eyebrow">Have an idea?</span><span>01 / 01</span></div>
        <h2 id="contact-heading">Let&apos;s make<br /><em>something useful.</em></h2>
        <p>The best way to reach me is through GitHub. Say hello, explore the code, or start a conversation there.</p>
        <a className="button button-dark" href="https://github.com/namansoni78" target="_blank" rel="noreferrer">Visit @namansoni78 <ArrowIcon /></a>
      </section>

      <footer className="site-footer"><span>© {new Date().getFullYear()} Naman Soni</span><span>Creator / Builder / Curious</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
