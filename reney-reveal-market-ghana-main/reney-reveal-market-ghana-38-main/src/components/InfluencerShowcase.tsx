import { Users } from "lucide-react";

const influencers = [
  {
    name: "Sarah Johnson",
    handle: "@sarahstyles",
    image: "/lovable-uploads/3eee2c84-5b25-44f7-9889-8f95ed588385.png",
    quote: "RevealbyReney's pieces bring authentic Ghanaian fashion to life. The quality and attention to detail is amazing!"
  },
  {
    name: "Michelle Kwame",
    handle: "@michellek",
    image: "/lovable-uploads/23673d19-2a48-464c-9845-2c26a6497b17.png",
    quote: "Every piece tells a story. I'm in love with their traditional patterns and modern designs."
  },
  {
    name: "David Adebayo",
    handle: "@davidstyle",
    image: "/lovable-uploads/b70848fe-d47e-4668-8e36-cb5b6c6bdd5c.png",
    quote: "The most authentic Ghanaian fashion I've worn. The craftsmanship is exceptional!"
  }
];

const InfluencerShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-3 bg-ghana-gold/10 rounded-full mb-6">
            <Users className="h-6 w-6 text-ghana-gold" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Loved by Influencers
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            See how fashion enthusiasts style their RevealbyReney pieces
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {influencers.map((influencer) => (
            <div key={influencer.handle} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-64 w-full overflow-hidden">
                <img 
                  src={influencer.image} 
                  alt={influencer.name}
                  className="w-full h-full object-cover transform transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{influencer.name}</h3>
                    <p className="text-ghana-gold">{influencer.handle}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&quot;{influencer.quote}&quot;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfluencerShowcase;
