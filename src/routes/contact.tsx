import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Page, meta } from "@/components/site";
import { useTranslation } from "@/i18n";

export const Route = createFileRoute("/contact")({ head: () => meta("Contact | Emilia Bravo", "Get in touch with Emilia Bravo, Atlanta-based full-stack and data engineer."), component: Contact });

function Contact() {
  const { t } = useTranslation();
  return <Page number="05" title={t.contact.title} intro={t.contact.intro}><div className="grid gap-5 md:grid-cols-2"><a className="page-card card flex items-center justify-between rounded-2xl p-7 transition hover:-translate-y-1" href="mailto:emiliaabravo19@gmail.com"><span><Mail className="page-card-icon mb-6" /><span className="page-card-title display block text-3xl">{t.contact.email}</span><span className="page-card-copy mt-2 block">emiliaabravo19@gmail.com</span></span><ArrowUpRight className="page-card-arrow" /></a><a className="page-card card flex items-center justify-between rounded-2xl p-7 transition hover:-translate-y-1" href="tel:+16783604682"><span><Phone className="page-card-icon mb-6" /><span className="page-card-title display block text-3xl">{t.contact.call}</span><span className="page-card-copy mt-2 block">(678) 360-4682</span></span><ArrowUpRight className="page-card-arrow" /></a><a className="page-card card page-card-title rounded-2xl p-7 text-2xl" href="https://www.linkedin.com/in/emibra" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight className="page-card-arrow inline" size={18} /></a><a className="page-card card page-card-title rounded-2xl p-7 text-2xl" href="https://github.com/emiibra" target="_blank" rel="noreferrer">GitHub <ArrowUpRight className="page-card-arrow inline" size={18} /></a></div><p className="page-meta mt-10">{t.contact.location}</p></Page>;
}
