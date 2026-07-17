import { Link } from "react-router-dom";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";
import formatCurrency from "../../utils/formatCurrency";
import Button from "../shared/Button";

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-200 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/30" onClick={onClose} />
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-xl transition-transform duration-200 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="font-display font-semibold text-lg text-ink-900">Cart</h2>
            <button onClick={onClose} aria-label="Close cart" className="p-2 text-slate-400 hover:text-ink-900 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {items.length === 0 ? (
            <div className="p-8 text-center">
              <p className="font-body text-slate-500 mb-4">Your cart is empty.</p>
              <Button variant="primary" to="/products" onClick={onClose}>
                Shop Products
              </Button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ maxHeight: "calc(100vh - 180px)" }}>
                {items.map((item) => (
                  <div key={item.productId} className="flex gap-3 pb-4 border-b border-border">
                    <div className="w-16 h-16 rounded-card overflow-hidden bg-paper-100 shrink-0">
                      {item.image && (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-sm font-medium text-ink-900 truncate">{item.name}</p>
                      <p className="font-mono text-sm text-slate-500 mt-0.5">{formatCurrency(item.price)}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => {
                            if (item.quantity <= 1) removeItem(item.productId);
                            else updateQuantity(item.productId, item.quantity - 1);
                          }}
                          className="p-1 text-slate-400 hover:text-ink-900 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="font-mono text-sm text-ink-900 w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="p-1 text-slate-400 hover:text-ink-900 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => removeItem(item.productId)}
                          className="ml-auto p-1 text-signal-danger/60 hover:text-signal-danger transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-body text-sm text-slate-500">Subtotal</span>
                  <span className="font-mono font-medium text-ink-900">{formatCurrency(subtotal)}</span>
                </div>
                <Link
                  to="/cart"
                  onClick={onClose}
                  className="block w-full text-center py-2.5 rounded-card border border-border font-body text-sm text-ink-900 hover:bg-paper-100 transition-colors"
                >
                  View Cart
                </Link>
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="block w-full text-center py-2.5 rounded-card bg-accent text-white font-body text-sm hover:bg-accent-dark transition-colors"
                >
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
