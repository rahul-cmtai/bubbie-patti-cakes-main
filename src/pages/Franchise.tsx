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
    
    // Validate form data
    if (!formData.name || !formData.email || !formData.phone || !formData.location) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message with better formatting
    const message = encodeURIComponent(
      `🏪 *FRANCHISE APPLICATION*\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Phone:* ${formData.phone}\n` +
      `📍 *Location:* ${formData.location}\n\n` +
      `💬 *Message:*\n${formData.message || 'No additional message provided'}\n\n` +
      `🕐 *Submitted:* ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`
    );

    // Open WhatsApp with the message
    window.open(`https://api.whatsapp.com/send?phone=919138724870&text=${message}`, "_blank");
    
    // Show success toast
    toast({
      title: "Application Submitted! 🎉",
      description: "Redirecting to WhatsApp to send your franchise application...",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", location: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleWhatsAppInquiry = () => {
    const message = encodeURIComponent(
      "🍰 *FRANCHISE INQUIRY*\n\n" +
      "Hi! I'm interested in the Bubble Cakery franchise opportunity. Can you provide me with more information about:\n\n" +
      "• Investment requirements\n" +
      "• Franchise locations available\n" +
      "• Training programs\n" +
      "• Expected ROI\n\n" +
      "Looking forward to hearing from you!"
    );
    window.open(`https://wa.me/919138724870?text=${message}`, "_blank");
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWhatsAppInquiry}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Quick WhatsApp Inquiry
              </Button>
              <Button
                onClick={() => document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                className="px-8 py-4 rounded-xl font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Apply Now
              </Button>
            </div>
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
                className="premium-card text-center group hover:bg-gradient-cream hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
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
                  className="relative group"
                >
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 font-playfair text-2xl font-bold shadow-golden relative z-10 border-4 border-cream group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  
                  {/* Step Content */}
                  <div className="text-center group-hover:transform group-hover:-translate-y-1 transition-transform duration-300">
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
      <section id="application-form" className="py-20 bg-background">
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
                  <Label htmlFor="name" className="font-inter font-medium text-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 focus:ring-2 focus:ring-primary"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="font-inter font-medium text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="font-inter font-medium text-foreground">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 focus:ring-2 focus:ring-primary"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <Label htmlFor="location" className="font-inter font-medium text-foreground">
                    Preferred Location *
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="mt-2 focus:ring-2 focus:ring-primary"
                    placeholder="City, State"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="message" className="font-inter font-medium text-foreground">
                  Tell us about yourself
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Share your business experience, investment capacity, and why you're interested in our franchise..."
                />
              </div>
              
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-golden hover:shadow-hover transition-all duration-300 hover:-translate-y-1 w-full md:w-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Submit Application via WhatsApp
                </Button>
                <p className="font-inter text-xs text-muted-foreground mt-2">
                  * This will redirect you to WhatsApp with your application details
                </p>
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
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button
                onClick={() => window.open("tel:+919138724870", "_self")}
                variant="outline"
                className="px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
              <Button
                onClick={() => window.open("mailto:franchise@bubbiecakery.com", "_self")}
                variant="outline"
                className="px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
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
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: num * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-300"
                onClick={() => setZoomImg(`/images/${num}.jpeg`)}
              >
                <img
                  src={`/images/${num}.jpeg`}
                  alt={`Franchise location ${num}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Zoom Modal */}
        {zoomImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setZoomImg(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] p-4">
              {/* Cross Button */}
              <button
                onClick={() => setZoomImg(null)}
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-2xl hover:bg-red-500 hover:text-white transition-all duration-300 z-10 hover:scale-110"
                aria-label="Close"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                src={zoomImg}
                alt="Zoomed Franchise"
                className="max-w-full max-h-full rounded-xl shadow-2xl border-4 border-white"
                onClick={e => e.stopPropagation()}
              />
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Franchise;
