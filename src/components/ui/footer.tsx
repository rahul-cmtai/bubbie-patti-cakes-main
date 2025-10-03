import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Franchise", href: "/franchise" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-cream border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img src="/logo.jpeg" alt="Bubble Cakery" className="h-16 w-auto" />
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md font-inter">
              Premium handcrafted cakes, pastries, and gourmet treats. Experience luxury baking 
              where every bite is crafted with love and baked to thrill.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-golden text-white rounded-full flex items-center justify-center hover:bg-golden-dark transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair font-semibold text-lg text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-inter"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair font-semibold text-lg text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground font-inter text-sm">
                  KC road Barnala, Barnala , Punjab, 148101
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+919138724870"
                  className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm"
                >
                  +91 91387 24870
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:bubblecakery@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm"
                >
                  bubblecakery@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle size={18} className="text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/919138724870"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors font-inter text-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-inter text-sm">
            © 2025 Bubble Cakery. All rights reserved. | Created by CMT AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;