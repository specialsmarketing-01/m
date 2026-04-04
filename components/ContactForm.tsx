"use client";

import { useState } from "react";

const initial = { name: "", email: "", phone: "", message: "" };

export function ContactForm({ id = "contact-form" }: { id?: string }) {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
      };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  }

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div>
        <label htmlFor={`${id}-name`} className="block text-sm font-medium text-[#0a1628]">
          Name
        </label>
        <input
          id={`${id}-name`}
          name="name"
          required
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#F37021] focus:outline-none focus:ring-2 focus:ring-[#F37021]/30"
        />
      </div>
      <div>
        <label htmlFor={`${id}-email`} className="block text-sm font-medium text-[#0a1628]">
          Email
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#F37021] focus:outline-none focus:ring-2 focus:ring-[#F37021]/30"
        />
      </div>
      <div>
        <label htmlFor={`${id}-phone`} className="block text-sm font-medium text-[#0a1628]">
          Phone
        </label>
        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#F37021] focus:outline-none focus:ring-2 focus:ring-[#F37021]/30"
        />
      </div>
      <div>
        <label htmlFor={`${id}-message`} className="block text-sm font-medium text-[#0a1628]">
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm shadow-sm focus:border-[#F37021] focus:outline-none focus:ring-2 focus:ring-[#F37021]/30"
        />
      </div>
      {status === "success" ? (
        <p className="text-sm font-medium text-emerald-700" role="status">
          Thank you — we received your message and will respond shortly.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm font-medium text-red-700" role="alert">
          {errorMsg}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center rounded-md bg-[#F37021] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#e0651c] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
