import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, type BlogCategory } from "@/lib/data";
import { BlogCard } from "@/components/BlogCard";

const VALID: BlogCategory[] = ["tech", "travel", "essays"];

export function generateStaticParams() {
  return VALID.map((category) => ({ category }));
}

export default function BlogCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const cat = params.category as BlogCategory;
  if (!VALID.includes(cat)) notFound();

  const list = blogPosts
    .filter((p) => p.category === cat)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));

  const label = cat[0].toUpperCase() + cat.slice(1);

  return (
    <div className="container mx-auto max-w-6xl px-6 py-16">
      <div className="flex items-center gap-3">
        <Link href="/blog" className="text-sm text-neutral-400 link-underline">
          ← All categories
        </Link>
        <h1 className="text-2xl md:text-3xl font-semibold">{label}</h1>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {list.length ? (
          list.map((p) => <BlogCard key={p.slug} post={p} />)
        ) : (
          <p className="text-neutral-500 text-sm">No posts here yet.</p>
        )}
      </div>
    </div>
  );
}
