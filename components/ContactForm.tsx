"use client";

import { useMemo, useState } from "react";
import { Send } from "lucide-react";

type ContactFormProps = {
  id?: string;
  compact?: boolean;
  title?: string;
  source?: "home_hero" | "home_banner" | "contact_page";
};

type ApiState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

export function ContactForm({
  id,
  compact,
  title,
  source = "home_hero",
}: ContactFormProps) {
  const [state, setState] = useState<ApiState>({ status: "idle" });
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const canSubmit = useMemo(() => {
    return Boolean(form.name.trim() && form.phone.trim());
  }, [form.name, form.phone]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) {
      setState({
        status: "error",
        message: "Please enter your name and phone number.",
      });
      return;
    }

    try {
      setState({ status: "loading" });
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source }),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send. Please try again.");
      }

      setState({
        status: "success",
        message: "Thanks! We’ll contact you shortly to book your site visit.",
      });
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch (err) {
      setState({
        status: "error",
        message:
          err instanceof Error ? err.message : "Something went wrong. Try again.",
      });
    }
  }

  return (
    <div
      id={id}
      className={`glass-panel gold-border bg-navy-900/70 p-4 sm:p-5 ${
        compact ? "" : "lg:p-6"
      }`}
    >
      <div className="mb-4 space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
          {title ?? (compact ? "Get a Call Back" : "Schedule a Site Visit")}
        </p>
        <p className="text-xs text-slate-300">
          Share your details and we’ll reach out with pricing, plans, and visit
          slots.
        </p>
      </div>

      <form onSubmit={onSubmit} className="grid gap-3">
        <div className={`grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
          <input
            className="h-10 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-gold-500/60 focus:outline-none"
            placeholder="Full name*"
            value={form.name}
            onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
          />
          <input
            className="h-10 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-gold-500/60 focus:outline-none"
            placeholder="Phone number*"
            value={form.phone}
            onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
          />
        </div>

        <input
          className="h-10 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-gold-500/60 focus:outline-none"
          placeholder="Email (optional)"
          value={form.email}
          onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
        />

        {!compact && (
          <textarea
            rows={4}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-gold-500/60 focus:outline-none"
            placeholder="Message (optional)"
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
          />
        )}

        <button
          type="submit"
          disabled={state.status === "loading"}
          className="btn-gold-solid w-full justify-center"
        >
          <Send className="mr-2 h-4 w-4" />
          {state.status === "loading" ? "Sending..." : "Send Enquiry"}
        </button>

        {state.status === "success" && (
          <p className="text-xs text-emerald-300">{state.message}</p>
        )}
        {state.status === "error" && (
          <p className="text-xs text-rose-300">{state.message}</p>
        )}
      </form>
    </div>
  );
}

