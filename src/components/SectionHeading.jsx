import ScrollReveal from "./ScrollReveal";

export default function SectionHeading({
  eyebrow, title, subtitle, center = true, dark = false,
}) {
  return (
    <ScrollReveal className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-14 sm:mb-16`}>
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase mb-5 ${
            dark
              ? "bg-white/10 text-brand-300 ring-1 ring-white/15"
              : "bg-brand-50 text-brand-700 ring-1 ring-brand-100 dark:bg-brand-500/10 dark:text-brand-300 dark:ring-brand-500/20"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${dark ? "bg-brand-400" : "bg-brand-500"} animate-pulse`} />
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold leading-[1.08] ${dark ? "text-white" : "text-slate-900 dark:text-white"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-base sm:text-lg leading-relaxed ${dark ? "text-slate-400" : "text-slate-500 dark:text-slate-400"}`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}