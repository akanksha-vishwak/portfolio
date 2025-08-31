"use client";
import { motion } from "framer-motion";
import type { Skills } from "@/lib/data";


export function SkillsGrid({ skills }: { skills: Skills }) {
const groups = Object.entries(skills);
return (
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{groups.map(([group, items], idx) => (
<motion.div
key={group}
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.35, delay: idx * 0.05 }}
className="rounded-2xl border border-white/10 p-5 backdrop-blur bg-white/5"
>
<h3 className="font-semibold">{group}</h3>
<div className="mt-3 flex flex-wrap gap-2">
{items.map((s) => (
<span key={s} className="rounded-full bg-neutral-900/70 px-3 py-1 text-xs ring-1 ring-white/10 text-neutral-300">{s}</span>
))}
</div>
</motion.div>
))}
</div>
);
}