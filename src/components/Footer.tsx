import { Phone, MapPin, Clock, Mail } from "lucide-react";
import logo from "@/assets/logo-new.jpg";

const Footer = () => (
  <footer className="bg-foreground text-card py-16">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <img src={logo} alt="PricedRight Yards & More Logo" className="h-14 w-auto" />
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
            <a href="/services/yard-maintenance" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Yard & Landscape</a>
            <a href="/services/post-eviction" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Post Eviction</a>
            <a href="/services/vacant-property" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Vacant Property</a>
            <a href="/services/tree-services" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Shrub & Tree</a>
            <a href="/services/rental-cleans" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Rental Cleans</a>
          </nav>
        </div>

        {/* Service Areas */}
        <div>
          <h4 className="font-heading font-semibold text-base uppercase tracking-wider mb-4 opacity-60">Service Areas</h4>
          <nav className="space-y-3">
            <a href="/areas/tampa" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Tampa, FL</a>
            <a href="/areas/sarasota" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Sarasota, FL</a>
            <a href="/areas/orlando" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Orlando, FL</a>
            <a href="/areas/bradenton" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Bradenton, FL</a>
            <a href="/areas/clearwater" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Clearwater, FL</a>
            <a href="/areas/lakeland" className="block text-base opacity-80 hover:opacity-100 transition-opacity">Lakeland, FL</a>
            <a href="/areas/st-petersburg" className="block text-base opacity-80 hover:opacity-100 transition-opacity">St. Petersburg, FL</a>
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
            <MapPin className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-base opacity-80">Serving Tampa Bay & Central FL</span>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 mt-0.5 opacity-60" />
            <span className="text-base opacity-80">Contact us for availability</span>
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
