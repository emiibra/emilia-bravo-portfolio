import { Link, useLocation } from "@tanstack/react-router";
import { ArrowUpRight, Bike, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

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

export type Project = { name: string; stage: string; status: string; desc: string; stack: string[]; href?: string };
export function ProjectGrid({ items }: { items: Project[] }) {
  return <div className="grid gap-x-10 md:grid-cols-2">{items.map((project, index) => <article key={project.name} className="rise border-t border-[#201e1c]/30 py-8" style={{ animationDelay: `${index * 70}ms` }}>
    <div className="flex justify-between gap-4"><span className="mono text-[#716c65]">{project.stage}</span><span className="mono text-[#347b64]">{project.status}</span></div>
    <h2 className="display mt-3 text-4xl">{project.name}</h2><p className="mt-3 leading-relaxed text-[#716c65]">{project.desc}</p>
    <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="mono rounded-full border border-[#d1c9bb] px-3 py-1 text-[.62rem]">{tag}</span>)}</div>
    {project.href && <a href={project.href} target="_blank" rel="noreferrer" className="mono mt-5 inline-flex items-center gap-1 text-[#d85436] hover:underline">Open project <ArrowUpRight size={14} /></a>}
  </article>)}</div>;
}

export function meta(title: string, description: string) { return { meta: [{ title }, { name: "description", content: description }] }; }
