import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "../context/CartContext";
import formatCurrency from "../utils/formatCurrency";
import Button from "../components/shared/Button";
import SectionHeading from "../components/shared/SectionHeading";

export default function Cart() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCart();
  const shipping = subtotal >= 500 ? 0 : 29;
  const tax = subtotal * 0.0825;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-white pt-24 pb-16">
        <Helmet><title>Cart | OTIC TECH</title></Helmet>
        <div className="max-w-7xl mx-auto px-4 text-center py-20">
          <ShoppingBag className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h1 className="font-display font-semibold text-2xl text-ink-900 mb-3">Your cart is empty</h1>
          <p className="font-body text-slate-500 mb-6">Looks like you haven't added anything yet.</p>
          <Button variant="primary" to="/products">Shop Products</Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <Helmet><title>Cart | OTIC TECH</title></Helmet>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeading className="mb-8">Cart</SectionHeading>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.productId} className="flex gap-4 p-4 border border-border rounded-card">
                <div className="w-24 h-24 rounded-card overflow-hidden bg-paper-100 shrink-0">
                  {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />}
                </div>
                <div className="flex-1">
                  <Link to={`/products/${item.productId}`} className="font-display font-semibold text-sm text-ink-900 hover:text-accent transition-colors">
                    {item.name}
                  </Link>
                  <p className="font-mono text-sm text-slate-500 mt-1">{formatCurrency(item.price)}</p>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center border border-border rounded-card">
                      <button onClick={() => { if (item.quantity <= 1) removeItem(item.productId); else updateQuantity(item.productId, item.quantity - 1); }} className="p-2 text-slate-400 hover:text-ink-900 transition-colors"><Minus className="w-3.5 h-3.5" /></button>
                      <span className="px-3 font-mono text-sm text-ink-900">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.productId, item.quantity + 1)} className="p-2 text-slate-400 hover:text-ink-900 transition-colors"><Plus className="w-3.5 h-3.5" /></button>
                    </div>
                    <button onClick={() => removeItem(item.productId)} className="p-2 text-signal-danger/60 hover:text-signal-danger transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono font-medium text-ink-900">{formatCurrency(item.price * item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="border border-border rounded-card p-6 space-y-4 sticky top-24">
              <h3 className="font-display font-semibold text-base text-ink-900">Order Summary</h3>
              <div className="space-y-2 font-body text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Subtotal</span><span className="font-mono text-ink-900">{formatCurrency(subtotal)}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Shipping</span><span className="font-mono text-ink-900">{shipping === 0 ? "Free" : formatCurrency(shipping)}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Estimated Tax</span><span className="font-mono text-ink-900">{formatCurrency(tax)}</span></div>
              </div>
              <div className="border-t border-border pt-4 flex justify-between">
                <span className="font-display font-semibold text-ink-900">Total</span>
                <span className="font-mono font-semibold text-lg text-ink-900">{formatCurrency(total)}</span>
              </div>
              <Link to="/checkout" className="block w-full text-center py-3 rounded-card bg-accent text-white font-body text-sm font-medium hover:bg-accent-dark transition-colors">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
