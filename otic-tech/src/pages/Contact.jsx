import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useSearchParams, Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, CheckCircle, Globe, MessageCircle, Image, ExternalLink } from "lucide-react";
import SectionHeading from "../components/shared/SectionHeading";
import Button from "../components/shared/Button";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const prefillProduct = searchParams.get("product") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: prefillProduct ? `Inquiry About Product: ${prefillProduct}` : "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email format";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-white pt-24 pb-16">
        <Helmet>
          <title>Message Sent | OTIC TECH</title>
        </Helmet>
        <div className="max-w-xl mx-auto px-4 text-center py-20">
          <CheckCircle className="w-16 h-16 text-signal-success mx-auto mb-6" />
          <h1 className="font-display font-bold text-2xl text-ink-900 mb-4">
            Message Sent Successfully
          </h1>
          <p className="font-body text-slate-500 mb-6">
            Thank you for reaching out. Our team typically responds within 24 hours during business days.
          </p>
          <Button variant="primary" to="/">
            Back to Home
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <Helmet>
        <title>Contact Us | OTIC TECH</title>
        <meta name="description" content="Get in touch with OTIC TECH. Our team is here to help with product questions, orders, and support." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading className="mb-10">Contact Us</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <label htmlFor="name" className="block font-body font-medium text-sm text-ink-900 mb-1.5">
                  Name <span className="text-signal-danger">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-card border font-body text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-accent ${
                    errors.name ? "border-signal-danger" : "border-border"
                  }`}
                />
                {errors.name && <p className="mt-1 font-body text-xs text-signal-danger">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block font-body font-medium text-sm text-ink-900 mb-1.5">
                    Email <span className="text-signal-danger">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    className={`w-full px-4 py-3 rounded-card border font-body text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-accent ${
                      errors.email ? "border-signal-danger" : "border-border"
                    }`}
                  />
                  {errors.email && <p className="mt-1 font-body text-xs text-signal-danger">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body font-medium text-sm text-ink-900 mb-1.5">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-card border border-border font-body text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-body font-medium text-sm text-ink-900 mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm((f) => ({ ...f, subject: e.target.value }))}
                  className="w-full px-4 py-3 rounded-card border border-border font-body text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-body font-medium text-sm text-ink-900 mb-1.5">
                  Message <span className="text-signal-danger">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-card border font-body text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-accent resize-y ${
                    errors.message ? "border-signal-danger" : "border-border"
                  }`}
                />
                {errors.message && <p className="mt-1 font-body text-xs text-signal-danger">{errors.message}</p>}
              </div>

              <Button type="submit" variant="primary" className="px-8 py-3">
                Send Message
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-paper-100 rounded-card p-6 space-y-5">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-body font-medium text-sm text-ink-900">Address</p>
                  <p className="font-body text-sm text-slate-500">14335 Ella Blvd, Houston, TX 77014</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-body font-medium text-sm text-ink-900">Phone</p>
                  <p className="font-body text-sm text-slate-500">(555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-body font-medium text-sm text-ink-900">Email</p>
                  <p className="font-body text-sm text-slate-500">support@otictech.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div>
                  <p className="font-body font-medium text-sm text-ink-900">Business Hours</p>
                  <p className="font-body text-sm text-slate-500">Mon–Fri: 9 AM – 7 PM CST</p>
                  <p className="font-body text-sm text-slate-500">Saturday: 10 AM – 5 PM CST</p>
                  <p className="font-body text-sm text-slate-500">Sunday: Closed</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="font-body font-medium text-sm text-ink-900 mb-3">Follow Us</p>
                <div className="flex items-center gap-3">
                  <a href="#" aria-label="Facebook" className="p-2 text-slate-400 hover:text-accent transition-colors duration-150">
                    <Globe className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="Twitter" className="p-2 text-slate-400 hover:text-accent transition-colors duration-150">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="Instagram" className="p-2 text-slate-400 hover:text-accent transition-colors duration-150">
                    <Image className="w-5 h-5" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="p-2 text-slate-400 hover:text-accent transition-colors duration-150">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="font-body font-medium text-sm text-ink-900 mb-3">Map</p>
                <div className="aspect-[16/9] bg-paper-100 rounded-card flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                    <p className="font-mono text-xs text-slate-400">14335 Ella Blvd</p>
                    <p className="font-mono text-xs text-slate-400">Houston, TX 77014</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
