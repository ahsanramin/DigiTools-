import { Link } from "react-router-dom";

const cols = [
  { title: "Product", links: ["Features", "Pricing", "Templates", "Integrations"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Press"] },
  { title: "Resources", links: ["Documentation", "Help Center", "Community", "Contact"] },
];

const socials = [
  { name: "YouTube", path: "M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" },
  { name: "Facebook", path: "M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" },
  { name: "X", path: "M18.9 2h3.3l-7.2 8.2L23.5 22h-6.6l-5.2-6.8L5.7 22H2.4l7.7-8.8L1.5 2h6.8l4.7 6.2L18.9 2zm-1.2 18h1.8L7.4 3.8H5.5L17.7 20z" },
];

export default function Footer() {
  return (
    <footer className="relative bg-white dark:bg-ink-950 text-slate-600 dark:text-slate-400 pt-20 pb-8 overflow-hidden noise border-t border-slate-100 dark:border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-40 bg-brand-500/10 dark:bg-brand-600/20 blur-3xl rounded-full" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />

      <div className="container-x relative">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 pb-14">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group">
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-800 grid place-items-center text-white font-black shadow-lg group-hover:scale-105 transition-transform">
                D
              </span>
              <span className="text-2xl font-extrabold text-slate-900 dark:text-white">DigiTools</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
            <div className="mt-6 max-w-xs">
              <p className="text-xs font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Get product updates</p>
              <form onSubmit={(e) => e.preventDefault()} className="relative">
                <input type="email" placeholder="you@company.com"
                  className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full pl-5 pr-14 py-3 text-sm outline-none focus:border-brand-500 dark:focus:border-brand-500 focus:bg-white dark:focus:bg-white/10 transition-all"
                />
                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center text-white hover:shadow-[0_0_20px_-2px_rgba(139,92,246,.7)] transition-all">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </button>
              </form>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-slate-900 dark:text-white font-semibold mb-5 text-sm uppercase tracking-wider">{c.title}</h4>
              <ul className="space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <Link to="/" className="group inline-flex items-center gap-1.5 hover:text-brand-500 transition-colors">
                      <span className="w-0 group-hover:w-3 h-px bg-brand-400 transition-all duration-300" />{l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-5 text-sm uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a key={s.name} href="#" aria-label={s.name}
                  className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 grid place-items-center hover:bg-brand-600 hover:border-brand-500 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-slate-600 dark:text-slate-300 hover:text-white"><path d={s.path} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-7 border-t border-slate-100 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} DigiTools. Crafted with care.</p>
          <div className="flex gap-6">
            <Link to="/support" className="hover:text-brand-500 transition-colors">Privacy</Link>
            <Link to="/support" className="hover:text-brand-500 transition-colors">Terms</Link>
            <Link to="/support" className="hover:text-brand-500 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}