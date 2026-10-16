import { createFileRoute } from "@tanstack/react-router";
import { Page, ProjectGrid, meta, type Project } from "@/components/site";
export const Route = createFileRoute("/cs")({ head: () => meta("CS Projects | Emilia Bravo", "Full-stack platforms, hackathon winners, and systems projects by Emilia Bravo."), component: Cs });
const projects: Project[] = [
  { name: "Fry Goehring Event Logistics Manager", stage: "2025–26", status: "Production", desc: "Full-stack event operations platform used across 70+ events and about 2,100 registrations. Includes AI flyer extraction, QR check-ins, payment workflows, and exports.", stack: ["Next.js", "Supabase", "Vertex AI", "TypeScript"] },
  { name: "Teresita HR & Operations Platform", stage: "2025–26", status: "Production", desc: "Workforce management application with granular RBAC, shift scheduling, real-time attendance, and strict PostgreSQL Row-Level Security.", stack: ["React", "Next.js", "PostgreSQL", "Python"] },
  { name: "Voice-Only AI Assistant", stage: "Oct 2025", status: "1st Place · HackHers", desc: "A spoken-only messaging experience for low-literacy users, designed to compose, navigate, and send messages entirely through voice.", stack: ["React", "Web Speech API", "TypeScript"] },
  { name: "Appointment Availability Monitor", stage: "Oct 2022", status: "Shipped", desc: "Browser-scraping monitor that checked official scheduling portals in Peru and sent WhatsApp alerts, helping users move appointments months earlier.", stack: ["Python", "Puppeteer", "Cron", "WhatsApp API"] },
  { name: "VR Golf Training Tool", stage: "Mar 2025", status: "Meta Quest 3", desc: "Immersive golf swing analysis tool built for live demonstrations at a Georgia Tech hackathon.", stack: ["React", "Vite", "Unity XR"] },
  { name: "Cybersecurity CTF Suite", stage: "Oct 2025", status: "2nd Place · Truist", desc: "Collaborative offensive and defensive security challenge suite. Solved 5 of 8 challenges for 3,325 points.", stack: ["Python", "SQL", "XSS", "Network Scanning"] },
];
function Cs() { return <Page number="02" title="CS Projects" intro="Full-stack platforms, hackathon podium finishes, and systems builds. Every project here is a door into the problem it solved."><ProjectGrid items={projects} /></Page>; }
