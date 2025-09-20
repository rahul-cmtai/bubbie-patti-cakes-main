import { motion } from "framer-motion";
import { Users, Award, Heart, Clock } from "lucide-react";

const About = () => {
  const milestones = [
    {
      year: "2015",
      title: "The Beginning",
      description: "Started as a small family bakery with a dream to create extraordinary treats",
    },
    {
      year: "2018",
      title: "First Award",
      description: "Won 'Best Local Bakery' for our signature chocolate creation",
    },
    {
      year: "2020",
      title: "Expansion",
      description: "Opened our second location and introduced online ordering",
    },
    {
      year: "2022",
      title: "Franchise Launch",
      description: "Began franchising to share our passion with entrepreneurs nationwide",
    },
    {
      year: "2024",
      title: "Premium Collection",
      description: "Launched our luxury hamper collection and gourmet gift boxes",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Fresh Ingredients",
      description: "We source only the finest, freshest ingredients from trusted local suppliers to ensure every bite is perfect.",
    },
    {
      icon: Award,
      title: "Premium Taste",
      description: "Our master bakers combine traditional techniques with innovative flavors to create unforgettable taste experiences.",
    },
    {
      icon: Users,
      title: "Handcrafted Hampers",
      description: "Each gift hamper is carefully curated and beautifully presented, perfect for life's special moments.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
                Our Story
              </h1>
              <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
                Founded in 2015 with a simple mission: to create extraordinary baking experiences 
                that bring joy to every occasion. What started as a small family bakery has grown 
                into a premium destination for luxury cakes, artisanal pastries, and gourmet treats.
              </p>
              <p className="font-inter text-lg text-muted-foreground leading-relaxed">
                At Bubble Cakery, we believe every celebration deserves something special. 
                That's why we pour our hearts into every creation, using traditional techniques 
                combined with innovative flavors to deliver a taste that truly thrills.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-golden p-8 shadow-hover">
                <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                      9+ Years
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      Of baking excellence and customer satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to becoming a premium bakery destination, 
              here are the key milestones that shaped our story.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-golden hidden md:block" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />
                
                {/* Content */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="premium-card">
                    <div className="flex items-center mb-3">
                      <span className="font-playfair text-2xl font-bold text-primary">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                      {milestone.title}
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Bubble Cakery?
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover what makes us the preferred choice for premium baking experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="premium-card text-center group hover:bg-gradient-cream"
              >
                <div className="w-20 h-20 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="font-inter text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience the Magic?
            </h2>
            <p className="font-inter text-xl opacity-90 mb-8">
              Visit our shop to explore our complete collection of premium cakes, 
              pastries, and gourmet treats.
            </p>
            <motion.a
              href="/shop"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Our Collection
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;