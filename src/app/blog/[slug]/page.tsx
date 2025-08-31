import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";


export async function generateStaticParams() {
return blogPosts.map(b => ({ slug: b.slug }));
}


export default function BlogDetail({ params }: { params: { slug: string } }) {
const post = blogPosts.find(p => p.slug === params.slug);
if (!post) return notFound();
return (
<div className="container mx-auto max-w-3xl px-6 py-16">
<h1 className="text-3xl font-semibold">{post.title}</h1>
<p className="text-neutral-400 mt-2">{new Date(post.date).toLocaleDateString()} · {post.tag}</p>
<article className="prose prose-invert max-w-none mt-8" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
</div>
);
}