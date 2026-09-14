import { useCart } from "../context/CartContext";
import ScrollReveal from "./ScrollReveal";

export default function CartSection() {
  const { cartItems, removeFromCart, clearCart, total, count } = useCart();

  if (cartItems.length === 0) {
    return (
      <ScrollReveal>
        <div className="relative rounded-3xl border-2 border-dashed border-slate-200 dark:border-white/10 bg-gradient-to-b from-slate-50/50 to-white dark:from-white/[0.02] dark:to-transparent p-14 sm:p-24 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(139,92,246,.06),transparent_70%)]" />
          <div className="relative">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-500/20 dark:to-brand-600/10 grid place-items-center text-4xl shadow-lg animate-floaty">
              🛒
            </div>
            <h3 className="mt-7 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Your cart is empty</h3>
            <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Browse our premium digital tools and add the ones you need.
            </p>
            <a href="#products" className="inline-block mt-8 btn-brand px-8 py-3 rounded-full font-semibold text-sm">
              Browse Products
            </a>
          </div>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-4">
        {cartItems.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 60}>
            <div className="group flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-slate-100 dark:border-white/5 bg-white dark:bg-white/[0.02] p-5 shadow-card hover:shadow-[0_20px_45px_-20px_rgba(124,58,237,.35)] hover:border-brand-100 dark:hover:border-brand-500/30 transition-all duration-300">
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-500/15 dark:to-brand-600/10 grid place-items-center text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900 dark:text-white truncate">{item.name}</h4>
                  <p className="text-[13px] text-slate-500 dark:text-slate-400 truncate">{item.description}</p>
                  <p className="text-[13px] font-semibold text-brand-600 dark:text-brand-400 mt-1">
                    ${item.price} <span className="text-slate-400 dark:text-slate-500 font-medium">/ {item.period}</span>
                  </p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)}
                className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                Remove
              </button>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <aside className="lg:col-span-1">
        <ScrollReveal delay={200}>
          <div className="sticky top-28 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white p-7 shadow-2xl overflow-hidden relative">
            <div className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-brand-600/30 blur-3xl animate-blob" />
            <div className="relative">
              <h3 className="text-xl font-bold">Order Summary</h3>
              <p className="text-slate-400 text-sm mt-1">Review your selected tools</p>

              <div className="mt-7 space-y-3.5 text-sm">
                <div className="flex justify-between"><span className="text-slate-400">Products</span><span className="font-semibold">{count}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Subtotal</span><span className="font-semibold">${total}</span></div>
                <div className="flex justify-between"><span className="text-slate-400">Tax</span><span className="font-semibold">$0</span></div>
              </div>

              <div className="mt-7 pt-7 border-t border-white/10 flex items-end justify-between">
                <span className="text-slate-400 text-sm">Total</span>
                <span className="text-3xl font-extrabold text-brand-400 tracking-tight">${total}</span>
              </div>

              <button onClick={clearCart}
                className="mt-8 w-full py-4 rounded-full font-semibold text-sm bg-gradient-to-r from-brand-500 to-brand-700 hover:from-brand-600 hover:to-brand-800 transition-all shadow-[0_15px_40px_-12px_rgba(124,58,237,.8)] hover:-translate-y-0.5"
              >
                Proceed to Checkout
              </button>

              <p className="mt-4 text-[11px] text-center text-slate-500">🔒 Secure checkout · 30-day money back</p>
            </div>
          </div>
        </ScrollReveal>
      </aside>
    </div>
  );
}