import Link from "next/link";
import { CONTACT } from "@/lib/data";
import { Mail, Linkedin } from "lucide-react";


export default function ContactPage() {
return (
<div className="container mx-auto max-w-3xl px-6 py-16">
<h1 className="text-3xl font-semibold">Contact</h1>
<p className="text-neutral-400 mt-2">I usually reply within a day.</p>
<div className="mt-8 space-y-3">
<a className="inline-flex items-center gap-2 link-underline" href={`mailto:${CONTACT.email}`}><Mail className="h-4 w-4" /> {CONTACT.email}</a>
<a className="inline-flex items-center gap-2 link-underline" href={CONTACT.linkedin} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /> LinkedIn</a>
</div>
<div className="mt-10">
<Link href="/#contact" className="rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold hover:bg-brand-400 transition">Use the contact form</Link>
</div>
</div>
);
}