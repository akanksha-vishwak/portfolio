import { Metadata } from "next";


export const metadata: Metadata = {
title: "Resume — Akanksha Vishwakarma",
description: "Downloadable resume and full details.",
};


export default function ResumePage() {
return (
<div className="container mx-auto max-w-6xl px-6 py-16">
<h1 className="text-3xl font-semibold">Resume</h1>
<p className="text-neutral-400 mt-2">Download the PDF or view it inline below.</p>


<div className="mt-6 flex gap-3">
<a
className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-5 py-3 text-sm font-semibold shadow-soft hover:bg-brand-400 transition"
href="/Akanksha_Vishwakarma_Resume.pdf"
target="_blank"
rel="noopener noreferrer"
>
Download PDF
</a>
<a className="link-underline text-neutral-300" href="/Akanksha_Vishwakarma_Resume.pdf" download>Save a copy</a>
</div>


<div className="mt-8 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-black/30">
<iframe
src="/Akanksha_Vishwakarma_Resume.pdf#view=FitH"
className="w-full h-[80vh]"
title="Resume PDF"
/>
</div>
</div>
);
}