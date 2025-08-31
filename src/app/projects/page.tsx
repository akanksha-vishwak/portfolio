import Link from "next/link";
import { projects } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";


export default function ProjectsPage() {
return (
<div className="container mx-auto max-w-6xl px-6 py-16">
<h1 className="text-3xl font-semibold">Projects</h1>
<p className="text-neutral-400 mt-2">Deeper write-ups and demos.</p>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
{projects.map((p) => (
<ProjectCard key={p.slug} project={p} />
))}
</div>
</div>
);
}