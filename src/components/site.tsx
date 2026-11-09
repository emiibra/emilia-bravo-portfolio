import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Bike, Database, Github, Linkedin, LoaderCircle, Mail } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { type Language, useTranslation } from "@/i18n";

const links = [
  ["/", "Start"], ["/cs", "Projects"], ["/about", "About"],
  ["/rides", "Rides"], ["/contact", "Contact"],
] as const;

export function Nav() {
  const location = useLocation();
  const { language, setLanguage, t } = useTranslation();
  return <header className="site-nav sticky top-0 z-50">
    <nav className="site-nav-inner container" aria-label="Primary navigation">
      <Link to="/" className="site-wordmark">
        <span className="site-wordmark-mark"><Bike size={17} /></span>
        <span>Emilia Bravo</span>
        <small>CS + DATA</small>
      </Link>
      <div className="site-nav-links">
        {links.map(([to]) => { const labels = { "/": t.nav.start, "/about": t.nav.about, "/cs": t.nav.projects, "/rides": t.nav.rides, "/contact": t.nav.contact }; return <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className={`nav-link ${location.pathname === to ? "is-active" : ""}`}><span>{labels[to]}</span></Link>; })}
        <select aria-label="Language" value={language} onChange={(event) => setLanguage(event.target.value as Language)} className="nav-language">
          <option value="en">EN</option><option value="es">ES</option><option value="it">IT</option>
        </select>
      </div>
    </nav>
    <div className="h-px bg-[#201e1c] opacity-20" />
  </header>;
}

export function SiteFooter() {
  return <footer className="scrap-footer"><span>© 2026 Emilia Bravo</span><span>Atlanta, GA · From Peru</span><div><a href="mailto:emiliaabravo19@gmail.com" aria-label="Email"><Mail size={17} /></a><a href="https://www.linkedin.com/in/emibra" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><a href="https://github.com/emiibra" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a><Database size={17} aria-hidden="true" /></div></footer>;
}

export function Page({ number, title, intro, children }: { number: string; title: string; intro: string; children: ReactNode }) {
  return <main className="page-shell container py-16 md:py-24">
    <div className="flex flex-wrap items-end gap-5 border-b pb-8 page-rule"><span className="page-number">{number}</span><h1 className="page-title">{title}</h1></div>
    <p className="page-intro mt-8 max-w-2xl">{intro}</p>
    <div className="mt-14">{children}</div>
  </main>;
}

export type Project = {
  /** Anchor id so other pages can deep-link straight to this card (e.g. /cs#herecho). */
  id: string;
  name: string;
  stage: string;
  status: string;
  desc: string;
  stack: string[];
  /** Live demo / deployed URL. */
  href?: string;
  /** Button text for href. Defaults to "Live demo". */
  hrefLabel?: string;
  /** Source code URL. */
  repo?: string;
  /** Short note shown next to the buttons, e.g. "Guest demo coming soon". */
  linkNote?: string;
  recognition?: { label: string; detail: string; image?: string; href?: string };
};
export function ProjectGrid({ items }: { items: Project[] }) {
  return <div className="grid gap-x-10 md:grid-cols-2">{items.map((project, index) => <article key={project.name} id={project.id} className="page-project rise border-t py-8" style={{ animationDelay: `${index * 70}ms` }}>
    <div className="flex justify-between gap-4"><span className="page-meta">{project.stage}</span><span className="mono text-[#d9ff78]">{project.status}</span></div>
    <h2 className="page-project-title display mt-3 text-4xl">{project.name}</h2><p className="page-project-description mt-3">{project.desc}</p>
    {project.recognition && <ProjectRecognition recognition={project.recognition} projectName={project.name} />}
    <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="mono rounded-full border border-[#d1c9bb] px-3 py-1 text-[.62rem]">{tag}</span>)}</div>
    {(project.href || project.repo) && <div className="page-project-links">
      {project.href && <a href={project.href} target="_blank" rel="noreferrer" className="project-cta project-cta-primary">{project.hrefLabel ?? "Live demo"} <ArrowUpRight size={14} /></a>}
      {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="project-cta"><Github size={14} /> Code</a>}
      {project.linkNote && <span className="page-meta self-center">{project.linkNote}</span>}
    </div>}
  </article>)}</div>;
}

