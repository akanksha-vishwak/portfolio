import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });


export const metadata: Metadata = {
title: "Akanksha Vishwakarma — Data Scientist",
description: "Portfolio, projects, and writing by Akanksha Vishwakarma (Data Science, ML Engineering).",
metadataBase: new URL("https://example.com"),
openGraph: {
title: "Akanksha Vishwakarma — Data Scientist",
description: "Portfolio, projects, and writing.",
url: "https://example.com",
siteName: "Akanksha Vishwakarma",
type: "website"
}
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en" className={inter.variable}>
<body className="bg-neutral-950 text-neutral-100 antialiased">
<div className="relative min-h-screen">
<Navbar />
<main className="pt-16">{children}</main>
<Footer />
</div>
</body>
</html>
);
}