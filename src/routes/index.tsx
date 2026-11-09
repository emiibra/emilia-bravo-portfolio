import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { meta } from "@/components/site";
import { useTranslation } from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => meta("Emilia Bravo | Software Engineer & Data Builder", "Full-stack software, grounded AI systems, and public-health data pipelines by Emilia Bravo."),
  component: Home,
});

// Order matches t.home.softwareItems / t.home.dataItems; ids match the cards on /cs and /data.
const softwareIds = ["fry-goehring", "teresita", "pouncepath", "herecho"] as const;
const dataIds = ["counties-beat-the-odds", "spark-cluster", "floreo-analytics", "strava-telemetry"] as const;

function Home() {
  const { t } = useTranslation();
  const [mode, setMode] = useState<"software" | "data">("software");
  const focus = {
    software: {
      label: t.home.tabSoftware,
      eyebrow: t.home.softwareEyebrow,
      title: t.home.softwareTitle,
      stats: [["70+", t.home.stats.events], ["~2,100", t.home.stats.registrations], ["~80%", t.home.stats.manualOps], ["1st", t.home.stats.hackHers]],
      items: t.home.softwareItems.map((item, index) => ({ id: softwareIds[index], ...item })),
      browse: t.home.browseSoftware,
      href: "/cs" as const,
    },
    data: {
      label: t.home.tabData,
      eyebrow: t.home.dataEyebrow,
      title: t.home.dataTitle,
      stats: [["229k", t.home.stats.cdcRows], ["3,143", t.home.stats.counties], ["2-node", t.home.stats.spark], ["20%", t.home.stats.diligence]],
      items: t.home.dataItems.map((item, index) => ({ id: dataIds[index], ...item })),
      browse: t.home.browseData,
      href: "/data" as const,
    },
  } as const;
  const current = focus[mode];

  return <main className="scrapbook-page">
    <section className="scrapboard">
      <div className="hero-scene">
        <article className="paper-panel hero-paper">
          <div className="paper-tape" />
          <div className="paper-meta"><span>{t.home.fileLabel}</span><span>{t.home.updated}</span></div>
          <p className="hero-kicker">{t.home.kicker}</p>
          <h1>{t.home.titleLineOne}<br /><em>{t.home.titleLineTwo}</em><br />{t.home.titleLineThree}</h1>
          <p className="hero-copy">{t.home.description}</p>
          <div className="hero-actions"><a href="#projects" className="lime-button">{t.home.viewProjects} <ArrowRight size={16} /></a><a href="mailto:emiliaabravo19@gmail.com?subject=Resume%20request" className="ink-link">{t.home.resume} <ArrowUpRight size={15} /></a><a href="https://github.com/emiibra" target="_blank" rel="noreferrer" className="ink-link">GitHub <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/emibra" target="_blank" rel="noreferrer" className="ink-link">LinkedIn <ArrowUpRight size={15} /></a><Link to="/contact" className="ink-link">{t.home.sayHello} <ArrowUpRight size={15} /></Link></div>
          <Link to="/cs" hash="fry-goehring" className="hero-proof"><span>{t.home.proofLabel}</span><strong>{t.home.proofTitle} <ArrowUpRight size={16} /></strong><small>{t.home.proofNote}</small></Link>
          <div className="paper-footer"><span>{t.home.paperLocation}</span><span>{t.home.paperSchool}</span><span>{t.home.paperJob}</span></div>
        </article>
        <aside className="desktop-card music-card">
          <div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span>currently-building.txt</span><span>···</span></div>
          <p className="tiny-label">{t.home.activeWork}</p>
          <ul className="build-list">{t.home.building.map((item) => <li key={item.name}><strong>{item.name}</strong><span>{item.role}</span><small>{item.detail}</small></li>)}</ul>
        </aside>
        <div className="desktop-note"><span>{t.home.awardsLabel}</span><p>{t.home.awards.map((award, index) => <span key={award} className="contents">{index > 0 && <br />}<strong>0{index + 1}</strong> {award}</span>)}</p></div>
      </div>
    </section>

    <section id="projects" className="project-console">
      <div className="console-top"><div><span className="tiny-label">{t.home.consoleLabel}</span><h2>{t.home.consoleTitle}</h2></div><span className="console-count">{t.home.consoleHint}</span></div>
      <div className="project-tabs" role="tablist" aria-label={t.home.tabsLabel}>{(Object.keys(focus) as Array<keyof typeof focus>).map((key) => <button key={key} role="tab" aria-selected={mode === key} className={mode === key ? "active" : ""} onClick={() => setMode(key)}>{focus[key].label}</button>)}</div>
      <div className="console-paper" key={mode}>
        <div className="project-feature"><span className="tiny-label">{current.eyebrow}</span><h3>{current.title}</h3><div className="project-stats">{current.stats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div><Link to={current.href} className="ink-link">{current.browse} <ArrowUpRight size={15} /></Link></div>
        <div className="project-list">{current.items.map((item, index) => <Link key={item.name} to={current.href} hash={item.id} className="project-row" aria-label={`${item.name}: ${t.home.viewDetails}`}><span>0{index + 1}</span><strong className="project-row-copy">{item.name}<small className="project-row-stack">{item.stack}</small></strong><ArrowUpRight size={16} /></Link>)}</div>
      </div>
    </section>

    <section className="scrap-lower" aria-label={t.home.sectionsLabel}>
      <Link to="/cs" className="section-tile skills-sheet paper-panel"><span className="section-tile-index">{t.home.buildIndex}</span><span className="tiny-label">{t.home.buildLabel}</span><h2>{t.home.buildTitleOne}<br /><em>{t.home.buildTitleTwo}</em></h2><div className="skill-list"><span>Python</span><span>TypeScript</span><span>React</span><span>Next.js</span><span>SQL</span><span>PySpark</span><span>Supabase</span><span>scikit-learn</span></div><span className="section-tile-link">{t.home.buildLink} <ArrowUpRight size={15} /></span></Link>
      <Link to="/about" className="section-tile about-note"><span className="section-tile-index">{t.home.aboutIndex}</span><span className="tiny-label">{t.home.aboutLabel}</span><p>{t.home.aboutBody}</p><span className="section-tile-link">{t.home.aboutLink} <ArrowUpRight size={15} /></span></Link>
      <Link to="/rides" className="section-tile pink-card"><Sparkles size={20} /><span className="section-tile-index">{t.home.ridesIndex}</span><span className="tiny-label">{t.home.ridesLabel}</span><h2>{t.home.ridesTitle}</h2><span className="section-tile-link">{t.home.ridesLink} <ArrowUpRight size={15} /></span></Link>
    </section>

  </main>;
}
