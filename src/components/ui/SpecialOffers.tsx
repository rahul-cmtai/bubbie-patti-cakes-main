import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Clock, Percent, Heart, LucideIcon } from 'lucide-react';

// Define interfaces for type safety
interface Offer {
  icon: LucideIcon;
  title: string;
  discount: string;
  description: string;
  validTill: string;
  bgColor: string;
  code: string;
}

interface FeaturedDeal {
  title: string;
  originalPrice: string;
  offerPrice: string;
  items: string[];
  image: string;
}

const SpecialOffers: React.FC = () => {
  const offers: Offer[] = [
    {
      icon: Gift,
      title: "Birthday Special",
      discount: "20% OFF",
      description: "Get 20% off on all birthday cakes when you order 2 days in advance",
      validTill: "Valid till month end",
      bgColor: "from-pink-500 to-rose-500",
      code: "BIRTHDAY20"
    },
    {
      icon: Heart,
      title: "Wedding Package",
      discount: "15% OFF",
      description: "Complete wedding cake package with free consultation and design",
      validTill: "Book 1 week ahead",
      bgColor: "from-purple-500 to-pink-500",
      code: "WEDDING15"
    },
    {
      icon: Percent,
      title: "Bulk Orders",
      discount: "25% OFF",
      description: "Special discount for corporate events and large party orders (10+ items)",
      validTill: "Minimum 10 pieces",
      bgColor: "from-blue-500 to-cyan-500",
      code: "BULK25"
    },
    {
      icon: Clock,
      title: "Happy Hours",
      discount: "30% OFF",
      description: "Daily 3-6 PM special on selected pastries and desserts",
      validTill: "Every day 3-6 PM",
      bgColor: "from-orange-500 to-amber-500",
      code: "HAPPY30"
    }
  ];

  const featuredDeals: FeaturedDeal[] = [
    {
      title: "Weekend Combo",
      originalPrice: "₹1,299",
      offerPrice: "₹899",
      items: ["2 Pastries", "1 Coffee", "1 Small Cake"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Family Pack",
      originalPrice: "₹2,499",
      offerPrice: "₹1,799",
      items: ["Large Cake", "6 Cupcakes", "2 Pastries"],
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ rotate: -10, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-lg"
          >
            🔥 Limited Time Offers
          </motion.div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Special Offers & Deals
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on our exclusive offers and seasonal deals designed to make every celebration sweeter
          </p>
        </motion.div>

        {/* Offer Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {offers.map((offer: Offer, index: number) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="premium-card group cursor-pointer relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${offer.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10 text-center p-6">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className={`w-16 h-16 bg-gradient-to-br ${offer.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <offer.icon className="h-8 w-8 text-white" />
                </motion.div>
                
                <div className={`inline-block bg-gradient-to-r ${offer.bgColor} text-white px-4 py-2 rounded-full text-lg font-bold mb-3 shadow-md`}>
                  {offer.discount}
                </div>
                
                <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
                  {offer.title}
                </h3>
                
                <p className="font-inter text-muted-foreground text-sm mb-4 leading-relaxed">
                  {offer.description}
                </p>
                
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                    {offer.validTill}
                  </div>
                  <div className="font-mono text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded">
                    CODE: {offer.code}
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-transparent border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-full transition-all duration-300 font-semibold"
                >
                  Claim Offer
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Deals */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="font-playfair text-3xl font-bold text-center text-foreground mb-8">
            Featured Combo Deals
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredDeals.map((deal: FeaturedDeal, index: number) => (
              <motion.div
                key={deal.title}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="premium-card group cursor-pointer overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      SAVE ₹{parseInt(deal.originalPrice.replace('₹', '')) - parseInt(deal.offerPrice.replace('₹', ''))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-playfair text-2xl font-bold text-foreground">
                      {deal.title}
                    </h4>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">{deal.offerPrice}</span>
                        <span className="text-lg text-muted-foreground line-through">{deal.originalPrice}</span>
                      </div>
                      
                      <div className="space-y-1">
                        {deal.items.map((item: string, itemIndex: number) => (
                          <div key={itemIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-golden rounded-full" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-hero w-full"
                    >
                      Order Combo
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffers;
