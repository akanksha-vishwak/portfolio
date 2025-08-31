"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Github, Eye } from "lucide-react";
import { CONTACT } from "@/lib/data";

export function ContactInfo() {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <aside className="rounded-2xl border border-white/10 p-6 bg-white/5">
      <h3 className="text-lg font-semibold">Contact Information</h3>

      <ul className="mt-4 space-y-3 text-sm">
        <li className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-brand-400" />
          <a href={`mailto:${CONTACT.email}`} className="link-underline">
            {CONTACT.email}
          </a>
        </li>

        {CONTACT.phone && (
          <li className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-brand-400" />
            {showPhone ? (
              <a href={`tel:${CONTACT.phone}`} className="link-underline">
                {CONTACT.phone}
              </a>
            ) : (
              <button
                type="button"
                onClick={() => setShowPhone(true)}
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-neutral-300 ring-1 ring-white/15 hover:bg-white/10"
                aria-label="Reveal phone number"
              >
                <Eye className="h-4 w-4" /> Reveal number
              </button>
            )}
          </li>
        )}

        {CONTACT.location && (
          <li className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-brand-400" />
            <span>{CONTACT.location}</span>
          </li>
        )}
      </ul>

      <div className="mt-6">
        <h4 className="text-sm font-semibold text-neutral-300">Connect With Me</h4>
        <div className="mt-3 flex gap-2">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-white/15 hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          {CONTACT.github && (
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-white/15 hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}
