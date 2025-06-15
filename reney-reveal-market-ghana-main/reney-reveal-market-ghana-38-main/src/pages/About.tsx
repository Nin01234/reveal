import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-ghana-black py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Our Story</h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Discover the passion and heritage behind RevealbyReney's authentic Ghanaian fashion and accessories.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Mission */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At RevealbyReney, our mission is to celebrate and share the rich cultural heritage of Ghana 
                  through authentic, handcrafted fashion and accessories.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We believe that every product tells a story - a story of tradition, craftsmanship, and artistic 
                  expression that has been passed down through generations. By supporting local artisans and using 
                  traditional techniques and materials, we aim to preserve and promote Ghana's cultural identity 
                  while creating beautiful, unique pieces for our customers.
                </p>
                <p className="text-lg text-gray-600">
                  Our goal is to bridge cultures and bring the vibrant colors, patterns, and artistry of Ghana 
                  to the global stage, allowing people worldwide to appreciate and embrace our heritage.
                </p>
              </div>
              <div className="mt-10 lg:mt-0">
                <img 
                  className="rounded-lg shadow-lg object-cover"
                  src="/lovable-uploads/4b3372f3-e923-4416-85c9-6622ab2794e3.png" 
                  alt="RevealbyReney mission"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Values */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Our Values</h2>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
                The core principles that guide everything we do at RevealbyReney.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-ghana-gold mb-4">Authenticity</h3>
                <p className="text-gray-600">
                  We are committed to creating genuine products that truly represent Ghana's cultural heritage. 
                  Each piece is designed with respect for traditional patterns and techniques.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-ghana-gold mb-4">Quality</h3>
                <p className="text-gray-600">
                  We take pride in delivering products of the highest quality. Our attention to detail ensures 
                  that each item meets our rigorous standards of craftsmanship and durability.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-ghana-gold mb-4">Community</h3>
                <p className="text-gray-600">
                  We support local artisans and communities by providing fair compensation and promoting 
                  sustainable practices that help preserve traditional skills and knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Journey */}
        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
              <div className="order-2 lg:order-1">
                <img 
                  className="rounded-lg shadow-lg object-cover"
                  src="/lovable-uploads/65d1689b-bc2d-4703-8006-4473010a9ccb.png" 
                  alt="RevealbyReney journey"
                />
              </div>
              
              <div className="mt-10 lg:mt-0 order-1 lg:order-2">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">Our Journey</h2>
                <p className="text-lg text-gray-600 mb-6">
                  RevealbyReney began as a passion project, driven by a deep love for Ghanaian culture and 
                  a desire to share its beauty with the world. What started as a small collection of handmade 
                  accessories has grown into a brand that embraces all aspects of Ghanaian fashion.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Over the years, we have built relationships with talented artisans across Ghana, 
                  collaborating with them to create unique pieces that blend traditional techniques 
                  with contemporary designs.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we continue to grow and evolve, but our commitment to authenticity, quality, 
                  and community remains at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-ghana-gold py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Experience Authentic Ghanaian Style</h2>
            <p className="max-w-2xl mx-auto text-lg text-white/90 mb-8">
              Explore our collection of handcrafted products and bring a piece of Ghanaian culture into your life.
            </p>
            <Link to="/products">
              <Button className="bg-white text-ghana-gold hover:bg-gray-100 hover:text-ghana-red transition-colors">
                Shop Our Collection
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <Subscribe />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
