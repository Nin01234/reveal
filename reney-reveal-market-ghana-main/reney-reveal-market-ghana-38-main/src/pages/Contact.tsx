
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simple validation
    if (!formState.name || !formState.email || !formState.message) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // This would normally submit to an API
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-ghana-black py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Contact Us</h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                We'd love to hear from you. Reach out with any questions, feedback, or inquiries.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Form & Info */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Your Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      className="min-h-[150px]"
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-ghana-gold hover:bg-ghana-red transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-ghana-gold flex-shrink-0 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Our Address</h3>
                      <p className="text-gray-600">Accra, Ghana</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-ghana-gold flex-shrink-0 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600">+233 244239487</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-ghana-gold flex-shrink-0 mr-4" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-600">
                        <a 
                          href="mailto:revealbyreneyofficial@gmail.com" 
                          className="text-ghana-gold hover:underline"
                        >
                          revealbyreneyofficial@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.instagram.com/revealbyreney?igsh=YjVxM3l0MnR5cTNr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-ghana-gold text-gray-600 hover:text-white p-3 rounded-full transition-colors"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a 
                        href="https://www.facebook.com/share/1ATMYYySLz/?mibextid=wwXIfr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-ghana-gold text-gray-600 hover:text-white p-3 rounded-full transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                      </a>
                      <a 
                        href="mailto:revealbyreneyofficial@gmail.com" 
                        className="bg-gray-100 hover:bg-ghana-gold text-gray-600 hover:text-white p-3 rounded-full transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Saturday:</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
