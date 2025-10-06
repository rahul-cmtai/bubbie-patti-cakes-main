import { motion } from "framer-motion";
import { ArrowRight, Star, Heart, Award } from "lucide-react";
import { Link } from "react-router-dom";
import signatureImage from "@/assets/signature-creations.jpg";
import Testimonial from "@/components/ui/testimonial";
import PopularProducts from "@/components/ui/PopularProducts";
import SpecialOffers from "@/components/ui/SpecialOffers";

const Index = () => {
  const features = [
    {
      icon: Heart,
      title: "Crafted with Love",
      description: "Every recipe is made with passion and the finest ingredients"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Award-winning creations that exceed expectations"
    },
    {
      icon: Star,
      title: "Handcrafted Excellence",
      description: "Artisanal techniques passed down through generations"
    }
  ];

  // Text sliding animations for hero section
  const slideTexts = [
    "Premium Handcrafted Cakes",
    "Artisanal Pastries & Treats", 
    "Custom Wedding Celebrations",
    "Gourmet Birthday Creations",
    "Luxury Dessert Experience"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            {/* Direct video link as background */}
            <source src="./images/hero.mp4" type="video/mp4" />
            {/* You can add more <source> tags for other formats if needed */}
          </video>
          
          {/* Blur Overlay */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90 backdrop-blur-sm" /> */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Logo image above the name */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
 <img
  src="/images/hero_logo2.png"
  alt="Bubble Cakery Logo"
  className="w-52 h-52 md:w-64 md:h-64 lg:w-[512px] lg:h-[512px] object-contain drop-shadow-2xl"
/>

          </motion.div>
          
         
          
          

          {/* Sliding Text Animation */}
          <div className="h-16 mb-8 flex items-center justify-center overflow-hidden">
            <motion.div
              animate={{
                x: [0, -100, -200, -300, -400, 0],
              }}
              transition={{
                duration: 12,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="flex space-x-8 whitespace-nowrap"
            >
              {slideTexts.map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 2.4,
                    delay: index * 2.4,
                    repeat: Infinity,
                  }}
                  className="font-inter text-lg md:text-xl text-white/90 drop-shadow-lg min-w-max px-8"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-inter text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-[90vw] sm:max-w-2xl mx-auto drop-shadow-lg px-4 sm:px-0 leading-relaxed"
          >
            Experience luxury baking where every bite is crafted with love and every creation tells a story of perfection.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link 
              to="/shop" 
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-amber-500 text-white font-inter font-semibold rounded-full shadow-2xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="relative z-10">Shop Now</span>
              <ArrowRight className="ml-2 h-5 w-5 inline group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-amber-500/80 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            <Link 
              to="/franchise" 
              className="group relative px-8 py-4 border-2 border-white/30 text-white font-inter font-semibold rounded-full backdrop-blur-md hover:bg-white/10 hover:border-white/50 transform hover:scale-105 transition-all duration-300"
            >
              Franchise Enquiry
            </Link>
          </motion.div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-4 h-4 bg-amber-400/30 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute top-40 right-20 w-6 h-6 bg-primary/20 rounded-full blur-sm"
          />
          <motion.div
            animate={{
              y: [0, -25, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
            className="absolute bottom-40 left-20 w-3 h-3 bg-white/20 rounded-full blur-sm"
          />
        </div>
      </section>

      {/* Signature Creations Showcase */}
      <section className="py-20 bg-gradient-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Signature Creations
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our exquisite collection of premium cakes and pastries, 
              each one a masterpiece of flavor and artistry.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-hover group"
          >
            <img 
              src={signatureImage} 
              alt="Signature cake creations" 
              className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chocolate/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-playfair text-3xl font-bold mb-2">
                Handcrafted Excellence
              </h3>
              <p className="font-inter text-lg opacity-90">
                Each creation tells a story of passion and perfection
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Products */}
      <PopularProducts />

      {/* Special Offers */}
      {/* <SpecialOffers /> */}

      {/* Experience Banner */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-golden opacity-90" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
              Crafted with Love, Baked to Thrill
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="h-1 bg-white/30 mx-auto max-w-xs mb-8"
            />
            <p className="font-inter text-xl opacity-90">
              Where tradition meets innovation in every delicious creation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="premium-card text-center group"
              >
                <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonial />
    </div>
  );
};

export default Index;
