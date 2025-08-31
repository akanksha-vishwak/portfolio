"use client";
import { motion } from "framer-motion";
import type { Education } from "@/lib/data";

export function EducationTimeline({ items }: { items: Education[] }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-white/30 to-transparent" />
      <ul className="space-y-8">
        {items.map((item, idx) => (
          <motion.li
            key={item.institution + idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="relative pl-10"
          >
            <span className="absolute left-3 -translate-x-1/2 top-1.5 h-3 w-3 rounded-full bg-brand-500 shadow-soft" />
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h3 className="text-lg font-semibold">{item.degree}</h3>
              <span className="text-neutral-400">· {item.institution}</span>
              <span className="text-xs text-neutral-500">({item.period})</span>
            </div>
            {item.location && (
              <p className="text-neutral-400 mt-1 text-sm">{item.location}</p>
            )}
            {item.details?.length ? (
              <ul className="mt-3 list-disc pl-5 text-neutral-300 space-y-1">
                {item.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            ) : null}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}