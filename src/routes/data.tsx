import { createFileRoute } from "@tanstack/react-router";
import { Page, ProjectGrid, meta, type Project } from "@/components/site";
export const Route = createFileRoute("/data")({ head: () => meta("Data Engineering | Emilia Bravo", "Public-health data mining, Spark clusters, and pipelines by Emilia Bravo."), component: Data });
const projects: Project[] = [
  { name: "Counties That Beat the Odds", stage: "Fall 2026 · Data Mining", status: "Research", desc: "Spatially validated analysis of cancer screening gaps across U.S. counties, joining CDC PLACES and County Health Rankings with models, clustering, residual analysis, and SHAP explanations.", stack: ["Python", "scikit-learn", "Pandas", "SHAP", "Spatial CV"] },
  { name: "Multi-Node Apache Spark Cluster", stage: "Fall 2026 · Big Data", status: "Running", desc: "Two-node distributed Spark cluster executing RDD transformations and DataFrame pipelines, with attention to DAG fault tolerance and compute-to-data locality.", stack: ["Apache Spark", "PySpark", "HDFS", "Linux"] },
  { name: "Floreo Due Diligence Analytics", stage: "2025-Present", status: "Production", desc: "Document ingestion and analytics application for LATAM clients, with automated parsing, structured storage, and dynamic dashboards that reduced manual analysis time by 20%.", stack: ["Python", "React", "Supabase", "PostgreSQL"] },
  { name: "Strava Ride Telemetry Pipeline", stage: "Next", status: "In Progress", desc: "ETL pipeline for GPX streams and activity logs, designed to turn Atlanta rides into live segment times, elevation profiles, mileage, and carbon-savings metrics.", stack: ["Python", "Strava API", "PySpark", "React"] },
];
function Data() { return <Page number="03" title="Data Engineering" intro="Moving data reliably, from source to insight, with a public-health focus."><ProjectGrid items={projects} /></Page>; }
