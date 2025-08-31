import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";

export function generateStaticParams() {
  return blogPosts.map((b) => ({ slug: b.slug }));
}

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const date = new Date(post.date).toLocaleDateString();
  const categoryLabel = post.category[0].toUpperCase() + post.category.slice(1);
  const readText = post.readingMinutes ? ` · ${post.readingMinutes} min read` : "";

  return (
    <div className="container mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">{post.title}</h1>

      <p className="text-neutral-400 mt-2">
        {date} · {categoryLabel}
        {readText}
      </p>

      {/* Optional: show tags as chips */}
      {post.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-neutral-900/70 px-3 py-1 text-xs ring-1 ring-white/10 text-neutral-300"
            >
              {t}
            </span>
          ))}
        </div>
      ) : null}

      <article
        className="prose prose-invert max-w-none mt-8"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}
