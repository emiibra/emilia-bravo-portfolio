import { createFileRoute } from "@tanstack/react-router";
import { Bike, ExternalLink } from "lucide-react";
import { Page, meta } from "@/components/site";
import { useTranslation } from "@/i18n";

export const Route = createFileRoute("/rides")({ head: () => meta("Rides | Emilia Bravo", "Atlanta cycling stats, clubs, and memorable rides by Emilia Bravo."), component: Rides });

function Rides() {
  const { t } = useTranslation();
  return <Page number="04" title={t.rides.title} intro={t.rides.intro}><div className="grid grid-cols-2 gap-4 md:grid-cols-4">{t.rides.stats.map((stat) => <div key={stat.label} className="page-card card rounded-2xl p-6"><Bike className="page-card-icon mb-8" size={20} /><p className="page-card-title display text-4xl">{stat.value}</p><p className="page-card-copy mono mt-2">{stat.label}</p></div>)}</div><div className="mt-16 grid gap-12 md:grid-cols-[1.2fr_1fr]"><div><h2 className="page-project-title display text-4xl">{t.rides.logHeading}</h2><div className="page-accent-border mt-8 space-y-0 border-l-2 pl-6">{t.rides.log.map((entry) => <article key={entry.date} className="page-muted-border relative border-b py-5 first:pt-0"><span className="page-meta">{entry.date}</span><p className="page-copy mt-2 text-lg">{entry.text}</p></article>)}</div></div><div className="brand-surface rounded-2xl border-2 border-[#f0eee5] p-8"><p className="brand-eyebrow mono">{t.rides.boxEyebrow}</p><h2 className="display mt-4 text-5xl">{t.rides.boxTitle}</h2><p className="mt-5 leading-relaxed">{t.rides.boxBody}</p><a className="brand-eyebrow mono mt-8 inline-flex items-center gap-2" href="https://www.strava.com" target="_blank" rel="noreferrer">{t.rides.boxLink} <ExternalLink size={14} /></a></div></div></Page>;
}
