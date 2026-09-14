import { useCart } from "../context/CartContext";
import { tagStyles } from "../data/products";

export default function ProductCard({ product }) {
  const { addToCart, isInCart } = useCart();
  const inCart = isInCart(product.id);
  const badge = tagStyles[product.tagType] ?? tagStyles.popular;

  return (
    <article className="group relative flex flex-col rounded-3xl border border-slate-100 dark:border-white/5 bg-white dark:bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-transparent hover:shadow-[0_35px_70px_-25px_rgba(124,58,237,.45)] dark:hover:shadow-[0_35px_70px_-25px_rgba(139,92,246,.5)] grad-border overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(400px_circle_at_50%_0%,rgba(139,92,246,.08),transparent_70%)]" />

      <div className="relative flex items-start justify-between">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-500/15 dark:to-brand-600/10 grid place-items-center text-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-sm">
          <span>{product.icon}</span>
        </div>
        <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase ${badge}`}>{product.tag}</span>
      </div>

      <h3 className="relative mt-5 text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors">{product.name}</h3>
      <p className="relative mt-2 text-[13.5px] text-slate-500 dark:text-slate-400 leading-relaxed min-h-[48px]">{product.description}</p>

      <div className="relative mt-5 flex items-end gap-1">
        <span className="text-[2rem] font-extrabold text-slate-900 dark:text-white tracking-tight">${product.price}</span>
        <span className="text-[13px] text-slate-400 dark:text-slate-500 mb-1.5 font-medium">/{product.period}</span>
      </div>

      <div className="relative my-5 hairline dark:opacity-30" />

      <ul className="relative space-y-3 flex-1">
        {product.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-slate-600 dark:text-slate-300">
            <span className="w-4 h-4 mt-0.5 shrink-0 rounded-full bg-brand-100 dark:bg-brand-500/20 grid place-items-center">
              <svg className="w-2.5 h-2.5 text-brand-700 dark:text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            {f}
          </li>
        ))}
      </ul>

      <button onClick={() => addToCart(product)} disabled={inCart}
        className={`relative mt-7 w-full py-3.5 rounded-full font-semibold text-sm transition-all duration-300 overflow-hidden group/btn ${
          inCart
            ? "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 cursor-not-allowed"
            : "btn-brand"
        }`}
      >
        {inCart ? (
          <span className="inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            Added to Cart
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            Buy Now
            <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        )}
      </button>
    </article>
  );
}