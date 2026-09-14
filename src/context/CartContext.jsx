import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext(null);
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
};

const STORAGE_KEY = "digitools-cart-v1";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
    } catch {}
  }, [cartItems]);

  const isInCart = (id) => cartItems.some((i) => i.id === id);

  const addToCart = (product) => {
    if (isInCart(product.id)) {
      toast.info(`${product.name} is already in your cart`);
      return;
    }
    setCartItems((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart! 🛒`);
  };

  const removeFromCart = (id) => {
    const item = cartItems.find((i) => i.id === id);
    setCartItems((prev) => prev.filter((i) => i.id !== id));
    toast.error(`${item?.name ?? "Item"} removed from cart`);
  };

  const clearCart = () => {
    if (cartItems.length === 0) {
      toast.warning("Your cart is already empty");
      return;
    }
    setCartItems([]);
    toast.success("Checkout complete! Cart cleared. 🎉");
  };

  const { total, count } = useMemo(
    () => ({
      total: cartItems.reduce((s, i) => s + Number(i.price || 0), 0),
      count: cartItems.length,
    }),
    [cartItems]
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, isInCart, total, count }}
    >
      {children}
    </CartContext.Provider>
  );
};