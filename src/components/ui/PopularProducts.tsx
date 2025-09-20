import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom'; // React Router का Link



// Define interfaces for type safety
interface Product {
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  reviews: string;
  rating: number;
  bestseller: boolean;
  badge?: string;
  discount?: number;
}

const PopularProducts: React.FC = () => {
  // Only 6 products for 2 rows × 3 columns with real images
  const popularProducts: Product[] = [
    {
      name: "Signature Black Forest Cake",
      description: "Classic German black forest cake with layers of chocolate sponge, cherries and whipped cream",
      price: "₹899",
      originalPrice: "₹1,199",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      reviews: "127",
      rating: 4.8,
      bestseller: true,
      badge: "Bestseller",
      discount: 25
    },
    {
      name: "Red Velvet Cupcakes",
      description: "Classic red velvet cupcakes topped with signature cream cheese frosting and sprinkles",
      price: "₹549",
      originalPrice: "₹699",
      image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      reviews: "94",
      rating: 4.7,
      bestseller: false,
      badge: "Popular",
      discount: 22
    },
    {
      name: "Tiramisu Delight",
      description: "Authentic Italian tiramisu with ladyfingers soaked in espresso and mascarpone cream",
      price: "₹399",
      originalPrice: "₹499",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      reviews: "85",
      rating: 4.9,
      bestseller: true,
      badge: "Authentic",
      discount: 20
    },
    {
      name: "Chocolate Birthday Cake",
      description: "Rich chocolate birthday cake with vanilla buttercream and colorful decorations",
      price: "₹799",
      originalPrice: "₹999",
      image: "https://images.unsplash.com/photo-1562440499-64c9a5d1688e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      reviews: "156",
      rating: 4.8,
      bestseller: false,
      badge: "Premium",
      discount: 20
    },
    {
      name: "Vanilla Bean Cheesecake",
      description: "Creamy cheesecake with vanilla bean infusion and graham cracker crust",
      price: "₹649",
      originalPrice: "₹849",
      image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      reviews: "112",
      rating: 4.6,
      bestseller: true,
      badge: "Creamy",
      discount: 24
    },
    {
      name: "Chocolate Truffle Pastry",
      description: "Rich chocolate truffle pastry with premium Belgian chocolate and fresh cream",
      price: "₹299",
      originalPrice: "₹399",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      reviews: "203",
      rating: 4.9,
      bestseller: false,
      badge: "Luxury",
      discount: 25
    }
  ];

  // All badges use the same orange color as seen in the image
  const getBadgeColor = (badge: string) => {
    return "bg-gradient-to-r from-amber-500 to-orange-500"; 
  };

  // WhatsApp and Phone handlers
  const handleWhatsApp = (productName: string, price: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in ordering ${productName} for ${price}. Can you help me with the details?`);
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+919876543210', '_self');
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream/30 to-transparent" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-golden/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="inline-block bg-gradient-golden text-white px-8 py-3 rounded-full text-sm font-bold mb-6 shadow-lg transform hover:scale-105 transition-transform"
          >
            ⭐ Customer Favorites
          </motion.div>
          <h2 className="font-playfair text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Our Best Sellers
          </h2>
          <div className="w-24 h-1 bg-gradient-golden mx-auto mb-6 rounded-full" />
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our most loved creations that keep customers coming back for more
          </p>
        </motion.div>

        {/* Products Grid - 3 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {popularProducts.map((product: Product, index: number) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 60, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100 
              }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 border border-gray-100">
                {/* Image Section */}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    
                  />
                  
                  {/* Simple Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badge - All orange color */}
                  {product.badge && (
                    <div className={`absolute top-4 left-4 ${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                      {product.badge}
                    </div>
                  )}

                  {/* Discount Badge - Red/pink color as in image */}
                  {product.discount && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      -{product.discount}%
                    </div>
                  )}
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="font-inter text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i: number) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) 
                              ? "text-amber-400 fill-current" 
                              : "text-gray-300"
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-foreground">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  
                  {/* Price Section */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  
                  {/* WhatsApp and Call Buttons */}
                  <div className="flex gap-3">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleWhatsApp(product.name, product.price)}
                      // className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                      className="flex-1 bg-gradient-to-r from-primary to-amber-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:from-amber-500 hover:to-primary"

                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </motion.button>
                    
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleCall}
                      className="flex-1 bg-white border-2 border-gray-200 hover:border-gray-300 text-black py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-50"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

       {/* View All Button */}
<motion.div 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  viewport={{ once: true }}
  className="text-center"
>
  <Link to="/shop"> {/* href की जगह to का use करें */}
    <motion.button
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-12 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
    >
      View All Products →
    </motion.button>
  </Link>
</motion.div>

      </div>
    </section>
  );
};

export default PopularProducts;
