import Link from "next/link";
import type { BlogPost } from "@/lib/data";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-white/10 p-5 bg-white/5 hover:bg-white/10 transition"
    >
      <div className="flex items-baseline gap-2">
        <h3 className="text-lg font-semibold group-hover:underline underline-offset-4">
          {post.title}
        </h3>
        <span className="ml-auto text-xs text-neutral-500">
          {new Date(post.date).toLocaleDateString()}
        </span>
      </div>
      <p className="text-neutral-400 mt-2">{post.excerpt}</p>
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
    </Link>
  );
}
