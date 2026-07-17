import { Helmet } from "react-helmet-async";
import { useLocation, Navigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import formatCurrency from "../utils/formatCurrency";
import Button from "../components/shared/Button";

export default function OrderConfirmation() {
  const location = useLocation();
  const data = location.state;

  if (!data) return <Navigate to="/" replace />;

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <Helmet><title>Order Confirmed | OTIC TECH</title></Helmet>
      <div className="max-w-2xl mx-auto px-4 text-center">
        <CheckCircle className="w-16 h-16 text-signal-success mx-auto mb-4" />
        <h1 className="font-display font-bold text-2xl text-ink-900 mb-2">Order Confirmed</h1>
        <p className="font-mono text-sm text-slate-400 mb-6">Order #{data.orderNumber}</p>

        <div className="text-left border border-border rounded-card p-6 space-y-4 mb-6">
          <div className="space-y-2">
            {data.items.map(item => (
              <div key={item.productId} className="flex justify-between text-sm">
                <span className="text-ink-900">{item.name} <span className="text-slate-400">x{item.quantity}</span></span>
                <span className="font-mono text-ink-900">{formatCurrency(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-3 space-y-1 text-sm">
            <div className="flex justify-between"><span className="text-slate-500">Subtotal</span><span className="font-mono">{formatCurrency(data.subtotal)}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Shipping</span><span className="font-mono">{data.deliveryCost===0?"Free":formatCurrency(data.deliveryCost)}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Tax</span><span className="font-mono">{formatCurrency(data.tax)}</span></div>
            <div className="flex justify-between font-semibold text-ink-900 pt-2 border-t border-border"><span>Total</span><span className="font-mono">{formatCurrency(data.total)}</span></div>
          </div>
          <div className="border-t border-border pt-3 text-sm space-y-1">
            <p className="text-slate-500">Shipping to: <span className="text-ink-900">{data.shipping.fullName}, {data.shipping.address}, {data.shipping.city}, {data.shipping.state} {data.shipping.zip}</span></p>
            <p className="text-slate-500">Method: <span className="text-ink-900 capitalize">{data.delivery} shipping</span></p>
            <p className="text-slate-500">Estimated delivery: <span className="text-ink-900">{data.estimatedDelivery}</span></p>
          </div>
        </div>

        <Button variant="primary" to="/">Back to Home</Button>
      </div>
    </main>
  );
}
