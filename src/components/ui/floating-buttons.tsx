import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  const whatsappNumber = "+1234567890"; // Replace with actual WhatsApp number
  const phoneNumber = "+1234567890"; // Replace with actual phone number

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in Bubbie Cakery products. Can you help me?");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3">
      {/* WhatsApp Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
      </motion.button>

      {/* Phone Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handlePhoneClick}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-golden hover:shadow-hover transition-all duration-300 flex items-center justify-center group"
        aria-label="Call us"
      >
        <Phone size={22} className="group-hover:scale-110 transition-transform" />
      </motion.button>
    </div>
  );
};

export default FloatingButtons;