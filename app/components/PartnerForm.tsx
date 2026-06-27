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
  { value: "", label: "Choose a model" },
  { value: "referral", label: "Referral — 12% commission" },
  { value: "co-selling", label: "Co-selling — 25% commission" },
  { value: "both", label: "Both — decide per client" },
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
      next.agency = "Please enter your agency name";
    }

    if (!formData.name.trim()) {
      next.name = "Please enter your full name";
    }

    if (!formData.email.trim()) {
      next.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      next.email = "Email should be name@company.com";
    }

    if (!formData.phone.trim()) {
      next.phone = "Please enter your phone number";
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
    `w-full rounded-md border px-4 py-3 text-base bg-[var(--color-bg)] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] transition-colors focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 ${
      errors[field] ? "border-[var(--color-error)]" : "border-[var(--color-muted)]/50"
    }`;

  return (
    <SectionReveal
      id="register"
      className="relative bg-[var(--color-bg)] flex items-center"
      snap="relaxed"
    >
      <div className="container-wide py-16 md:py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <StaggerReveal className="max-w-[55ch]">
            <h2 className="section-heading heading-section font-bold leading-[1.15] tracking-[-0.02em] text-[var(--color-ink)] text-balance mb-5">
              Start in five minutes
            </h2>
            <p className="section-heading text-section leading-[1.65] text-[var(--color-muted)] mb-8">
              Fill out the form. We will send partner docs and propose a meeting if it feels like a fit. No commitment, no hidden fees.
            </p>

            <div className="space-y-4 text-[var(--color-muted)]">
              <p className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary-subtle)] p-1 text-[var(--color-primary)] shrink-0 mt-0.5">
                  <CheckCircle2 size={16} strokeWidth={3} />
                </span>
                <span>Service overview to share with clients</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary-subtle)] p-1 text-[var(--color-primary)] shrink-0 mt-0.5">
                  <CheckCircle2 size={16} strokeWidth={3} />
                </span>
                <span>Email intro templates and pitch slides</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary-subtle)] p-1 text-[var(--color-primary)] shrink-0 mt-0.5">
                  <CheckCircle2 size={16} strokeWidth={3} />
                </span>
                <span>1:1 support on your first co-sale</span>
              </p>
            </div>
          </StaggerReveal>

          <StaggerReveal staggerIndex={1}>
            <form
              id="partner-form"
              onSubmit={handleSubmit}
              className="bg-[var(--color-surface)] rounded-xl p-6 md:p-8"
              aria-label="Register as a partner"
              noValidate
            >
              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="agency" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
                      Agency name
                    </label>
                    <input
                      id="agency"
                      type="text"
                      value={formData.agency}
                      onChange={(e) => updateField("agency", e.target.value)}
                      className={inputClasses("agency")}
                      placeholder="e.g., Clever Agency"
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
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className={inputClasses("email")}
                      placeholder="you@agency.com"
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
                      Phone number
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
                    Partnership model
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
                    You can change this for each client later. No commitment now.
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
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className={inputClasses("message")}
                      placeholder="How do you want to partner? Any potential clients in mind?"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="timeToMeet" className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
                      Preferred time to meet
                      <span className="text-[var(--color-muted)] font-normal"> — optional</span>
                    </label>
                    <input
                      id="timeToMeet"
                      type="text"
                      value={formData.timeToMeet}
                      onChange={(e) => updateField("timeToMeet", e.target.value)}
                      className={inputClasses("timeToMeet")}
                      placeholder="e.g., Monday 10:00 AM or 2026-07-01 14:00"
                    />
                    <p className="mt-1.5 text-sm text-[var(--color-muted)]">
                      Let us know a convenient time for a 15-minute intro call.
                    </p>
                  </div>
                </div>

                <AnimatedButton
                  type="submit"
                  disabled={status === "loading"}
                  variant="primary"
                  className="w-full py-4"
                >
                  {status === "loading" && <Loader2 size={18} className="animate-spin" />}
                  {status === "loading" ? "Submitting..." : "Send partner registration"}
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
                    <p className="font-medium text-[var(--color-ink)]">Registration received.</p>
                    <p className="text-sm text-[var(--color-muted)]">
                      {statusMessage
                        ? statusMessage
                        : "We will reply within 24 hours with partner docs and proposed meeting times."}
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
