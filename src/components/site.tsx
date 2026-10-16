import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Bike, Github, LoaderCircle, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

const links = [
  ["/", "Start"], ["/about", "Life"], ["/cs", "CS Projects"],
  ["/data", "Data Eng"], ["/rides", "Rides"], ["/contact", "Contact"],
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return <header className="site-nav sticky top-0 z-50">
    <nav className="container flex min-h-20 items-center justify-between gap-6">
      <Link to="/" className="flex items-center gap-3 text-xl font-bold" onClick={() => setOpen(false)}>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-[#d85436] text-[#fff8ed]"><Bike size={18} /></span>
        Emilia Bravo
      </Link>
      <button className="rounded-full border border-[#d1c9bb] p-2 md:hidden" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X size={18} /> : <Menu size={18} />}</button>
      <div className={`${open ? "flex" : "hidden"} absolute left-4 right-4 top-[72px] flex-col gap-3 border border-[#d1c9bb] bg-[#f8f6f0] p-5 shadow-lg md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
        {links.map(([to, label]) => <Link key={to} to={to} activeOptions={{ exact: to === "/" }} onClick={() => setOpen(false)} className={`mono transition-colors hover:text-[#d85436] ${location.pathname === to ? "text-[#d85436]" : "text-[#716c65]"}`}>{label}</Link>)}
      </div>
    </nav>
    <div className="h-px bg-[#201e1c] opacity-20" />
  </header>;
}

export function Page({ number, title, intro, children }: { number: string; title: string; intro: string; children: ReactNode }) {
  return <main className="container py-16 md:py-24">
    <div className="flex flex-wrap items-end gap-5 border-b border-[#d1c9bb] pb-8"><span className="display text-7xl italic text-[#d85436] md:text-9xl">{number}</span><h1 className="display text-6xl leading-none md:text-8xl">{title}</h1></div>
    <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#716c65]">{intro}</p>
    <div className="mt-14">{children}</div>
  </main>;
}

export type Project = {
  name: string;
  stage: string;
  status: string;
  desc: string;
  stack: string[];
  href?: string;
  recognition?: { label: string; detail: string; image?: string; href?: string };
};
export function ProjectGrid({ items }: { items: Project[] }) {
  return <div className="grid gap-x-10 md:grid-cols-2">{items.map((project, index) => <article key={project.name} className="rise border-t border-[#201e1c]/30 py-8" style={{ animationDelay: `${index * 70}ms` }}>
    <div className="flex justify-between gap-4"><span className="mono text-[#716c65]">{project.stage}</span><span className="mono text-[#347b64]">{project.status}</span></div>
    <h2 className="display mt-3 text-4xl">{project.name}</h2><p className="mt-3 leading-relaxed text-[#716c65]">{project.desc}</p>
    {project.recognition && <ProjectRecognition recognition={project.recognition} projectName={project.name} />}
    <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="mono rounded-full border border-[#d1c9bb] px-3 py-1 text-[.62rem]">{tag}</span>)}</div>
    {project.href && <a href={project.href} target="_blank" rel="noreferrer" className="mono mt-5 inline-flex items-center gap-1 text-[#d85436] hover:underline">Open project <ArrowUpRight size={14} /></a>}
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
            .filter((repository) => !repository.fork || repository.name === "HerEcho")
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
    <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="mono text-[#d85436]">Live from GitHub</p><h2 id="github-heading" className="display mt-2 text-4xl">The public build log.</h2></div><a href="https://github.com/emiibra" target="_blank" rel="noreferrer" className="mono inline-flex items-center gap-2 text-[#d85436] hover:underline">View profile <Github size={15} /></a></div>
    {loading && <div className="mt-8 flex items-center gap-3 text-sm text-[#716c65]"><LoaderCircle className="animate-spin" size={18} /> Loading public repositories...</div>}
    {!loading && error && <p className="mt-8 rounded-xl border border-[#d1c9bb] p-5 text-sm text-[#716c65]">GitHub is temporarily unavailable. The featured project list above is still available.</p>}
    {!loading && !error && <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{repositories.map((repository) => <article key={repository.id} className="card flex min-h-52 flex-col rounded-2xl p-5"><div className="flex items-start justify-between gap-4"><Github className="text-[#347b64]" size={20} /><span className="mono text-[.6rem] text-[#716c65]">{new Date(repository.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}</span></div><h3 className="display mt-5 text-2xl">{githubProjectTitles[repository.name] || repository.name}</h3><p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#716c65]">{repository.description || "Public repository by Emilia Bravo."}</p><div className="mt-auto flex items-center justify-between gap-3 pt-5"><span className="mono text-[.6rem] text-[#347b64]">{repository.language || "Open source"}</span><div className="flex items-center gap-3"><a href={repository.html_url} target="_blank" rel="noreferrer" className="mono inline-flex items-center gap-1 text-[#d85436] hover:underline">Repo <ArrowUpRight size={13} /></a>{repository.homepage && <a href={repository.homepage} target="_blank" rel="noreferrer" className="mono inline-flex items-center gap-1 text-[#d85436] hover:underline">Demo <ArrowUpRight size={13} /></a>}</div></div></article>)}</div>}
  </section>;
}

export function meta(title: string, description: string) { return { meta: [{ title }, { name: "description", content: description }] }; }
