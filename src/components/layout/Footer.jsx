import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, MessageCircle, Image, ExternalLink, Film } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink-800 text-slate-400 font-body">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="font-display font-bold text-xl text-white tracking-tight">
              OTIC<span className="text-accent">TECH</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed">
              Premium electronics for everyday life. Curated for quality, backed by expertise.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <a href="#" aria-label="Facebook" className="p-2 text-slate-400 hover:text-white transition-colors"><Globe className="w-4 h-4" /></a>
              <a href="#" aria-label="Instagram" className="p-2 text-slate-400 hover:text-white transition-colors"><Image className="w-4 h-4" /></a>
              <a href="#" aria-label="X" className="p-2 text-slate-400 hover:text-white transition-colors"><MessageCircle className="w-4 h-4" /></a>
              <a href="#" aria-label="LinkedIn" className="p-2 text-slate-400 hover:text-white transition-colors"><ExternalLink className="w-4 h-4" /></a>
              <a href="#" aria-label="YouTube" className="p-2 text-slate-400 hover:text-white transition-colors"><Film className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold text-xs text-white uppercase tracking-widest mb-4">Shop</h3>
            <ul className="space-y-2.5">
              <li><Link to="/products" className="text-sm hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/categories" className="text-sm hover:text-white transition-colors">Categories</Link></li>
              <li><Link to="/products?sort=bestselling" className="text-sm hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link to="/products?sort=newest" className="text-sm hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/products?sort=price-low" className="text-sm hover:text-white transition-colors">Deals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-xs text-white uppercase tracking-widest mb-4">Customer Service</h3>
            <ul className="space-y-2.5">
              <li><Link to="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-white transition-colors">Returns</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-white transition-colors">Warranty</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-xs text-white uppercase tracking-widest mb-4">Company</h3>
            <ul className="space-y-2.5">
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <h3 className="font-display font-semibold text-xs text-white uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" />
                <span>(555) 000-0000</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" />
                <span>support@otictech.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-500" />
                <span>14335 Ella Blvd<br />Houston, TX 77014</span>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-3">Mon–Fri: 9 AM – 7 PM CST<br />Sat: 10 AM – 5 PM CST</p>
          </div>
        </div>
      </div>

      <div className="border-t border-ink-700">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} OTIC TECH. All rights reserved.</p>
          <div className="flex items-center gap-3 text-xs">
            <span className="px-3 py-1 bg-ink-700 rounded text-slate-400">Visa</span>
            <span className="px-3 py-1 bg-ink-700 rounded text-slate-400">Mastercard</span>
            <span className="px-3 py-1 bg-ink-700 rounded text-slate-400">Amex</span>
            <span className="px-3 py-1 bg-ink-700 rounded text-slate-400">PayPal</span>
            <span className="px-3 py-1 bg-ink-700 rounded text-slate-400">Apple Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
