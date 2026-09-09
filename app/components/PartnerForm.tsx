"use client";

import { useState, useEffect } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { submitPartnerRegistration } from "../actions/partner";
import SectionReveal from "./SectionReveal";
import StaggerReveal from "./StaggerReveal";
import AnimatedButton from "./AnimatedButton";

interface FormData {
  agency: string;
  name: string;
  email: string;
  phone: string;
  model: string;
  message: string;
  timeToMeet: string;
}

interface FormErrors {
  [key: string]: string;
}

const initialData: FormData = {
  agency: "",
  name: "",
  email: "",
  phone: "",
  model: "",
  message: "",
  timeToMeet: "",
};

const modelOptions = [
  { value: "", label: "Select partnership model" },
  { value: "full-shadow-operator", label: "Full-Stack Shadow Operating — 50/50 Co-Op (Most Popular)" },
  { value: "rev-share-30", label: "Backend Digital Launch — 70% Creator / 30% Shadow Operator" },
  { value: "audit-only", label: "Free 7-Minute Shadow Funnel Audit First" },
];

function getInitialModel(): string {
  if (typeof window === "undefined") return "";
  const hash = window.location.hash;
  const match = hash.match(/[?&]model=([^&]+)/);
  const model = match?.[1];
  return model && modelOptions.some((o) => o.value === model) ? model : "";
}

