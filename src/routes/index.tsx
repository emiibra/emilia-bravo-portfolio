import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Database, Disc3, Github, Linkedin, Mail, MousePointer2, Sparkles } from "lucide-react";
import { useState } from "react";
import { meta } from "@/components/site";
import { useTranslation } from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => meta("Emilia Bravo | Full-Stack & Data Engineer", "A curious mind, a few open tabs, and a portfolio of software and data work."),
  component: Home,
});

function Home() {
  const { t } = useTranslation();
  const [mode, setMode] = useState<"software" | "data">("software");
  const [isPlaying, setIsPlaying] = useState(false);
  const focus = {
    software: {
      label: "01 / Software",
      eyebrow: t.home.softwareEyebrow,
      title: t.home.softwareTitle,
      stats: [["70+", t.home.stats.events], ["~2,100", t.home.stats.registrations], ["~80%", t.home.stats.manualOps], ["1st", t.home.stats.hackHers]],
      items: t.home.softwareItems,
      href: "/cs" as const,
    },
    data: {
      label: "02 / Data",
      eyebrow: t.home.dataEyebrow,
      title: t.home.dataTitle,
      stats: [["229k", t.home.stats.cdcRows], ["3,143", t.home.stats.counties], ["2-node", t.home.stats.spark], ["20%", t.home.stats.diligence]],
      items: t.home.dataItems,
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
          <div className="hero-actions"><Link to="/cs" className="lime-button">Open projects <ArrowRight size={16} /></Link><Link to="/contact" className="ink-link">Say hello <ArrowUpRight size={15} /></Link></div>
          <div className="paper-footer"><span>ATL / LATAM</span><span>CS + DATA</span><span>NO TEMPLATE</span></div>
        </article>
        <aside className="desktop-card music-card">
          <div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span>currently-into.txt</span><span>···</span></div>
          <button className={`record-button ${isPlaying ? "is-playing" : ""}`} onClick={() => setIsPlaying(!isPlaying)} aria-label={isPlaying ? "Pause current track" : "Play current track"}><Disc3 size={96} strokeWidth={1.2} /></button>
          <p className="tiny-label">CURRENTLY INTO</p>
          <h2>Clear interfaces,<br />messy questions.</h2>
          <div className="player-line"><span>{isPlaying ? "playing / 00:18" : "press play / 00:00"}</span><span className="equalizer"><b /><b /><b /><b /></span></div>
        </aside>
        <button className="sticker" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Side quests?<br /><strong>Always.</strong><MousePointer2 size={15} /></button>
        <div className="desktop-note"><span>note to self</span><p>Make useful things.<br />Keep the strange details.</p></div>
      </div>
    </section>

    <section id="projects" className="project-console">
      <div className="console-top"><div><span className="tiny-label">PORTFOLIO / INDEX</span><h2>Selected projects</h2></div><span className="console-count">{mode === "software" ? "04" : "04"} files visible</span></div>
      <div className="project-tabs" role="tablist" aria-label="Project categories">{(Object.keys(focus) as Array<keyof typeof focus>).map((key) => <button key={key} role="tab" aria-selected={mode === key} className={mode === key ? "active" : ""} onClick={() => setMode(key)}>{focus[key].label}</button>)}</div>
      <div className="console-paper" key={mode}>
        <div className="project-feature"><span className="tiny-label">{current.eyebrow}</span><h3>{current.title}</h3><div className="project-stats">{current.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><Link to={current.href} className="ink-link">Browse {mode} work <ArrowUpRight size={15} /></Link></div>
        <div className="project-list">{current.items.map((item, index) => <Link key={item} to={current.href} className="project-row"><span>0{index + 1}</span><strong>{item}</strong><ArrowUpRight size={16} /></Link>)}</div>
      </div>
    </section>

    <section className="scrap-lower">
      <div className="skills-sheet paper-panel"><span className="tiny-label">TOOLS I USE</span><h2>Software, data,<br /><em>and the in-between.</em></h2><div className="skill-list"><span>Python</span><span>TypeScript</span><span>React</span><span>Next.js</span><span>SQL</span><span>PySpark</span><span>Supabase</span><span>scikit-learn</span></div></div>
      <div className="about-note"><span className="tiny-label">A LITTLE CONTEXT</span><p>I am a Computer Science student at Georgia State University, building practical software and data systems for health, public infrastructure, and teams across Latin America.</p><Link to="/about" className="ink-link">More about me <ArrowUpRight size={15} /></Link></div>
      <div className="pink-card"><Sparkles size={20} /><span className="tiny-label">OPEN TAB</span><h2>There is probably another idea in here somewhere.</h2></div>
    </section>

    <footer className="scrap-footer"><span>© 2026 Emilia Bravo</span><span>made with curiosity / not a template</span><div><a href="mailto:emiliaabravo19@gmail.com" aria-label="Email"><Mail size={17} /></a><a href="https://www.linkedin.com/in/emibra" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://github.com/emiibra" aria-label="GitHub"><Github size={17} /></a><Database size={17} /></div></footer>
  </main>;
}
