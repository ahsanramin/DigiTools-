import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import CartSection from "./CartSection";
import SectionHeading from "./SectionHeading";
import { useCart } from "../context/CartContext";
import ScrollReveal from "./ScrollReveal";

export default function ProductsSection() {
  const [view, setView] = useState("products");
  const { count } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  /* =====================================================
     Sync URL hash → view + auto scroll
     #cart      → show cart
     #products  → show products
     ===================================================== */
  useEffect(() => {
    const hash = location.hash.replace("#", "");

    if (hash === "cart" || hash === "products") {
      setView(hash);
      const t = setTimeout(() => {
        document.getElementById("products")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 120);
      return () => clearTimeout(t);
    }
  }, [location.key, location.pathname, location.hash]);

  /* Toggle handler — updates view + URL hash */
  const handleViewChange = (newView) => {
    if (newView === view) return;
    setView(newView);
    navigate(`#${newView}`, { replace: true });
  };

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-ink-950">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Products"
          title="Premium Digital Tools"
          subtitle="Choose from our curated collection of premium digital products designed to boost your productivity and creativity."
        />

        {/* Toggle */}
        <ScrollReveal>
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="inline-flex p-1 sm:p-1.5 rounded-full bg-slate-100 dark:bg-white/5 ring-1 ring-slate-200/50 dark:ring-white/10">
              <button
                onClick={() => handleViewChange("products")}
                className={`px-5 sm:px-9 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  view === "products"
                    ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-soft"
                    : "text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400"
                }`}
              >
                Products
              </button>
              <button
                onClick={() => handleViewChange("cart")}
                className={`px-5 sm:px-9 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                  view === "cart"
                    ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-soft"
                    : "text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400"
                }`}
              >
                Cart ({count})
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        {view === "products" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {products.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 60}>
                <ProductCard product={p} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <CartSection />
        )}
      </div>
    </section>
  );
}