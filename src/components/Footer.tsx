import { Link } from "react-router-dom";
import { Leaf, MapPin, Clock, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-5 h-5" />
              <span className="font-heading text-lg font-semibold">Bright Angel</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Kollampalayam's herbal beauty sanctuary offering ayurvedic treatments, spa therapies, and bridal makeup with natural ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-base font-semibold mb-4">Visit Us</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Arunachala Kawndar Building, Gandhi Ji 2nd Street, Kollampalayam, Erode – 638002</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>10:00 AM – 6:00 PM (Daily)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Bright Angel Herbal Beauty Parlour & Spa. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
