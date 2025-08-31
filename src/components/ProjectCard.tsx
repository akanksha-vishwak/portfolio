import Link from "next/link";
import type { Project } from "@/lib/data";


export function ProjectCard({ project }: { project: Project }) {
return (
<Link href={`/projects/${project.slug}`} className="group block rounded-2xl border border-white/10 p-5 bg-white/5 hover:bg-white/10 transition">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-lg font-semibold group-hover:underline underline-offset-4">{project.title}</h3>
<p className="text-neutral-400 mt-1">{project.subtitle}</p>
</div>
<span className="text-xs text-neutral-400">{project.year}</span>
</div>
<div className="mt-3 flex flex-wrap gap-2">
{project.tags.map((t) => (
<span key={t} className="rounded-full bg-neutral-900/70 px-3 py-1 text-xs ring-1 ring-white/10 text-neutral-300">{t}</span>
))}
</div>
</Link>
);
}