function ProjectRecognition({ recognition, projectName }: { recognition: NonNullable<Project["recognition"]>; projectName: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return <div className="mt-6 overflow-hidden rounded-xl border border-[#d1c9bb] bg-[#f2efe8]">
    <div className="flex flex-wrap items-center justify-between gap-3 p-4"><div><p className="mono text-[#347b64]">{recognition.label}</p><p className="mt-2 text-sm leading-relaxed text-[#716c65]">{recognition.detail}</p></div><button type="button" aria-expanded={isOpen} onClick={() => setIsOpen((open) => !open)} className="mono shrink-0 rounded-full border border-[#201e1c] px-3 py-2 text-[.6rem] text-[#201e1c] transition hover:border-[#d85436] hover:text-[#d85436]">{isOpen ? "Hide recognition" : "Show recognition"}</button></div>
    {isOpen && <div className="border-t border-[#d1c9bb]">{recognition.image && <img src={recognition.image} alt={`${recognition.label} certificate for ${projectName}`} className="aspect-[4/3] w-full object-cover" />}{recognition.href && <div className="p-4"><a href={recognition.href} target="_blank" rel="noreferrer" className="mono inline-flex text-[#d85436] hover:underline">View outcome ↗</a></div>}</div>}
  </div>;
}

type GithubRepository = {
  id: number;
  name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks: number;
  updated_at: string;
  fork: boolean;
};

const githubProjectTitles: Record<string, string> = {
  HerEcho: "Voice-Only AI Assistant · HerEcho",
  "event-organizer-fg": "Fry Goehring Event Logistics Manager",
};

export function GithubRepoGrid() {
  const [repositories, setRepositories] = useState<GithubRepository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.github.com/users/emiibra/repos?per_page=100&sort=updated", {
      headers: { Accept: "application/vnd.github+json" },
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error("GitHub request failed");
        return response.json() as Promise<GithubRepository[]>;
      })
      .then((data) => {
        setRepositories(
          data
            .filter((repository) => (!repository.fork || repository.name === "HerEcho") && repository.name.toLowerCase() !== "emiibra")
            .sort((first, second) => {
              if (first.name === "HerEcho") return -1;
              if (second.name === "HerEcho") return 1;
              return Date.parse(second.updated_at) - Date.parse(first.updated_at);
            })
            .slice(0, 6),
        );
      })
      .catch((requestError: unknown) => {
        if (requestError instanceof DOMException && requestError.name === "AbortError") return;
        setError(true);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return <section className="mt-20 border-t border-[#d1c9bb] pt-10" aria-labelledby="github-heading">
    <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="page-meta">Live from GitHub</p><h2 id="github-heading" className="display mt-2 text-4xl">Recent public repositories.</h2></div><a href="https://github.com/emiibra" target="_blank" rel="noreferrer" className="mono inline-flex items-center gap-2 text-[#f0eee5] hover:text-[#d9ff78] hover:underline">View profile <Github size={15} /></a></div>
    {loading && <div className="mt-8 flex items-center gap-3 text-sm text-[#716c65]"><LoaderCircle className="animate-spin" size={18} /> Loading public repositories...</div>}
    {!loading && error && <p className="mt-8 rounded-xl border border-[#d1c9bb] p-5 text-sm text-[#716c65]">GitHub is temporarily unavailable. The featured project list above is still available.</p>}
    {!loading && !error && <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{repositories.map((repository) => <article key={repository.id} className="card flex min-h-52 flex-col rounded-2xl p-5"><div className="flex items-start justify-between gap-4"><Github className="text-[#347b64]" size={20} /><span className="mono text-[.6rem] text-[#716c65]">{new Date(repository.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span></div><h3 className="display mt-5 text-2xl">{githubProjectTitles[repository.name] || repository.name}</h3><p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#716c65]">{repository.description || "Public repository by Emilia Bravo."}</p><div className="mt-auto flex items-center justify-between gap-3 pt-5"><span className="mono text-[.6rem] text-[#347b64]">{repository.language || "Open source"}</span><div className="flex items-center gap-3"><a href={repository.html_url} target="_blank" rel="noreferrer" className="mono inline-flex items-center gap-1 text-[#d85436] hover:underline">Repo <ArrowUpRight size={13} /></a>{repository.homepage && <a href={repository.homepage} target="_blank" rel="noreferrer" className="mono inline-flex items-center gap-1 text-[#d85436] hover:underline">Demo <ArrowUpRight size={13} /></a>}</div></div></article>)}</div>}
  </section>;
}

export function meta(title: string, description: string) {
  return { meta: [
    { title },
    { name: "description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ] };
}
