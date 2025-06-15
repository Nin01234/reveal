import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Play, X } from "lucide-react";

// Sample videos data with YouTube video IDs
const videos = [
  {
    id: 1,
    title: "Authentic Ghanaian Jewelry Collection",
    description: "Discover the intricacy and beauty of our handcrafted Ghanaian jewelry pieces.",
    thumbnail: "/lovable-uploads/a1bb091c-e9d5-4573-9ad9-3faca7050ec3.png",
    category: "jewelry",
    featured: true,
    videoId: "PS78866qStM"
  },
  {
    id: 2,
    title: "Traditional Ankara Fashion Showcase",
    description: "Watch our latest collection of Ankara designs in this exclusive fashion showcase.",
    thumbnail: "/lovable-uploads/23673d19-2a48-464c-9845-2c26a6497b17.png",
    category: "clothing",
    featured: true,
    videoId: "iH6kpRAbmnY"
  },
  {
    id: 3,
    title: "Behind the Craftsmanship: Making of Ghanaian Bags",
    description: "See how our skilled artisans create unique, high-quality Ghanaian bags.",
    thumbnail: "/lovable-uploads/4b3372f3-e923-4416-85c9-6622ab2794e3.png",
    category: "bags",
    videoId: "o8jldM8N-Mg"
  },
  {
    id: 4,
    title: "Styling Guide: Ghanaian Accessories",
    description: "Learn how to style our Ghanaian accessories for any occasion.",
    thumbnail: "/lovable-uploads/65d1689b-bc2d-4703-8006-4473010a9ccb.png",
    category: "accessories",
    videoId: "RjgJqCWwe54"
  },
];

const VideoCard = ({ 
  video, 
  onPlay 
}: { 
  video: typeof videos[0]; 
  onPlay: (videoId: number) => void;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-60 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <Button 
            onClick={() => onPlay(video.id)}
            className="bg-ghana-gold hover:bg-ghana-red transition-colors rounded-full h-16 w-16 flex items-center justify-center"
          >
            <Play className="h-8 w-8 text-white" />
          </Button>
        </div>
        {video.featured && (
          <div className="absolute top-2 left-2 bg-ghana-red text-white text-xs uppercase font-semibold py-1 px-2 rounded">
            Featured
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs py-1 px-2 rounded">
          {video.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{video.description}</p>
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full border-ghana-gold text-ghana-gold hover:bg-ghana-gold hover:text-white transition-colors"
          onClick={() => onPlay(video.id)}
        >
          Watch Video
        </Button>
      </div>
    </div>
  );
};

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const handlePlayVideo = (videoId: number) => {
    setSelectedVideo(videoId);
    
    // Scroll to the top if a video is selected
    if (videoId !== null) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const selectedVideoData = selectedVideo ? videos.find(v => v.id === selectedVideo) : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-ghana-black py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Product Videos</h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Watch our products in action and learn more about the craftsmanship behind each piece.
              </p>
            </div>
          </div>
        </div>
        
        {/* Selected Video Section - Only shown when a video is selected */}
        {selectedVideo && selectedVideoData && (
          <div className="bg-gray-900 py-12">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideoData.videoId}?autoplay=1`}
                  title={selectedVideoData.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {selectedVideoData.title}
                </h2>
                <p className="text-gray-300">
                  {selectedVideoData.description}
                </p>
                <div className="mt-6">
                  <Button 
                    onClick={() => setSelectedVideo(null)}
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-gray-900"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Close Video
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Videos Grid */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {!selectedVideo && (
              <>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Explore Our Product Videos
                  </h2>
                  <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                    Get a closer look at our products and see the beauty of Ghanaian craftsmanship.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {videos.map((video) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      onPlay={handlePlayVideo}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-ghana-gold py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience RevealbyReney?</h2>
            <p className="max-w-2xl mx-auto text-lg text-white/90 mb-8">
              Explore our collection of authentic Ghanaian fashion and accessories.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/products">
                <Button className="bg-white text-ghana-gold hover:bg-gray-100 hover:text-ghana-red transition-colors">
                  Shop Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-colors">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Newsletter Subscription */}
        <Subscribe />
      </main>
      
      <Footer />
    </div>
  );
};

export default Videos;
