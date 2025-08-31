import Link from "next/link";
import { blogPosts, type BlogCategory, type BlogPost } from "@/lib/data";
import { BlogCard } from "@/components/BlogCard";

const CATEGORIES: { key: BlogCategory; label: string; href: string }[] = [
    { key: "tech",   label: "Tech",   href: "/blog/category/tech" },
    { key: "travel", label: "Travel", href: "/blog/category/travel" },
    { key: "essays", label: "Essays", href: "/blog/category/essays" },
];

function postsFor(cat: BlogCategory, all: BlogPost[], limit = 4) {
  return all
    .filter((p) => p.category === cat)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
    .slice(0, limit);
}

export default function BlogLanding() {
  return (
    <div className="container mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="text-neutral-400 mt-2">Notes on data & life, grouped by topic.</p>

      {/* Three sections (no chips) */}
      <div className="mt-10 space-y-14">
        {CATEGORIES.map((c) => {
          const list = postsFor(c.key, blogPosts, 4);
          return (
            <section key={c.key}>
              <div className="mb-6 flex items-end justify-between">
                <h2 className="text-2xl font-semibold">{c.label}</h2>
                <Link href={c.href} className="link-underline text-neutral-300">
                  View all →
                </Link>
              </div>
              {list.length ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {list.map((p) => (
                    <BlogCard key={p.slug} post={p} />
                  ))}
                </div>
              ) : (
                <p className="text-neutral-500 text-sm">No posts here yet. Check back soon.</p>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
