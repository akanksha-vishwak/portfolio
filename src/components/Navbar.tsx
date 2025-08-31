"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";


const links = [
{ href: "/", label: "Home" },
{ href: "/#experience", label: "Experience" },
{ href: "/#education", label: "Education" },
{ href: "/#skills", label: "Skills" },
{ href: "/projects", label: "Projects" },
{ href: "/publications", label: "Publications" },
{ href: "/blog", label: "Blog" },
{ href: "/resume", label: "Resume" },
{ href: "/contact", label: "Contact" },
];


export function Navbar() {
const [open, setOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);


useEffect(() => {
const onScroll = () => setScrolled(window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll);
return () => window.removeEventListener("scroll", onScroll);
}, []);


return (
<header className={`fixed top-0 inset-x-0 z-50 transition ${scrolled ? "backdrop-blur bg-black/40 ring-1 ring-white/10" : "bg-transparent"}`}>
<div className="container mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
<Link href="/" className="font-semibold tracking-tight">AV</Link>
<nav className="hidden md:flex items-center gap-6 text-sm">
{links.map(l => (
<Link key={l.href} href={l.href} className="text-neutral-300 hover:text-white transition link-underline">{l.label}</Link>
))}
</nav>
<button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Open menu">
{open ? <X /> : <Menu />}
</button>
</div>
{open && (
<div className="md:hidden border-t border-white/10 bg-neutral-950">
<nav className="container mx-auto max-w-6xl px-4 py-3 grid gap-3">
{links.map(l => (
<Link key={l.href} href={l.href} className="text-neutral-300 hover:text-white transition" onClick={() => setOpen(false)}>{l.label}</Link>
))}
</nav>
</div>
)}
</header>
);
}