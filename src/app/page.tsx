"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, FileDown, Mail } from "lucide-react";
import { projects, experiences, skills, CONTACT } from "@/lib/data";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsGrid } from "@/components/SkillsGrid";
import { ProjectCard } from "@/components/ProjectCard";
import { ContactInfo } from "@/components/ContactInfo";
import { education } from "@/lib/data";
import { EducationTimeline } from "@/components/EducationTimeline";
import { publications } from "@/lib/data";
import { PublicationsList } from "@/components/PublicationsList";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-hero-gradient">
        {/* decorative background blobs (behind everything) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(47,115,255,.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,.2),transparent_35%)]" />

        <div className="container mx-auto max-w-6xl px-6 py-24 relative z-10">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] items-center">
            {/* Left: name, subtitle, actions */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold tracking-tight"
              >
                Akanksha Vishwakarma
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="mt-3 text-xl md:text-2xl text-neutral-200"
              >
                Data Scientist & AI Engineer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="mt-5 text-neutral-300 max-w-2xl"
              >
                I turn messy, high-volume data into production-grade models and useful tools.
                PhD-trained, hands-on with LLMs, deep learning, and analytics.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-5 py-3 text-sm font-semibold shadow-soft hover:bg-brand-400 transition"
                  href="/Akanksha_Vishwakarma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileDown className="h-4 w-4" /> Download Resume
                </a>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/20 transition"
                >
                  <Mail className="h-4 w-4" /> Contact Me
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold ring-1 ring-white/15 hover:bg-white/20 transition"
                >
                  Explore Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>

            {/* Right: photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="justify-self-center md:justify-self-end"
            >
              <div className="relative h-64 w-64 md:h-72 md:w-72 rounded-3xl overflow-hidden ring-1 ring-white/15 shadow-soft bg-white/5">
                <Image
                  src="/profile.png"              // <— put your photo at public/profile.jpg
                  alt="Portrait of Akanksha Vishwakarma"
                  fill
                  sizes="(max-width: 768px) 16rem, 18rem"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="container mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
          <p className="text-neutral-400 mt-2">
            Impact-focused work across AI, LLMs, research, and analytics.
          </p>
        </div>
        <ExperienceTimeline items={experiences} />
      </section>

      {/* Education */}
      <section id="education" className="bg-white/5">
      <div className="container mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Education</h2>
          <p className="text-neutral-400 mt-2">Formal training and research foundations.</p>
        </div>
        <EducationTimeline items={education} />
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
            <p className="text-neutral-400 mt-2">Tools I use to ship reliable data products.</p>
          </div>
          <SkillsGrid skills={skills} /> 
      </section>

      {/* Projects (teasers) */}
      <section id="projects" className="bg-white/5">
      <div className="container mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold">Featured Projects</h2>
          <p className="text-neutral-400 mt-2">A few favorites. See more on the Projects page.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="mt-10">
          <Link href="/projects" className="link-underline text-neutral-300">
            View all projects →
          </Link>
        </div>
        </div>
      </section>

      {/* Selected Publications */}
      <section id="publications" className="container mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Selected Publications</h2>
            <p className="text-neutral-400 mt-2">A few highlights from my research work.</p>
          </div>
          <Link href="/publications" className="link-underline text-neutral-300">View all →</Link>
        </div>
        <PublicationsList items={publications} limit={4} />
      </section>


      {/* Contact */}
      <section id="contact" className="bg-white/5">
        <div className="container mx-auto max-w-6xl px-6 py-20">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Get in touch</h2>
            <p className="text-neutral-400 mt-2">Have a role or idea in mind? I’d love to chat.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Left: info card */}
            <div className="md:col-span-1">
              <ContactInfo />
            </div>

            {/* Right: your existing form */}
            <div className="md:col-span-2">
              <div className="rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget as HTMLFormElement;
                    const formData = new FormData(form);
                    const subject = encodeURIComponent("Hello from your portfolio site");
                    const body = encodeURIComponent(
                      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`
                    );
                    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
                  }}
                  className="grid gap-4 md:grid-cols-2"
                >
                  <div className="md:col-span-1">
                    <label className="block text-sm mb-2">Name</label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-xl bg-neutral-900/60 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-brand-400"
                    />
                  </div>
                  <div className="md:col-span-1">
                    <label className="block text-sm mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-xl bg-neutral-900/60 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-brand-400"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-xl bg-neutral-900/60 px-4 py-3 ring-1 ring-white/10 outline-none focus:ring-brand-400"
                    />
                  </div>
                  <div className="md:col-span-2 flex items-center gap-3">
                    <button
                      type="submit"
                      className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold hover:bg-brand-400 transition"
                    >
                      Send Email
                    </button>
                    <a href={`mailto:${CONTACT.email}`} className="text-sm text-neutral-300 link-underline">
                      or email me directly
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
