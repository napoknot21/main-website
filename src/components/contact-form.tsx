"use client"

import React, { useState, useCallback } from "react"
import { useLanguage } from "@/lib/language-context"
import { Send, Check, AlertCircle, RefreshCw, Loader2 } from "lucide-react"

function generateCaptcha(): { question: string; answer: number } {
  const a = Math.floor(Math.random() * 10) + 1
  const b = Math.floor(Math.random() * 10) + 1
  return { question: `${a} + ${b} = ?`, answer: a + b }
}

interface FormData {
  context: string
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  profile: string
  message: string
}

const initialFormData: FormData = {
  context: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  profile: "",
  message: "",
}

export default function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [captcha, setCaptcha] = useState(generateCaptcha)
  const [captchaInput, setCaptchaInput] = useState("")
  const [errors, setErrors] = useState<Partial<Record<keyof FormData | "captcha", string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState("")

  const refreshCaptcha = useCallback(() => {
    setCaptcha(generateCaptcha())
    setCaptchaInput("")
  }, [])

  const contexts = [
    { value: "customer", labelKey: "contact.form.ctx.customer" },
    { value: "press", labelKey: "contact.form.ctx.press" },
    { value: "candidacy", labelKey: "contact.form.ctx.candidacy" },
    { value: "other", labelKey: "contact.form.ctx.other" },
  ]

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => { const next = { ...prev }; delete next[field]; return next })
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData | "captcha", string>> = {}
    if (!formData.context) newErrors.context = t("contact.form.error.required")
    if (!formData.firstName.trim()) newErrors.firstName = t("contact.form.error.required")
    if (!formData.lastName.trim()) newErrors.lastName = t("contact.form.error.required")
    if (!formData.email.trim()) {
      newErrors.email = t("contact.form.error.required")
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("contact.form.error.email")
    }
    if (!formData.message.trim()) newErrors.message = t("contact.form.error.required")
    if (!captchaInput.trim()) {
      newErrors.captcha = t("contact.form.error.required")
    } else if (Number.parseInt(captchaInput, 10) !== captcha.answer) {
      newErrors.captcha = t("contact.form.error.captcha")
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSendError("")
    if (!validate()) return
    setSending(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Failed to send message")
      }
      setSubmitted(true)
    } catch (err) {
      setSendError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent mb-6">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-3">
          {t("contact.form.success.title")}
        </h3>
        <p className="text-muted-foreground max-w-md leading-relaxed">
          {t("contact.form.success.message")}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-7" noValidate>

      {/* Context */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">
          {t("contact.form.context")} <span className="text-destructive">*</span>
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {contexts.map((ctx) => (
            <button
              key={ctx.value}
              type="button"
              onClick={() => handleChange("context", ctx.value)}
              className={`px-4 py-3 text-sm rounded-md border transition-all ${
                formData.context === ctx.value
                  ? "border-accent bg-accent/10 text-accent font-medium"
                  : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground"
              }`}
            >
              {t(ctx.labelKey)}
            </button>
          ))}
        </div>
        {errors.context && <FieldError msg={errors.context} />}
      </div>

      <div className="h-px bg-border" />

      <h3 className="text-base font-semibold text-foreground -mb-2">
        {t("contact.form.details")}
      </h3>

      {/* Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label={t("contact.form.firstName")} required
          value={formData.firstName} onChange={(v) => handleChange("firstName", v)}
          error={errors.firstName} placeholder={t("contact.form.firstName.placeholder")}
        />
        <FormField
          label={t("contact.form.lastName")} required
          value={formData.lastName} onChange={(v) => handleChange("lastName", v)}
          error={errors.lastName} placeholder={t("contact.form.lastName.placeholder")}
        />
      </div>

      {/* Email + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label={t("contact.form.email")} required type="email"
          value={formData.email} onChange={(v) => handleChange("email", v)}
          error={errors.email} placeholder={t("contact.form.email.placeholder")}
        />
        <FormField
          label={t("contact.form.phone")}
          value={formData.phone} onChange={(v) => handleChange("phone", v)}
          placeholder={t("contact.form.phone.placeholder")}
        />
      </div>

      {/* Country + Profile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField
          label={t("contact.form.country")}
          value={formData.country} onChange={(v) => handleChange("country", v)}
          placeholder={t("contact.form.country.placeholder")}
        />
        {/* Profile select */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {t("contact.form.profile")}
          </label>
          <select
            value={formData.profile}
            onChange={(e) => handleChange("profile", e.target.value)}
            className="w-full px-4 py-3 text-sm bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors"
          >
            <option value="">{t("contact.form.profile.placeholder")}</option>
            <option value="professional">{t("client.professional")}</option>
            <option value="non_professional">{t("client.non_professional")}</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          {t("contact.form.message")} <span className="text-destructive">*</span>
        </label>
        <textarea
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          rows={5}
          className="w-full px-4 py-3 text-sm bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
          placeholder={t("contact.form.message.placeholder")}
        />
        {errors.message && <FieldError msg={errors.message} />}
      </div>

      <div className="h-px bg-border" />

      {/* Captcha */}
      <div>
        <label className="block text-sm font-semibold text-foreground mb-3">
          {t("contact.form.captcha")} <span className="text-destructive">*</span>
        </label>
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-3 bg-muted px-5 py-3 rounded-md border border-border">
            <span className="text-lg font-semibold text-foreground tracking-widest select-none font-mono">
              {captcha.question}
            </span>
          </div>
          <button
            type="button"
            onClick={refreshCaptcha}
            className="flex items-center justify-center h-10 w-10 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
            aria-label="Refresh captcha"
          >
            <RefreshCw className="h-4 w-4" />
          </button>
          <input
            type="text"
            inputMode="numeric"
            value={captchaInput}
            onChange={(e) => {
              setCaptchaInput(e.target.value)
              if (errors.captcha) setErrors((prev) => { const next = { ...prev }; delete next.captcha; return next })
            }}
            className="w-24 px-4 py-3 text-sm bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors text-center"
            placeholder="?"
          />
        </div>
        {errors.captcha && <FieldError msg={errors.captcha} />}
      </div>

      {sendError && (
        <div className="px-4 py-3 bg-destructive/10 border border-destructive/20 rounded-md text-sm text-destructive">
          {sendError}
        </div>
      )}

      <div className="pt-1">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground text-sm font-medium px-8 py-3.5 rounded-md hover:bg-primary/90 transition-colors group disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {sending ? (
            <><Loader2 className="h-4 w-4 animate-spin" />{t("contact.form.sending")}</>
          ) : (
            <>{t("contact.form.submit")}<Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" /></>
          )}
        </button>
      </div>
    </form>
  )
}

function FormField({
  label, required, type = "text", value, onChange, error, placeholder,
}: {
  label: string; required?: boolean; type?: string
  value: string; onChange: (v: string) => void; error?: string; placeholder?: string
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-2">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className={`w-full px-4 py-3 text-sm bg-background border rounded-md text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors ${error ? "border-destructive" : "border-border"}`}
        placeholder={placeholder}
      />
      {error && <FieldError msg={error} />}
    </div>
  )
}

function FieldError({ msg }: { msg: string }) {
  return (
    <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
      <AlertCircle className="h-3 w-3" /> {msg}
    </p>
  )
}
