import { createFileRoute } from "@tanstack/react-router";
import { GithubRepoGrid, Page, ProjectGrid, meta, type Project } from "@/components/site";
import { useTranslation } from "@/i18n";
import type { Translation } from "@/i18n/en";
import ctfCertificate from "@/assets/ctf-certificate.png";
import hackHersCertificate from "@/assets/hackhers-certificate.png";

export const Route = createFileRoute("/cs")({ head: () => meta("Projects | Emilia Bravo", "Full-stack platforms, hackathon winners, and systems projects by Emilia Bravo."), component: Cs });

type ProjectId = keyof Translation["projects"]["items"];
type RecognitionId = keyof Translation["projects"]["recognition"];

// Language-independent data only. Names, dates, statuses and descriptions live in src/i18n/*.ts under projects.items.
const projects: Array<Omit<Project, "name" | "stage" | "status" | "desc" | "recognition"> & { id: ProjectId; recognition?: { id: RecognitionId; image?: string; href?: string } }> = [
  { id: "fry-goehring", stack: ["Next.js", "Supabase", "Vertex AI", "TypeScript"], href: "https://event-organizer-fg.vercel.app", hrefKind: "app", demoPending: true, repo: "https://github.com/emiibra/event-organizer-fg" },
  { id: "teresita", stack: ["React", "Next.js", "PostgreSQL", "Python"] },
  { id: "pouncepath", stack: ["FastAPI", "PostgreSQL", "pgvector", "RAG"] },
  { id: "herecho", stack: ["React", "Web Speech API", "TypeScript"], href: "https://her-echo.vercel.app", repo: "https://github.com/emiibra/HerEcho", recognition: { id: "herecho", image: hackHersCertificate, href: "https://her-echo.vercel.app" } },
  { id: "appointment-monitor", stack: ["Python", "Puppeteer", "Cron", "WhatsApp API"] },
  { id: "vr-golf", stack: ["React", "Vite", "Unity XR"] },
  { id: "ctf-suite", stack: ["Python", "SQL", "XSS", "Network Scanning"], recognition: { id: "ctf-suite", image: ctfCertificate, href: "https://ctf.hackthebox.com/team/overview/292505" } },
];

function Cs() {
  const { t } = useTranslation();
  const items: Project[] = projects.map(({ recognition, ...project }) => ({
    ...project,
    ...t.projects.items[project.id],
    recognition: recognition && { ...t.projects.recognition[recognition.id], image: recognition.image, href: recognition.href },
  }));
  return <Page number="02" title={t.projects.title} intro={t.projects.intro}><ProjectGrid items={items} /><GithubRepoGrid /></Page>;
}
