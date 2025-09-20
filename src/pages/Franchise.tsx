import { motion } from "framer-motion";
import { Users, Award, Briefcase, TrendingUp, MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Franchise = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  // Add this state for zoom modal
  const [zoomImg, setZoomImg] = useState<string | null>(null);

  const benefits = [
    {
      icon: Award,
      title: "Proven Brand Support",
      description: "Leverage our established brand reputation and comprehensive marketing support to attract customers from day one.",
    },
    {
      icon: Users,
      title: "Complete Training Program",
      description: "Receive extensive training in baking techniques, business operations, and customer service standards.",
    },
    {
      icon: Briefcase,
      title: "Premium Branding Package",
      description: "Get access to our premium brand assets, store design guidelines, and marketing materials.",
    },
    {
      icon: TrendingUp,
      title: "Exclusive Menu Access",
      description: "Offer our signature recipes and seasonal specials that customers love and trust.",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Initial Inquiry",
      description: "Submit your franchise application and schedule a consultation call with our team.",
    },
    {
      step: "2",
      title: "Business Review",
      description: "We'll review your background, location, and business plan to ensure mutual success.",
    },
    {
      step: "3",
      title: "Agreement & Training",
      description: "Sign the franchise agreement and begin comprehensive training program.",
    },
    {
      step: "4",
      title: "Grand Opening",
      description: "Launch your Bubble Cakery location with full support from our team.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest in Bubble Cakery franchise. We'll contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", location: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent("Hi! I'm interested in the Bubble Cakery franchise opportunity. Can you provide me with more information?");
    window.open(`https://wa.me/+1234567890?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
              Join the Bubble Family
            </h1>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Partner with us to bring the taste that thrills to your community. 
              Build a successful business with our proven franchise model and 
              comprehensive support system.
            </p>
            <Button
              onClick={handleWhatsAppInquiry}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Quick WhatsApp Inquiry
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Franchise Benefits */}
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
              Franchise Benefits
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the advantages of joining our growing network of successful bakery owners.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="premium-card text-center group hover:bg-gradient-cream"
              >
                <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
     {/* Process Steps */}
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
        Franchise Process
      </h2>
      <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
        Follow our simple four-step process to become a Bubble Cakery franchise owner.
      </p>
    </motion.div>

    <div className="relative">
      {/* Continuous Process Line - passes through all circles */}
      <div className="hidden lg:block absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-primary via-primary to-primary z-0" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Step Number Circle */}
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 font-playfair text-2xl font-bold shadow-golden relative z-10 border-4 border-cream">
              {step.step}
            </div>
            
            {/* Step Content */}
            <div className="text-center">
              <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-inter text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* Franchise Application Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Franchise Application
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Ready to start your journey? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="premium-card max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="font-inter font-medium">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="font-inter font-medium">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="font-inter font-medium">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="location" className="font-inter font-medium">Preferred Location</Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="mt-2"
                    placeholder="City, State"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="message" className="font-inter font-medium">Tell us about yourself</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2"
                  placeholder="Share your business experience and why you're interested in our franchise..."
                />
              </div>
              
              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-golden hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Alternative Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
              Prefer to Talk Directly?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppInquiry}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button
                onClick={() => window.open("tel:+1234567890", "_self")}
                variant="outline"
                className="px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
              <Button
                onClick={() => window.open("mailto:franchise@bubbiecakery.com", "_self")}
                variant="outline"
                className="px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Franchise Gallery Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Franchise Gallery
            </h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore some of our beautiful franchise locations and their unique setups.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1,2,3,4,5,6].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: num * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-lg group cursor-pointer"
                onClick={() => setZoomImg(`/images/${num}.jpeg`)}
              >
                <img
                  src={`/images/${num}.jpeg`}
                  alt={`Franchise location ${num}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
        {/* Zoom Modal */}
        {zoomImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setZoomImg(null)}
          >
            <div className="relative">
              {/* Cross Button */}
              <button
                onClick={() => setZoomImg(null)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:bg-red-500 hover:text-white transition-colors z-10"
                aria-label="Close"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img
                src={zoomImg}
                alt="Zoomed Franchise"
                className="max-w-3xl max-h-[80vh] rounded-xl shadow-2xl border-4 border-white"
                onClick={e => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Franchise;