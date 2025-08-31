"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/lib/data";

type Props = { items: Experience[] };

export function ExperienceTimeline({ items }: Props) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-white/30 to-transparent" />

      <ul className="space-y-8">
        {items.map((item, idx) => {
          const highlights = item.highlights ?? [];
          const tags = item.tags ?? [];

          return (
            <motion.li
              key={`${item.company}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative pl-10"
            >
              <span
                className="absolute left-3 -translate-x-1/2 top-1.5 h-3 w-3 rounded-full bg-brand-500 shadow-soft"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-baseline gap-x-2">
                <h3 className="text-lg font-semibold">{item.role}</h3>
                <span className="text-neutral-400">· {item.company}</span>
                <span className="text-xs text-neutral-500">({item.period})</span>
              </div>

              {item.summary && (
                <p className="mt-2 text-neutral-300">{item.summary}</p>
              )}

              {highlights.length > 0 && (
                <ul className="mt-3 list-disc pl-5 text-neutral-300 space-y-1">
                  {highlights.map((h, i) => (
                    <li key={`${idx}-h-${i}`}>{h}</li>
                  ))}
                </ul>
              )}

              {tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {tags.map((t, i) => (
                    <span
                      key={`${idx}-t-${i}-${t}`}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-neutral-300 ring-1 ring-white/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
