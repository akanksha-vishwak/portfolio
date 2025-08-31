import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { publications } from "@/lib/data";

function formatDate(d?: string) {
  if (!d) return "";
  try {
    return new Date(d).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  } catch { return d; }
}

export default function PublicationsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Publications</h1>
      <p className="text-neutral-400 mt-2">Peer-reviewed papers, proceedings, and talks.</p>

      <div className="mt-8 space-y-6">
        {publications.map((p) => {
          const href = p.links?.doi || p.links?.arxiv || p.links?.url || "#";
          return (
            <article key={p.slug} className="rounded-2xl border border-white/10 p-5 bg-white/5">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="mt-1 text-sm text-neutral-400">
                {p.authorsShort ? `${p.authorsShort} · ` : ""}
                {p.venue ? `${p.venue} · ` : ""}{formatDate(p.date)}
              </p>

              {p.tags?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full bg-neutral-900/70 px-3 py-1 text-xs ring-1 ring-white/10 text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="mt-4 flex flex-wrap gap-3">
                {p.links?.doi && (
                  <a href={p.links.doi} target="_blank" rel="noreferrer" className="link-underline text-neutral-300">
                    DOI <ExternalLink className="inline h-3.5 w-3.5" />
                  </a>
                )}
                {p.links?.arxiv && (
                  <a href={p.links.arxiv} target="_blank" rel="noreferrer" className="link-underline text-neutral-300">
                    arXiv <ExternalLink className="inline h-3.5 w-3.5" />
                  </a>
                )}
                {p.links?.url && !p.links?.doi && !p.links?.arxiv && (
                  <a href={p.links.url} target="_blank" rel="noreferrer" className="link-underline text-neutral-300">
                    View <ExternalLink className="inline h-3.5 w-3.5" />
                  </a>
                )}
                {p.links?.slides && (
                  <a href={p.links.slides} target="_blank" rel="noreferrer" className="link-underline text-neutral-300">
                    Slides <ExternalLink className="inline h-3.5 w-3.5" />
                  </a>
                )}
                {p.links?.code && (
                  <a href={p.links.code} target="_blank" rel="noreferrer" className="link-underline text-neutral-300">
                    Code <ExternalLink className="inline h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-12">
        <Link href="/#contact" className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold hover:bg-brand-400 transition">
          Like this work? Contact me
        </Link>
      </div>
    </div>
  );
}
