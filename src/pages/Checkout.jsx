import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { useCart } from "../context/CartContext";
import formatCurrency from "../utils/formatCurrency";

const US_STATES = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];

const steps = ["Shipping", "Delivery", "Payment"];

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [shipping, setShipping] = useState({
    fullName: "", email: "", phone: "", address: "", city: "", state: "", zip: "",
  });
  const [delivery, setDelivery] = useState("standard");
  const [payment, setPayment] = useState({
    cardholderName: "", cardNumber: "", expDate: "", cvv: "",
  });

  const deliveryCost = delivery === "express" ? 49 : (subtotal >= 500 ? 0 : 29);
  const tax = subtotal * 0.0825;
  const total = subtotal + deliveryCost + tax;

  const validateShipping = () => {
    const e = {};
    if (!shipping.fullName.trim()) e.fullName = "Required";
    if (!shipping.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shipping.email)) e.email = "Invalid email";
    if (!shipping.address.trim()) e.address = "Required";
    if (!shipping.city.trim()) e.city = "Required";
    if (!shipping.state) e.state = "Required";
    if (!shipping.zip.trim()) e.zip = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validatePayment = () => {
    const e = {};
    if (!payment.cardholderName.trim()) e.cardholderName = "Required";
    const num = payment.cardNumber.replace(/\s/g, "");
    if (num.length < 13 || num.length > 19) e.cardNumber = "Invalid card number";
    const [mm, yy] = payment.expDate.split("/");
    if (!mm || !yy || mm < 1 || mm > 12) e.expDate = "Invalid date";
    if (payment.cvv.length < 3 || payment.cvv.length > 4) e.cvv = "Invalid CVV";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handlePlaceOrder = () => {
    setLoading(true);
    setTimeout(() => {
      const orderNumber = `OTC-${String(Math.floor(100000 + Math.random() * 900000))}`;
      clearCart();
      navigate("/order-confirmation", {
        state: {
          orderNumber,
          items,
          subtotal,
          deliveryCost,
          tax,
          total,
          shipping,
          delivery,
          estimatedDelivery: delivery === "express" ? "2-3 business days" : "5-7 business days",
        },
      });
    }, 1500);
  };

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 16);
    return cleaned.replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <Helmet><title>Checkout | OTIC TECH</title></Helmet>
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h1 className="font-display font-bold text-2xl text-ink-900 mb-8">Checkout</h1>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-medium ${
                i <= step ? "bg-accent text-white" : "bg-paper-100 text-slate-400"
              }`}>
                {i < step ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span className={`font-body text-sm ${i <= step ? "text-ink-900" : "text-slate-400"}`}>{s}</span>
              {i < steps.length - 1 && <div className="w-8 h-px bg-border mx-1" />}
            </div>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4" />
            <p className="font-body text-slate-500">Processing your order...</p>
          </div>
        ) : (
          <>
            {step === 0 && (
              <div className="space-y-4">
                <h2 className="font-display font-semibold text-lg text-ink-900">Shipping Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[{label:"Full Name",key:"fullName"},{label:"Email",key:"email",type:"email"},{label:"Phone",key:"phone"},{label:"Address",key:"address"},{label:"City",key:"city"}].map(f => (
                    <div key={f.key} className={!["fullName","email","address","city"].includes(f.key)?"":""}>
                      <label className="block font-body text-sm text-ink-900 mb-1">{f.label}</label>
                      <input type={f.type||"text"} value={shipping[f.key]} onChange={e => setShipping(s=>({...s,[f.key]:e.target.value}))}
                        className={`w-full px-4 py-2.5 rounded-card border ${errors[f.key]?"border-signal-danger":"border-border"} font-body text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-accent`} />
                      {errors[f.key] && <p className="text-xs text-signal-danger mt-1">{errors[f.key]}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="block font-body text-sm text-ink-900 mb-1">State</label>
                    <select value={shipping.state} onChange={e => setShipping(s=>({...s,state:e.target.value}))}
                      className={`w-full px-4 py-2.5 rounded-card border ${errors.state?"border-signal-danger":"border-border"} font-body text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-accent`}>
                      <option value="">Select state</option>
                      {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.state && <p className="text-xs text-signal-danger mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <label className="block font-body text-sm text-ink-900 mb-1">ZIP Code</label>
                    <input type="text" value={shipping.zip} onChange={e => setShipping(s=>({...s,zip:e.target.value}))}
                      className={`w-full px-4 py-2.5 rounded-card border ${errors.zip?"border-signal-danger":"border-border"} font-body text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-accent`} />
                    {errors.zip && <p className="text-xs text-signal-danger mt-1">{errors.zip}</p>}
                  </div>
                </div>
                <button onClick={() => { if (validateShipping()) setStep(1); }} className="mt-4 px-8 py-3 rounded-card bg-accent text-white font-body text-sm font-medium hover:bg-accent-dark transition-colors">
                  Continue
                </button>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-4">
                <h2 className="font-display font-semibold text-lg text-ink-900">Delivery Method</h2>
                {[{value:"standard",label:"Standard Shipping",desc:"5-7 business days",cost:subtotal>=500?"Free":"$29"},{value:"express",label:"Express Shipping",desc:"2-3 business days",cost:"$49"}].map(o => (
                  <label key={o.value} className={`block p-4 rounded-card border cursor-pointer transition-colors ${delivery===o.value?"border-accent bg-accent-light":"border-border hover:border-strong"}`}>
                    <div className="flex items-center gap-3">
                      <input type="radio" name="delivery" value={o.value} checked={delivery===o.value} onChange={e=>setDelivery(e.target.value)} className="text-accent focus:ring-accent" />
                      <div className="flex-1">
                        <p className="font-body font-medium text-sm text-ink-900">{o.label}</p>
                        <p className="font-body text-sm text-slate-500">{o.desc}</p>
                      </div>
                      <span className="font-mono text-sm text-ink-900">{o.cost}</span>
                    </div>
                  </label>
                ))}
                <div className="flex gap-3 mt-4">
                  <button onClick={() => setStep(0)} className="px-6 py-3 rounded-card border border-border font-body text-sm text-ink-900 hover:bg-paper-100 transition-colors">Back</button>
                  <button onClick={() => setStep(2)} className="px-8 py-3 rounded-card bg-accent text-white font-body text-sm font-medium hover:bg-accent-dark transition-colors">Continue</button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="font-display font-semibold text-lg text-ink-900">Payment</h2>
                <p className="font-body text-sm text-slate-500 mb-2">This is a simulated payment form. No real payment will be processed.</p>
                <div className="space-y-4">
                  {[{label:"Cardholder Name",key:"cardholderName"},{label:"Card Number",key:"cardNumber",fmt:true},{label:"Expiration Date (MM/YY)",key:"expDate"},{label:"CVV",key:"cvv"}].map(f => (
                    <div key={f.key}>
                      <label className="block font-body text-sm text-ink-900 mb-1">{f.label}</label>
                      <input type="text" value={f.fmt ? formatCardNumber(payment[f.key]) : payment[f.key]} maxLength={f.key==="cvv"?4:f.key==="cardNumber"?19:undefined}
                        onChange={e => setPayment(p=>({...p,[f.key]:e.target.value}))}
                        className={`w-full px-4 py-2.5 rounded-card border ${errors[f.key]?"border-signal-danger":"border-border"} font-body text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-accent`} />
                      {errors[f.key] && <p className="text-xs text-signal-danger mt-1">{errors[f.key]}</p>}
                    </div>
                  ))}
                </div>

                <div className="border border-border rounded-card p-4 mt-4 space-y-2">
                  <div className="flex justify-between text-sm"><span className="text-slate-500">Subtotal</span><span className="font-mono text-ink-900">{formatCurrency(subtotal)}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-slate-500">Shipping</span><span className="font-mono text-ink-900">{deliveryCost===0?"Free":formatCurrency(deliveryCost)}</span></div>
                  <div className="flex justify-between text-sm"><span className="text-slate-500">Estimated Tax</span><span className="font-mono text-ink-900">{formatCurrency(tax)}</span></div>
                  <div className="border-t border-border pt-2 flex justify-between"><span className="font-display font-semibold text-ink-900">Total</span><span className="font-mono font-semibold text-lg text-ink-900">{formatCurrency(total)}</span></div>
                </div>

                <div className="flex gap-3 mt-4">
                  <button onClick={() => setStep(1)} className="px-6 py-3 rounded-card border border-border font-body text-sm text-ink-900 hover:bg-paper-100 transition-colors">Back</button>
                  <button onClick={() => { if (validatePayment()) handlePlaceOrder(); }} className="px-8 py-3 rounded-card bg-accent text-white font-body text-sm font-medium hover:bg-accent-dark transition-colors">
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
