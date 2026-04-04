"use client";

import { siteConfig } from "@/lib/data/site";

export function WhatsAppButton() {
  const href = `https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-2xl text-white shadow-lg transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
      aria-label="Chat on WhatsApp"
      title="WhatsApp"
    >
      <span aria-hidden>💬</span>
    </a>
  );
}
