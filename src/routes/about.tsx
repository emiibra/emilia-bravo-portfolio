import { createFileRoute } from "@tanstack/react-router";
import { Page, meta } from "@/components/site";
import { useTranslation } from "@/i18n";

export const Route = createFileRoute("/about")({ head: () => meta("About | Emilia Bravo", "The engineering experience and background behind Emilia Bravo's work in software, data, and Atlanta."), component: About });

function About() {
  const { t } = useTranslation();
  return <Page number="03" title={t.about.title} intro={t.about.intro}><div className="grid gap-12 md:grid-cols-[1fr_1.2fr]"><div>{t.about.paragraphs.map((paragraph, index) => <p key={index} className={`page-copy text-lg ${index > 0 ? "mt-6" : ""}`}>{paragraph}</p>)}</div><ol className="page-accent-border border-l-2 pl-6">{t.about.timeline.map((stage, index) => <li key={index} className="mb-10"><span className="page-meta">{String(index + 1).padStart(2, "0")} · {stage.date}</span><h2 className="page-project-title display mt-2 text-3xl">{stage.title}</h2><p className="page-timeline-description mt-2">{stage.desc}</p></li>)}</ol></div></Page>;
}
