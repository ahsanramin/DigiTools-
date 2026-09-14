import ContactSection from "../components/ContactSection";
import FAQ from "../components/FAQ";
import ScrollReveal from "../components/ScrollReveal";

export default function Contact() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50 dark:from-brand-950/40 to-white dark:to-ink-950 py-16 lg:py-24 overflow-hidden noise">
        <div className="absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-brand-300/30 dark:bg-brand-600/20 blur-3xl animate-blob" />
        <div className="container-x text-center max-w-3xl relative">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Get in <span className="text-gradient">Touch</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="mt-6 text-slate-500 dark:text-slate-400 text-lg">
              We'd love to hear from you. Whether it's a question, a feature request, or just a hello.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <ContactSection />
      <FAQ />
    </>
  );
}