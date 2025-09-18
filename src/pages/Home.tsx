import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => navigate("/images"), 300);
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'animate-fade-in'}`}>
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-primary/20 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 20 + 10}px`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-6 max-w-2xl mx-auto">
        {/* Large Animated Heart */}
        <div className="mb-8">
          <Heart 
            className="w-32 h-32 mx-auto text-primary animate-heart-beat shadow-heart" 
            fill="currentColor"
          />
        </div>

        {/* Main Message */}
        <div className="mb-12 space-y-4">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-love-glow">
            This is for you
          </h1>
          <h2 className="text-5xl font-bold text-primary animate-pulse">
            Falak
          </h2>
          <p className="text-xl text-muted-foreground mt-6">
            A special birthday celebration made with love 💕
          </p>
        </div>

        {/* Next Button */}
        <Button
          onClick={handleNext}
          className="gradient-love text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full shadow-love hover:shadow-heart transition-all duration-300 hover:scale-105 animate-love-glow"
        >
          Begin the Journey 💖
        </Button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10">
        <Heart className="w-6 h-6 text-accent animate-heart-beat" fill="currentColor" />
      </div>
      <div className="absolute top-10 right-10">
        <Heart className="w-8 h-8 text-primary/60 animate-float" fill="currentColor" />
      </div>
    </div>
  );
};

export default Home;