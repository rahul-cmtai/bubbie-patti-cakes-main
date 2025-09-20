import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
    { name: "Franchise", path: "/franchise" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border"
    >
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex justify-between items-center h-28">
    {/* Logo */}
    <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
      <img src="/logo.jpeg" alt="Bubble Cakery" className="h-24 w-auto" />
    </Link>

    {/* Desktop Navigation */}
    <div className="hidden md:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`relative px-3 py-2 font-inter font-medium transition-colors ${
            isActive(item.path)
              ? "text-primary"
              : "text-foreground hover:text-primary"
          }`}
        >
          {item.name}
          {isActive(item.path) && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </Link>
      ))}
    </div>

    {/* CTA Button */}
    <div className="hidden md:block">
      <Link to="/franchise" className="btn-hero text-sm">
        Join Franchise
      </Link>
    </div>

    {/* Mobile menu button */}
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
</div>


      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 font-inter font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="pt-4"
              >
                <Link to="/franchise" className="btn-hero text-sm block text-center">
                  Join Franchise
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;