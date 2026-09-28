import { useCart } from "../context/CartContext";
import ScrollReveal from "./ScrollReveal";

export default function CartSection() {
  const { cartItems, removeFromCart, clearCart, total, count } = useCart();

  /* ===========================
     EMPTY STATE
     =========================== */
  if (cartItems.length === 0) {
    return (
      <ScrollReveal>
        <div className="relative rounded-2xl sm:rounded-3xl border-2 border-dashed border-slate-200 dark:border-white/10 bg-gradient-to-b from-slate-50/50 to-white dark:from-white/[0.02] dark:to-transparent p-6 sm:p-14 lg:p-24 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_0%,rgba(139,92,246,.06),transparent_70%)]" />
          <div className="relative">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-brand-100 to-brand-200 dark:from-brand-500/20 dark:to-brand-600/10 grid place-items-center text-3xl sm:text-4xl shadow-lg animate-floaty">
              🛒
            </div>
            <h3 className="mt-5 sm:mt-7 text-lg sm:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white">
              Your cart is empty
            </h3>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-md mx-auto px-4">
              Browse our premium digital tools and add the ones you need.
            </p>
            <a
              href="#products"
              className="inline-block mt-6 sm:mt-8 btn-brand px-6 sm:px-8 py-3 rounded-full font-semibold text-sm"
            >
              Browse Products
            </a>
          </div>
        </div>
      </ScrollReveal>
    );
  }

  /* ===========================
     CART WITH ITEMS
     =========================== */
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
      {/* ITEMS LIST */}
      <div className="lg:col-span-2 space-y-3 sm:space-y-4 min-w-0">
        {cartItems.map((item, i) => (
          <ScrollReveal key={item.id} delay={i * 60}>
            <div className="flex items-start gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border border-slate-100 dark:border-white/5 bg-white dark:bg-white/[0.02] p-3.5 sm:p-5 shadow-card hover:shadow-[0_20px_45px_-20px_rgba(124,58,237,.35)] hover:border-brand-100 dark:hover:border-brand-500/30 transition-all duration-300">
              {/* Icon */}
              <div className="w-11 h-11 sm:w-14 sm:h-14 shrink-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 dark:from-brand-500/15 dark:to-brand-600/10 grid place-items-center text-xl sm:text-2xl">
                {item.icon}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate">
                  {item.name}
                </h4>
                <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5 leading-snug">
                  {item.description}
                </p>
                <p className="text-xs sm:text-[13px] font-semibold text-brand-600 dark:text-brand-400 mt-1.5 whitespace-nowrap">
                  ${item.price}{" "}
                  <span className="text-slate-400 dark:text-slate-500 font-medium">
                    / {item.period}
                  </span>
                </p>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.name}`}
                className="shrink-0 inline-flex items-center justify-center w-8 h-8 sm:w-auto sm:h-auto sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-500/10 hover:bg-rose-100 dark:hover:bg-rose-500/20 transition-all"
              >
                <svg
                  className="w-4 h-4 sm:w-3.5 sm:h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="hidden sm:inline ml-1.5">Remove</span>
              </button>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* ORDER SUMMARY */}
      <aside className="lg:col-span-1 min-w-0">
        <ScrollReveal delay={200}>
          <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white p-5 sm:p-7 shadow-2xl relative overflow-hidden lg:sticky lg:top-28">
            <div className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-brand-600/30 blur-3xl animate-blob" />

            <div className="relative">
              <h3 className="text-lg sm:text-xl font-bold">Order Summary</h3>
              <p className="text-slate-400 text-xs sm:text-sm mt-1">
                Review your selected tools
              </p>

              <div className="mt-5 sm:mt-7 space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center gap-4">
                  <span className="text-slate-400">Products</span>
                  <span className="font-semibold">{count}</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-slate-400">Subtotal</span>
                  <span className="font-semibold whitespace-nowrap">${total}</span>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-slate-400">Tax</span>
                  <span className="font-semibold whitespace-nowrap">$0</span>
                </div>
              </div>

              <div className="mt-5 sm:mt-7 pt-5 sm:pt-7 border-t border-white/10 flex items-end justify-between gap-4">
                <span className="text-slate-400 text-xs sm:text-sm">Total</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-brand-400 tracking-tight whitespace-nowrap">
                  ${total}
                </span>
              </div>

              <button
                onClick={clearCart}
                className="mt-6 sm:mt-8 w-full py-3.5 sm:py-4 rounded-full font-semibold text-sm bg-gradient-to-r from-brand-500 to-brand-700 hover:from-brand-600 hover:to-brand-800 transition-all shadow-[0_15px_40px_-12px_rgba(124,58,237,.8)] hover:-translate-y-0.5"
              >
                Proceed to Checkout
              </button>

              <p className="mt-4 text-[10.5px] sm:text-[11px] text-center text-slate-500">
                🔒 Secure checkout · 30-day money back
              </p>
            </div>
          </div>
        </ScrollReveal>
      </aside>
    </div>
  );
}