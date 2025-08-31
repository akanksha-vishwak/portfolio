import { notFound } from "next/navigation";
import { projects } from "@/lib/data";


export async function generateStaticParams() {
return projects.map(p => ({ slug: p.slug }));
}


export default function ProjectDetail({ params }: { params: { slug: string } }) {
const project = projects.find(p => p.slug === params.slug);
if (!project) return notFound();
return (
<div className="container mx-auto max-w-3xl px-6 py-16">
<h1 className="text-3xl font-semibold">{project.title}</h1>
<p className="text-neutral-400 mt-2">{project.subtitle}</p>
<div className="mt-8 prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
{project.links?.demo && (
<a className="inline-block mt-8 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold hover:bg-brand-400 transition" href={project.links.demo} target="_blank" rel="noreferrer">Open Demo</a>
)}
</div>
);
}