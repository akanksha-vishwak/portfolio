import Link from "next/link";


export function Footer() {
return (
<footer className="border-t border-white/10 mt-20">
<div className="container mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-400 flex flex-col md:flex-row items-center justify-between gap-3">
<p>© {new Date().getFullYear()} Akanksha Vishwakarma</p>
<div className="flex items-center gap-4">
<Link className="link-underline" href="/privacy">Privacy</Link>
<Link className="link-underline" href="/contact">Contact</Link>
</div>
</div>
</footer>
);
}