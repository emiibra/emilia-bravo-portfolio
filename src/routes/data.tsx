import { createFileRoute } from "@tanstack/react-router";
import { Page, ProjectGrid, meta, type Project } from "@/components/site";
import { useTranslation } from "@/i18n";
import type { Translation } from "@/i18n/en";

export const Route = createFileRoute("/data")({ head: () => meta("Data Engineering | Emilia Bravo", "Public-health data mining, Spark clusters, and pipelines by Emilia Bravo."), component: Data });

type DataId = keyof Translation["data"]["items"];

// Language-independent data only. Text lives in src/i18n/*.ts under data.items.
const projects: Array<{ id: DataId; stack: string[] }> = [
  { id: "counties-beat-the-odds", stack: ["Python", "scikit-learn", "Pandas", "SHAP", "Spatial CV"] },
  { id: "spark-cluster", stack: ["Apache Spark", "PySpark", "HDFS", "Linux"] },
  { id: "floreo-analytics", stack: ["Python", "React", "Supabase", "PostgreSQL"] },
  { id: "strava-telemetry", stack: ["Python", "Strava API", "PySpark", "React"] },
];

function Data() {
  const { t } = useTranslation();
  const items: Project[] = projects.map((project) => ({ ...project, ...t.data.items[project.id] }));
  return <Page number="03" title={t.data.title} intro={t.data.intro}><ProjectGrid items={items} /></Page>;
}
