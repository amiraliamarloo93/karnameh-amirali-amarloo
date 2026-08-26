import { createFileRoute } from "@tanstack/react-router";
import { ReportCard } from "@/components/report-card";

export const Route = createFileRoute("/")({
  component: ReportCard,
});
