import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Bakery",
      details: ["123 Baker Street, Pastry Lane", "Sweet City, SC 12345"],
      action: "Get Directions",
      href: "https://maps.google.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (234) 567-890", "Mon-Sat: 7AM - 8PM"],
      action: "Call Now",
      href: "tel:+1234567890",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@bubbiecakery.com", "We respond within 24 hours"],
      action: "Send Email",
      href: "mailto:hello@bubbiecakery.com",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Saturday: 7:00 AM - 8:00 PM", "Sunday: 8:00 AM - 6:00 PM"],
      action: "View Menu",
      href: "/shop",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Hi! I have a question about Bubble Cakery. Can you help me?");
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
              Let's Connect
            </h1>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have questions about our products, 
              need help with an order, or want to share feedback, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="premium-card text-center group hover:bg-gradient-cream"
              >
                <div className="w-16 h-16 bg-gradient-golden rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-foreground mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-6">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="font-inter text-muted-foreground text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                <Button
                  onClick={() => window.open(info.href, info.href.startsWith('http') ? '_blank' : '_self')}
                  variant="outline"
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  {info.action}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="font-inter text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <div className="premium-card">
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
                        placeholder="Enter your name"
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
                  
                  <div>
                    <Label htmlFor="phone" className="font-inter font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Enter your phone number (optional)"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="font-inter font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold shadow-golden hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                    >
                      Send Message
                    </Button>
                    <Button
                      type="button"
                      onClick={handleWhatsAppContact}
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
                Find Us Here
              </h2>
              <p className="font-inter text-muted-foreground mb-8">
                Visit our bakery to experience the aroma of fresh baking and see our artisans at work.
              </p>
              
              <div className="premium-card h-96 bg-gradient-cream flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                    Interactive Map
                  </h3>
                  <p className="font-inter text-muted-foreground mb-6">
                    Map integration would be embedded here showing our bakery location with 
                    directions and nearby landmarks.
                  </p>
                  <Button
                    onClick={() => window.open("https://maps.google.com", "_blank")}
                    className="bg-primary text-primary-foreground px-6 py-3 rounded-xl"
                  >
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-inter text-lg text-muted-foreground">
              Quick answers to common questions about our products and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "Do you accept custom cake orders?",
                answer: "Yes! We specialize in custom cakes for weddings, birthdays, and special events. Contact us at least 48 hours in advance."
              },
              {
                question: "What are your delivery options?",
                answer: "We offer local delivery within 15 miles of our bakery. Delivery fees vary by distance. Contact us for details."
              },
              {
                question: "Do you have vegan or gluten-free options?",
                answer: "Yes, we offer a selection of vegan and gluten-free pastries. Please check our shop page or call for current availability."
              },
              {
                question: "How far in advance should I place an order?",
                answer: "For regular items, same-day orders are often possible. For custom cakes and large orders, we recommend 2-3 days notice."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="premium-card"
              >
                <h3 className="font-playfair text-xl font-bold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="font-inter text-muted-foreground">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;