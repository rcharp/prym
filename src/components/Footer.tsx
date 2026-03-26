import { Phone, MapPin, Clock, Mail } from "lucide-react";
import logo from "@/assets/logo-transparent.png";

const Footer = () => (
  <footer className="bg-foreground text-card py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
{/* Brand */}
        <div className="space-y-4">
          <img src={logo} alt="PricedRight Yards & More Logo" style={{ height: '200px' }} className="w-auto" />
          <p className="text-sm opacity-60">Your Property Preservation Partner.</p>
        </div>

        {/* Business */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Business</h4>
          <nav className="space-y-3">
            <a href="/" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Home</a>
            <a href="/about" className="block text-base opacity-80 hover:opacity-100 transition-opacity">About Us</a>
            <a href="/contact" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Contact</a>
            <a href="/gallery" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Gallery</a>
            <a href="/tips" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Blog</a>
          </nav>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Services</h4>
          <nav className="space-y-3">
            <a href="/services/classic-lawn" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Classic Lawn Care</a>
            <a href="/services/premium-lawn" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Premium Lawn Care</a>
            <a href="/services/ultimate-maintenance" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Ultimate Maintenance</a>
            <a href="/services/tree-shrub" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Tree & Shrub Care</a>
            <a href="/services/pressure-washing" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Pressure Washing</a>
            <a href="/services/roof-debris" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Roof Debris Removal</a>
            <a href="/services/trash-out" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Trash Out</a>
            <a href="/services/make-ready" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Make-Ready Cleans</a>
            <a href="/services/post-eviction" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Post Eviction</a>
          </nav>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Service Areas</h4>
          <nav className="space-y-3">
            <a href="/areas/tampa" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Tampa, FL</a>
            <a href="/areas/st-petersburg" className="block text-base opacity-80 hover:opacity-100 transition-opacity">St. Petersburg, FL</a>
            <a href="/areas/clearwater" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Clearwater, FL</a>
            <a href="/areas/bradenton" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Bradenton, FL</a>
            <a href="/areas/palmetto" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Palmetto, FL</a>
            <a href="/areas/ellenton" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Ellenton, FL</a>
          </nav>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Contact</h4>
          <div className="flex items-start gap-3">
            <Phone className="w-4 h-4 mt-0.5 opacity-60" />
            <a href="tel:+18138602202" className="text-base opacity-80 hover:opacity-100 transition-opacity">(813) 860-2202</a>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-4 h-4 mt-0.5 opacity-60" />
            <a href="mailto:ktrvr@curbservs.com" className="text-base opacity-80 hover:opacity-100 transition-opacity">ktrvr@curbservs.com</a>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 opacity-60 shrink-0" />
            <span className="text-base opacity-80">Palmetto, FL</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-base opacity-80">7 Days a Week · 7AM–6PM</span>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-card/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-base opacity-60">
          © 2026 PricedRight Yards & More. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
