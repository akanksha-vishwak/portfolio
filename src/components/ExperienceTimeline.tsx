"use client";
import { motion } from "framer-motion";
import type { Experience } from "@/lib/data";
import Link from "next/link";

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-white/30 to-transparent" />

      <ul className="space-y-8">
        {items.map((item, idx) => (
          <motion.li
            key={`${item.company}-${item.role}-${idx}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="relative pl-10"
          >
            {/* dot centered on the line */}
            <span className="absolute left-3 -translate-x-1/2 top-1.5 h-3 w-3 rounded-full bg-brand-500 shadow-soft" />

            {/* header */}
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h3 className="text-lg font-semibold">{item.role}</h3>
              <span className="text-neutral-400">· {item.company}</span>
              <span className="text-xs text-neutral-500">({item.period})</span>
            </div>

            {/* short summary */}
            <p className="text-neutral-300 mt-2">{item.summary}</p>

            {/* short bullets */}
            {item.highlights?.length ? (
              <ul className="mt-3 list-disc pl-5 text-neutral-300 space-y-1">
                {item.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            ) : null}

            {/* tags */}
            {item.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300 ring-1 ring-white/15"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}

            {/* link to full page */}
            <div className="mt-4">
              <Link
                href={`/experience/${item.slug}`}
                className="text-sm link-underline text-neutral-300"
              >
                View full role →
              </Link>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