export default function PartnerForm() {
  const [formData, setFormData] = useState<FormData>(() => ({
    ...initialData,
    model: getInitialModel(),
  }));
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const applyModelFromHash = () => {
      const hash = window.location.hash;
      const match = hash.match(/[?&]model=([^&]+)/);
      const model = match?.[1];
      if (model && modelOptions.some((o) => o.value === model)) {
        setFormData((prev) => ({ ...prev, model }));
      }
      if (hash.match(/[?&]model=/)) {
        const cleanHash = hash.replace(/\?.*$/, "");
        history.replaceState(null, "", cleanHash || "#register");
      }
    };

    applyModelFromHash();
    window.addEventListener("hashchange", applyModelFromHash);
    return () => window.removeEventListener("hashchange", applyModelFromHash);
  }, []);

  const validate = (): boolean => {
    const next: FormErrors = {};

    if (!formData.agency.trim()) {
      next.agency = "Please enter your channel or brand handle";
    }

    if (!formData.name.trim()) {
      next.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      next.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = "Email should be name@domain.com";
    }

    if (!formData.phone.trim()) {
      next.phone = "Please enter your phone or WhatsApp number";
    } else if (!/^\+?[0-9][0-9\s\-()]{6,18}[0-9]$/.test(formData.phone)) {
      next.phone = "Phone number format is not valid";
    }

    if (!formData.model) {
      next.model = "Please choose a partnership model";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    const result = await submitPartnerRegistration(formData);

    if (result.success) {
      setStatus("success");
      setFormData(initialData);
      setStatusMessage(result.warning ?? "");
    } else {
      setStatus("error");
      setStatusMessage(
        result.error ?? "Something went wrong. Please try again or email us directly at hello@phaneos.cloud."
      );
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const inputClasses = (field: keyof FormData) =>
    `w-full rounded-xl border px-4 py-3.5 text-sm bg-slate-900/80 text-white placeholder:text-slate-500 transition-all focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 ${
      errors[field] ? "border-rose-500 ring-2 ring-rose-500/20" : "border-white/10 hover:border-white/20"
    }`;

  return (
    <SectionReveal
      id="register"
      className="relative bg-[var(--color-bg)] py-20 md:py-28"
      snap="relaxed"
    >
      <div className="container-wide w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <StaggerReveal className="max-w-[55ch]">
            <span className="badge-glass mb-4 text-rose-400 font-semibold text-xs uppercase tracking-wider">
              Fast-Track Creator Application
            </span>
            <h2 className="heading-section font-bold leading-[1.12] tracking-tight text-white mb-5">
              Unlock Your Backend Revenue in 14 Days
            </h2>
            <p className="text-section leading-relaxed text-slate-400 mb-8">
              Submit your channel metrics below. We will review your recent content, benchmark your niche's top achievers, and deliver a personalized 7-Minute Shadow Operating Blueprint.
            </p>

            <div className="space-y-4 text-slate-300">
              <p className="flex items-start gap-3 text-sm">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-500/10 p-1 text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 size={16} strokeWidth={2.5} />
                </span>
                <span><strong>Zero Financial Risk:</strong> Pure 20%–50% revenue-share model on newly unlocked revenue. £0 upfront fees.</span>
              </p>
              <p className="flex items-start gap-3 text-sm">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-500/10 p-1 text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 size={16} strokeWidth={2.5} />
                </span>
                <span><strong>100% Brand Ownership:</strong> You retain complete control of your IP, subscribers, and community forever.</span>
              </p>
              <p className="flex items-start gap-3 text-sm">
                <span className="inline-flex items-center justify-center rounded-full bg-emerald-500/10 p-1 text-emerald-400 shrink-0 mt-0.5">
                  <CheckCircle2 size={16} strokeWidth={2.5} />
                </span>
                <span><strong>Full Backstage Execution:</strong> We build the 7-minute VSL, sub-60s filter, digital product, and email engines.</span>
              </p>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-slate-400 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Response SLA: Every creator audit reviewed and prepared within 24 hours.</span>
            </div>
          </StaggerReveal>

          <StaggerReveal staggerIndex={1}>
            <form
              id="partner-form"
              onSubmit={handleSubmit}
              className="glass-card rounded-3xl p-7 md:p-10 border border-white/10 shadow-2xl relative"
              aria-label="Register as a partner"
              noValidate
            >
              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="agency" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
                      Channel or Brand Handle (YouTube / Instagram)
                    </label>
                    <input
                      id="agency"
                      type="text"
                      value={formData.agency}
                      onChange={(e) => updateField("agency", e.target.value)}
                      className={inputClasses("agency")}
                      placeholder="e.g., @JordanPham or youtube.com/@yourchannel"
                      aria-invalid={!!errors.agency}
                      aria-describedby={errors.agency ? "agency-error" : undefined}
                    />
                    {errors.agency && (
                      <p
                        id="agency-error"
                        className="mt-1.5 text-sm text-[var(--color-error)] flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.agency}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className={inputClasses("name")}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="mt-1.5 text-sm text-[var(--color-error)] flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.name}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
                      Creator / Business Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className={inputClasses("email")}
                      placeholder="you@yourbrand.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-1.5 text-sm text-[var(--color-error)] flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
                      WhatsApp / Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className={inputClasses("phone")}
                      placeholder="+1 234 567 890"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p
                        id="phone-error"
                        className="mt-1.5 text-sm text-[var(--color-error)] flex items-center gap-1"
                      >
                        <AlertCircle size={14} />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="model" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
                    Partnership Model Preference
                  </label>
                  <select
                    id="model"
                    value={formData.model}
                    onChange={(e) => updateField("model", e.target.value)}
                    className={`${inputClasses(
                      "model"
                    )} appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2724%27 height=%2724%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27/%3e%3c/svg%3e')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10`}
                    aria-invalid={!!errors.model}
                    aria-describedby={errors.model ? "model-error model-helper" : "model-helper"}
                  >
                    {modelOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <p id="model-helper" className="mt-1.5 text-sm text-[var(--color-muted)]">
                    Zero upfront fees. We only earn when we successfully grow your monthly revenue.
                  </p>
                  {errors.model && (
                    <p
                      id="model-error"
                      className="mt-1.5 text-sm text-[var(--color-error)] flex items-center gap-1"
                    >
                      <AlertCircle size={14} />
                      {errors.model}
                    </p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
                      Monthly Views & Backend Monetization Goals
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className={inputClasses("message")}
                      placeholder="e.g., Averaging 10k–35k views per video. We want to stop relying purely on AdSense and launch our high-margin backend."
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="timeToMeet" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
                      Preferred Time for a 15-Min Shadow Strategy Call
                      <span className="text-[var(--color-muted)] font-normal"> — optional</span>
                    </label>
                    <input
                      id="timeToMeet"
                      type="text"
                      value={formData.timeToMeet}
                      onChange={(e) => updateField("timeToMeet", e.target.value)}
                      className={inputClasses("timeToMeet")}
                      placeholder="e.g., Thursday 2:00 PM EST or ASAP"
                    />
                    <p className="mt-1.5 text-sm text-[var(--color-muted)]">
                      Pick a time for a 15-minute 1-on-1 walkthrough of your customized shadow blueprint.
                    </p>
                  </div>
                </div>

                <AnimatedButton
                  type="submit"
                  disabled={status === "loading"}
                  variant="primary"
                  className="w-full py-4 text-base font-semibold"
                >
                  {status === "loading" && <Loader2 size={18} className="animate-spin" />}
                  {status === "loading" ? "Analyzing your channel..." : "Claim Free Shadow Audit & Apply"}
                </AnimatedButton>
              </div>

              {status === "success" && (
                <div className={`mt-6 rounded-lg p-4 flex items-start gap-3 ${
                  statusMessage
                    ? "bg-[var(--color-warning)]/10 border border-[var(--color-warning)]/20"
                    : "bg-[var(--color-success)]/10 border border-[var(--color-success)]/20"
                }`}>
                  <CheckCircle2 className={`shrink-0 mt-0.5 ${statusMessage ? "text-[var(--color-warning)]" : "text-[var(--color-success)]"}`} size={20} />
                  <div>
                    <p className="font-medium text-[var(--color-ink)]">Creator Application Received!</p>
                    <p className="text-sm text-[var(--color-muted)]">
                      {statusMessage
                        ? statusMessage
                        : "Our shadow operators are analyzing your 10 most recent posts. We will deliver your custom 7-Minute Shadow Operating Blueprint within 24 hours."}
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mt-6 rounded-lg bg-[var(--color-error)]/10 border border-[var(--color-error)]/20 p-4 flex items-start gap-3">
                  <AlertCircle className="text-[var(--color-error)] shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="font-medium text-[var(--color-ink)]">{statusMessage.includes("not configured") ? "Service not ready" : "Something went wrong."}</p>
                    <p className="text-sm text-[var(--color-muted)]">{statusMessage}</p>
                  </div>
                </div>
              )}
            </form>
          </StaggerReveal>
        </div>
      </div>
    </SectionReveal>
  );
}
