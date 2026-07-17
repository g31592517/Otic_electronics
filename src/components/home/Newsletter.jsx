import { useState } from "react";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {submitted ? (
            <div className="flex flex-col items-center gap-3">
              <CheckCircle className="w-12 h-12 text-white" />
              <p className="font-display font-semibold text-xl text-white">You&apos;re subscribed!</p>
              <p className="font-body text-white/80 text-sm">Thanks for signing up. Watch your inbox for exclusive deals and new arrivals.</p>
            </div>
          ) : (
            <>
              <Mail className="w-10 h-10 text-white/80 mx-auto mb-4" />
              <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-2">Stay in the Know</h2>
              <p className="font-body text-white/80 text-sm md:text-base mb-6 max-w-md mx-auto">
                Get exclusive deals, new arrivals, product launches, and seasonal promotions delivered to your inbox.
              </p>
              <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-card bg-white/15 border border-white/25 text-white placeholder-white/60 font-body text-sm focus:outline-none focus:ring-2 focus:ring-white/40"
                />
                <button type="submit" className="px-6 py-3 rounded-card bg-white text-accent font-body font-medium text-sm hover:bg-white/90 transition-colors flex items-center gap-2">
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
