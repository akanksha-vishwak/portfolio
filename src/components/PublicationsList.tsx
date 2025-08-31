import { ExternalLink } from "lucide-react";
import type { Publication } from "@/lib/data";

function formatDate(d?: string) {
  if (!d) return "";
  try {
    return new Date(d).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  } catch {
    return d;
  }
}

export function PublicationsList({ items, limit = 4 }: { items: Publication[]; limit?: number }) {
  const list = items.slice(0, limit);
  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
      {list.map((p) => {
        const href = p.links?.doi || p.links?.arxiv || p.links?.url || "#";
        return (
          <div key={p.slug} className="p-5">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="mt-1 text-sm text-neutral-400">
              {p.venue ? `${p.venue} · ` : ""}{formatDate(p.date)}
            </p>
            <div className="mt-3">
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/10"
              >
                Show publication <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
