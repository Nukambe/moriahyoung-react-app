import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircleIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import PageTransition from "../components/ui/PageTransition";
import PageHeader from "../components/ui/PageHeader";
import Reveal from "../components/ui/Reveal";
import Seo from "../components/ui/Seo";
import Button from "../components/ui/Button";
import Field from "../components/contact/Field";
import Img from "../components/ui/Img";
import SocialLinks from "../components/ui/SocialLinks";
import validateContactForm, { INQUIRY_MAX } from "../lib/validateContactForm";
import { images, site } from "../data/site";

const EMAILJS = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "default_service",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_jflhs1h",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "NJWYuO_Fm2CPh-uly",
};

const EMPTY_FORM = { name: "", email: "", inquiry: "", company: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (field) => (event) => {
    const next = { ...form, [field]: event.target.value };
    setForm(next);
    // Once a field has been flagged, re-validate as the visitor types.
    if (touched[field] || errors[field]) setErrors(validateContactForm(next));
  };

  const blur = (field) => () => {
    setTouched((current) => ({ ...current, [field]: true }));
    setErrors(validateContactForm(form));
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateContactForm(form);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, inquiry: true });
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    // Honeypot — real visitors never see this field.
    if (form.company) {
      setStatus("sent");
      setForm(EMPTY_FORM);
      return;
    }

    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        { name: form.name, email: form.email, inquiry: form.inquiry },
        { publicKey: EMAILJS.publicKey }
      );
      setForm(EMPTY_FORM);
      setTouched({});
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <PageTransition>
      <Seo
        title="Contact"
        description="Book Moriah Young for voice over and on-camera work, or request a custom audition."
      />

      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s make
            <span className="block italic text-gold-300">something good</span>
          </>
        }
        intro="Bookings, auditions, custom demos and live-directed sessions. Tell me about the project and you'll hear back quickly."
      />

      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-24">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <Img
                name={images.headshotCasual}
                alt="Moriah Young"
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="mb-10 hidden w-full rounded-sm object-cover shadow-2xl shadow-black/40 lg:block"
              />
              <p className="eyebrow">Direct</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-4 block font-display text-2xl text-bone-50 transition-colors hover:text-gold-300 sm:text-3xl"
              >
                {site.email}
              </a>
              <p className="mt-6 text-sm leading-relaxed text-bone-400">
                Prefer to skip the form? Email works just as well. For rush
                projects, mention your deadline in the subject line.
              </p>
              <div className="mt-8">
                <SocialLinks />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} noValidate className="space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Name"
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  onBlur={blur("name")}
                  error={errors.name}
                  placeholder="Jordan Rivera"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  onBlur={blur("email")}
                  error={errors.email}
                  placeholder="you@studio.com"
                />
              </div>

              <Field
                id="inquiry"
                label="Project details"
                rows={7}
                value={form.inquiry}
                onChange={update("inquiry")}
                onBlur={blur("inquiry")}
                error={errors.inquiry}
                hint={`${form.inquiry.length} / ${INQUIRY_MAX}`}
                placeholder="Scope, usage, timeline, budget range — whatever you have so far."
              />

              {/* Honeypot */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={update("company")}
                />
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2">
                <Button as="button" type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending…" : "Send inquiry"}
                </Button>

                <div aria-live="polite" className="text-sm">
                  {status === "sent" && (
                    <p className="flex items-center gap-2 text-gold-300">
                      <CheckCircleIcon className="size-5" />
                      Thank you — your message is on its way.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="flex items-center gap-2 text-blush-400">
                      <ExclamationCircleIcon className="size-5" />
                      Something went wrong. Please email me directly.
                    </p>
                  )}
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
