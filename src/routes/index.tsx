import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { meta } from "@/components/site";
import { useTranslation } from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => meta("Emilia Bravo | Software Engineer & Data Builder", "Full-stack software, grounded AI systems, and public-health data pipelines by Emilia Bravo."),
  component: Home,
});

const softwareRows = [
  { id: "fry-goehring", name: "Fry Goehring Event Logistics", stack: "Next.js · TypeScript · PostgreSQL · Vertex AI" },
  { id: "teresita", name: "Teresita HR Platform", stack: "React · Next.js · Supabase · PostgreSQL RLS" },
  { id: "pouncepath", name: "PouncePath CS Advising Engine", stack: "FastAPI · PostgreSQL/pgvector · RAG Guardrails" },
  { id: "herecho", name: "Voice-Only AI Messaging (HerEcho)", stack: "React · TypeScript · Web Speech API (1st Place)" },
] as const;

// Order matches t.home.dataItems; ids match the cards on /data.
const dataIds = ["counties-beat-the-odds", "spark-cluster", "floreo-analytics", "strava-telemetry"] as const;

function Home() {
  const { t } = useTranslation();
  const [mode, setMode] = useState<"software" | "data">("software");
  const focus = {
    software: {
      label: "01 / Software",
      eyebrow: t.home.softwareEyebrow,
      title: t.home.softwareTitle,
      stats: [["70+", t.home.stats.events], ["~2,100", t.home.stats.registrations], ["~80%", t.home.stats.manualOps], ["1st", t.home.stats.hackHers]],
      items: softwareRows,
      href: "/cs" as const,
    },
    data: {
      label: "02 / Data",
      eyebrow: t.home.dataEyebrow,
      title: t.home.dataTitle,
      stats: [["229k", t.home.stats.cdcRows], ["3,143", t.home.stats.counties], ["2-node", t.home.stats.spark], ["20%", t.home.stats.diligence]],
      items: t.home.dataItems.map((name, index) => ({ id: dataIds[index], name, stack: "Python · SQL · PySpark · Public Health Data" })),
      href: "/data" as const,
    },
  } as const;
  const current = focus[mode];

  return <main className="scrapbook-page">
    <section className="scrapboard">
      <div className="hero-scene">
        <article className="paper-panel hero-paper">
          <div className="paper-tape" />
          <div className="paper-meta"><span>FILE 00 / INTRO</span><span>UPDATED 2026</span></div>
          <p className="hero-kicker">{t.home.kicker}</p>
          <h1>{t.home.titleLineOne}<br /><em>{t.home.titleLineTwo}</em><br />{t.home.titleLineThree}</h1>
          <p className="hero-copy">{t.home.description}</p>
          <div className="hero-actions"><a href="#projects" className="lime-button">View projects <ArrowRight size={16} /></a><a href="mailto:emiliaabravo19@gmail.com?subject=Resume%20request" className="ink-link">Resume <ArrowUpRight size={15} /></a><a href="https://github.com/emiibra" target="_blank" rel="noreferrer" className="ink-link">GitHub <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/emibra" target="_blank" rel="noreferrer" className="ink-link">LinkedIn <ArrowUpRight size={15} /></a><Link to="/contact" className="ink-link">Say hello <ArrowUpRight size={15} /></Link></div>
          <Link to="/cs" hash="fry-goehring" className="hero-proof"><span>PROOF OF WORK</span><strong>70+ events · 2,100+ registrations <ArrowUpRight size={16} /></strong><small>Fry Goehring event platform · in production</small></Link>
          <div className="paper-footer"><span>ATLANTA, GA</span><span>B.S. CS @ GSU (3.48 GPA)</span><span>Floreo Labs / PART-TIME</span></div>
        </article>
        <aside className="desktop-card music-card">
          <div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span>currently-building.txt</span><span>···</span></div>
          <p className="tiny-label">ACTIVE WORK &amp; RESEARCH</p>
          <ul className="build-list"><li><strong>Floreo Labs</strong><span>Part-Time Full-Stack SWE Intern</span><small>React · Next.js · Python · Supabase</small></li><li><strong>PouncePath CS</strong><span>Grounded RAG Advising &amp; Schedule Solver</span><small>FastAPI · pgvector</small></li><li><strong>Spatial Oncology ML</strong><span>CDC Cancer Screening Pipeline</span><small>3,143 U.S. Counties</small></li></ul>
        </aside>
        <div className="desktop-note"><span>awards / 2025</span><p><strong>01</strong> HackHers · 1st place<br /><strong>02</strong> Truist CTF · 2nd place</p></div>
      </div>
    </section>

    <section id="projects" className="project-console">
      <div className="console-top"><div><span className="tiny-label">02 / PROJECTS · PORTFOLIO / INDEX</span><h2>Selected projects</h2></div><span className="console-count">Select a project for details, demos &amp; code</span></div>
      <div className="project-tabs" role="tablist" aria-label="Project categories">{(Object.keys(focus) as Array<keyof typeof focus>).map((key) => <button key={key} role="tab" aria-selected={mode === key} className={mode === key ? "active" : ""} onClick={() => setMode(key)}>{focus[key].label}</button>)}</div>
      <div className="console-paper" key={mode}>
        <div className="project-feature"><span className="tiny-label">{current.eyebrow}</span><h3>{current.title}</h3><div className="project-stats">{current.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><Link to={current.href} className="ink-link">Browse {mode} work <ArrowUpRight size={15} /></Link></div>
        <div className="project-list">{current.items.map((item, index) => <Link key={item.name} to={current.href} hash={item.id} className="project-row" aria-label={`${item.name}: view project details`}><span>0{index + 1}</span><strong className="project-row-copy">{item.name}<small className="project-row-stack">{item.stack}</small></strong><ArrowUpRight size={16} /></Link>)}</div>
      </div>
    </section>

    <section className="scrap-lower" aria-label="Portfolio sections">
      <Link to="/cs" className="section-tile skills-sheet paper-panel"><span className="section-tile-index">01 / BUILD</span><span className="tiny-label">TOOLS I USE</span><h2>Software, data,<br /><em>and everything between.</em></h2><div className="skill-list"><span>Python</span><span>TypeScript</span><span>React</span><span>Next.js</span><span>SQL</span><span>PySpark</span><span>Supabase</span><span>scikit-learn</span></div><span className="section-tile-link">Explore projects <ArrowUpRight size={15} /></span></Link>
      <Link to="/about" className="section-tile about-note"><span className="section-tile-index">03 / ABOUT</span><span className="tiny-label">A LITTLE CONTEXT</span><p>Originally from Peru, now in Atlanta. I'm a senior Computer Science major concentrating in Data Science at Georgia State University, building full-stack web apps, grounded AI/RAG workflows, and public-health data pipelines.</p><span className="section-tile-link">More about me <ArrowUpRight size={15} /></span></Link>
      <Link to="/rides" className="section-tile pink-card"><Sparkles size={20} /><span className="section-tile-index">04 / RIDES</span><span className="tiny-label">OFF THE KEYBOARD</span><h2>Cycling Atlanta, and the data behind every ride.</h2><span className="section-tile-link">See ride data <ArrowUpRight size={15} /></span></Link>
    </section>

  </main>;
}
