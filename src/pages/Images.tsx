import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";

// Import the romantic images
import romantic1 from "@/assets/romantic-1.jpg";
import romantic2 from "@/assets/romantic-2.jpg";
import romantic3 from "@/assets/romantic-3.jpg";
import romantic4 from "@/assets/romantic-4.jpg";
import romantic5 from "@/assets/romantic-5.jpg";
import romantic6 from "@/assets/romantic-6.jpg";

const Images = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  // Beautiful romantic images
  const images = [
    { src: romantic1, alt: "Romantic sunset moment with heart clouds" },
    { src: romantic2, alt: "Beautiful roses bouquet with soft lighting" },
    { src: romantic3, alt: "Candlelit dinner with heart decorations" },
    { src: romantic4, alt: "Dancing under the starry night sky" },
    { src: romantic5, alt: "Heart balloons floating in pastel sky" },
    { src: romantic6, alt: "Love letter with vintage romantic style" },
  ];

  const handleBack = () => {
    setIsAnimating(true);
    setTimeout(() => navigate("/"), 300);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => navigate("/video"), 300);
  };

  return (
    <div className={`min-h-screen p-6 transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'animate-fade-in'}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-8 h-8 text-primary animate-heart-beat" fill="currentColor" />
          <h1 className="text-4xl font-bold gradient-love bg-clip-text text-transparent">
            Our Beautiful Memories
          </h1>
          <Heart className="w-8 h-8 text-primary animate-heart-beat" fill="currentColor" />
        </div>
        <p className="text-muted-foreground text-lg">
          Every moment with you is a treasure, Falak 💕
        </p>
      </div>

      {/* Images Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-love hover:shadow-heart transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Image Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium bg-black/50 rounded-lg p-2 backdrop-blur-sm">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Button
          onClick={handleBack}
          variant="outline"
          className="flex items-center gap-2 px-8 py-4 text-lg border-primary/30 hover:bg-primary/10 hover:border-primary rounded-full shadow-soft"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Button>

        <div className="text-center">
          <Heart className="w-6 h-6 text-primary mx-auto animate-heart-beat" fill="currentColor" />
          <p className="text-sm text-muted-foreground mt-2">2 of 4</p>
        </div>

        <Button
          onClick={handleNext}
          className="flex items-center gap-2 px-8 py-4 text-lg gradient-love text-primary-foreground rounded-full shadow-love hover:shadow-heart hover:scale-105 transition-all duration-300"
        >
          Watch Video
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Images;