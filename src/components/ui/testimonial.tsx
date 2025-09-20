import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Testimonial = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "The most divine chocolate cake I've ever tasted! Bubbie Cakery truly creates magic with every bite.",
      rating: 5,
    },
    {
      name: "Michael Chen", 
      text: "Their wedding cake was the perfect centerpiece for our special day. Absolutely stunning and delicious!",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      text: "From custom cupcakes to gourmet pastries, everything is crafted to perfection. Highly recommend!",
      rating: 5,
    },
    {
      name: "David Wilson",
      text: "Outstanding quality and exceptional service. The birthday cake exceeded all our expectations!",
      rating: 5,
    },
    {
      name: "Lisa Parker",
      text: "Fresh ingredients and creative designs make Bubbie Cakery the best bakery in town!",
      rating: 5,
    },
    {
      name: "James Thompson",
      text: "Their attention to detail and flavor combinations are simply unmatched. Truly exceptional!",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      text: "Amazing birthday cake designs! My daughter loved her unicorn themed cake. Perfect taste and decoration!",
      rating: 5,
    },
    {
      name: "Robert Davis",
      text: "Best croissants in the city! Fresh, buttery, and always perfectly baked. A true French bakery experience!",
      rating: 5,
    },
    {
      name: "Amanda White",
      text: "Their red velvet cupcakes are heavenly! Ordered for office party and everyone was impressed!",
      rating: 5,
    },
    {
      name: "Kevin Brown",
      text: "Exceptional service and delicious treats! The chocolate éclairs are my absolute favorite!",
      rating: 5,
    },
    {
      name: "Rachel Green",
      text: "Perfect anniversary cake! Beautiful design and incredible flavor. Will definitely order again!",
      rating: 5,
    },
    {
      name: "Mark Taylor",
      text: "Their artisan breads are fantastic! Fresh daily and made with premium ingredients. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="font-inter text-lg text-muted-foreground">
            Discover why thousands of customers choose Bubbie Cakery for their special moments
          </p>
        </motion.div>

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{
              x: [0, -100 * (testimonials.length / 2)]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,  // Faster marquee: 30s → 15s
                ease: "linear",
              },
            }}
            style={{ width: `${testimonials.length * 320 * 2}px` }}
          >
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`first-${testimonial.name}-${index}`}
                className="premium-card text-center flex-shrink-0 w-80 h-64 flex flex-col justify-between p-6"
                whileHover={{ scale: 1.08, y: -15 }}  // Faster & more dramatic hover
                transition={{ duration: 0.15 }}  // Faster hover: 0.3s → 0.15s
              >
                <div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-golden fill-current" />
                    ))}
                  </div>
                  <p className="font-inter text-muted-foreground mb-4 italic text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                <h4 className="font-playfair text-lg font-semibold text-foreground">
                  {testimonial.name}
                </h4>
              </motion.div>
            ))}

            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={`second-${testimonial.name}-${index}`}
                className="premium-card text-center flex-shrink-0 w-80 h-64 flex flex-col justify-between p-6"
                whileHover={{ scale: 1.08, y: -15 }}  // Faster & more dramatic hover
                transition={{ duration: 0.15 }}  // Faster hover: 0.3s → 0.15s
              >
                <div>
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-golden fill-current" />
                    ))}
                  </div>
                  <p className="font-inter text-muted-foreground mb-4 italic text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
                <h4 className="font-playfair text-lg font-semibold text-foreground">
                  {testimonial.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-cream to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-cream to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
};

export default Testimonial;
