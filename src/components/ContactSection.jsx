import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", message: "" });
  };

  const inputCls = "mt-2 w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 dark:focus:ring-brand-500/20 transition-all";

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white dark:bg-ink-950">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-100 dark:bg-brand-500/15 text-brand-700 dark:text-brand-300 text-xs font-semibold uppercase tracking-wide mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Let's talk about your next project
            </h2>
            <p className="mt-5 text-slate-500 dark:text-slate-400 leading-relaxed">
              Have questions about pricing, integrations, or enterprise plans? Reach out and we'll respond within one business day.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: "📧", label: "Email", value: "hello@digitools.io" },
                { icon: "📞", label: "Phone", value: "+1 (555) 012-3456" },
                { icon: "📍", label: "Office", value: "Dhaka · San Francisco · Berlin" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-50 dark:bg-brand-500/15 grid place-items-center text-xl">{c.icon}</div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wide">{c.label}</p>
                    <p className="font-semibold text-slate-900 dark:text-white">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="rounded-3xl border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] p-8 shadow-card">
            <div className="space-y-5">
              <div>
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Your name</label>
                <input name="name" value={form.name} onChange={handle} type="text" placeholder="Jane Doe" className={inputCls} />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Email address</label>
                <input name="email" value={form.email} onChange={handle} type="email" placeholder="jane@company.com" className={inputCls} />
              </div>
              <div>
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-200">Message</label>
                <textarea name="message" value={form.message} onChange={handle} rows={5} placeholder="Tell us how we can help..." className={`${inputCls} resize-none`} />
              </div>
              <button type="submit" className="btn-brand w-full py-3.5 rounded-full font-semibold text-sm">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}