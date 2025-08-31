import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { experiences } from "@/lib/data";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const e = experiences.find((x) => x.slug === params.slug);
  return {
    title: e ? `${e.role} — ${e.company}` : "Experience",
    description: e?.summary,
  };
}

export default function ExperienceDetail({
  params,
}: {
  params: { slug: string };
}) {
  const e = experiences.find((x) => x.slug === params.slug);
  if (!e) return notFound();

  return (
    <div className="container mx-auto max-w-3xl px-6 py-16">
      <Link href="/#experience" className="text-sm text-neutral-400 link-underline">
        ← Back to Experience
      </Link>

      <h1 className="mt-4 text-3xl font-semibold">{e.role}</h1>
      <p className="text-neutral-400 mt-1">
        {e.company} · <span className="text-neutral-500">{e.period}</span>
      </p>

      <p className="mt-6 text-neutral-200">{e.summary}</p>

      {e.highlights?.length ? (
        <>
          <h2 className="mt-8 text-xl font-semibold">Highlights</h2>
          <ul className="mt-3 list-disc pl-5 text-neutral-300 space-y-1">
            {e.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </>
      ) : null}

      {e.details?.length ? (
        <>
          <h2 className="mt-8 text-xl font-semibold">Details</h2>
          <ul className="mt-3 list-disc pl-5 text-neutral-300 space-y-1">
            {e.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </>
      ) : null}

      {e.tags?.length ? (
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-neutral-300">Tools & Tech</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {e.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300 ring-1 ring-white/15"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {e.links?.length ? (
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-neutral-300">References</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            {e.links.map((l, i) => (
              <a
                key={i}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="link-underline text-neutral-300"
              >
                {l.label} →
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-12">
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold hover:bg-brand-400 transition"
        >
          Like this work? Contact me
        </Link>
      </div>
    </div>
  );
}
