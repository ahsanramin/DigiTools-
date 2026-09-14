import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "./ProductCard";
import CartSection from "./CartSection";
import SectionHeading from "./SectionHeading";
import { useCart } from "../context/CartContext";
import ScrollReveal from "./ScrollReveal";

export default function ProductsSection() {
  const [view, setView] = useState("products");
  const { count } = useCart();

  return (
    <section id="products" className="py-20 lg:py-28 bg-white dark:bg-ink-950">
      <div className="container-x">
        <SectionHeading eyebrow="Our Products" title="Premium Digital Tools"
          subtitle="Choose from our curated collection of premium digital products designed to boost your productivity and creativity."
        />

        <ScrollReveal>
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-full bg-slate-100 dark:bg-white/5 ring-1 ring-slate-200/50 dark:ring-white/10">
              <button onClick={() => setView("products")}
                className={`px-7 sm:px-9 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${view === "products" ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-soft" : "text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400"}`}
              >
                Products
              </button>
              <button onClick={() => setView("cart")}
                className={`px-7 sm:px-9 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${view === "cart" ? "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-soft" : "text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400"}`}
              >
                Cart ({count})
              </button>
            </div>
          </div>
        </ScrollReveal>

        {view === "products" ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
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