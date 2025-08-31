import Link from "next/link";
import { experiences } from "@/lib/data";

export default function ExperienceIndex() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Experience</h1>
      <ul className="mt-8 space-y-6">
        {experiences.map((e) => (
          <li key={e.slug} className="rounded-2xl border border-white/10 p-5 bg-white/5">
            <Link href={`/experience/${e.slug}`} className="group block">
              <div className="flex items-baseline gap-2">
                <h2 className="text-lg font-semibold group-hover:underline underline-offset-4">
                  {e.role}
                </h2>
                <span className="text-neutral-400">· {e.company}</span>
                <span className="text-xs text-neutral-500 ml-auto">{e.period}</span>
              </div>
              <p className="text-neutral-300 mt-2">{e.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
