import Link from "next/link";
import { blogPosts } from "@/lib/data";


export default function BlogPage() {
return (
<div className="container mx-auto max-w-6xl px-6 py-16">
<h1 className="text-3xl font-semibold">Blog</h1>
<p className="text-neutral-400 mt-2">Data notes and occasional essays.</p>
<div className="mt-8 grid md:grid-cols-2 gap-6">
{blogPosts.map((b) => (
<Link key={b.slug} href={`/blog/${b.slug}`} className="block rounded-2xl border border-white/10 p-6 hover:bg-white/5 transition">
<h3 className="text-xl font-semibold">{b.title}</h3>
<p className="text-neutral-400 mt-2">{b.excerpt}</p>
<p className="text-xs text-neutral-500 mt-3">{new Date(b.date).toLocaleDateString()}</p>
</Link>
))}
</div>
</div>
);
}