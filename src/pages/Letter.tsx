import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Home } from "lucide-react";

const Letter = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleBack = () => {
    setIsAnimating(true);
    setTimeout(() => navigate("/video"), 300);
  };

  const handleHome = () => {
    setIsAnimating(true);
    setTimeout(() => navigate("/"), 300);
  };

  return (
    <div className={`min-h-screen p-6 transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'animate-fade-in'}`}>
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              fontSize: `${Math.random() * 15 + 8}px`
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-8 h-8 text-primary animate-heart-beat" fill="currentColor" />
          <h1 className="text-4xl font-bold gradient-love bg-clip-text text-transparent">
            A Letter from the Heart
          </h1>
          <Heart className="w-8 h-8 text-primary animate-heart-beat" fill="currentColor" />
        </div>
        <p className="text-muted-foreground text-lg">
          Words written with endless love for your special day 💌
        </p>
      </div>

      {/* Letter Content */}
      <div className="max-w-3xl mx-auto mb-8 relative z-10">
        <div className="gradient-soft p-8 md:p-12 rounded-3xl shadow-love border border-primary/10 relative overflow-hidden">
          {/* Decorative corner hearts */}
          <Heart className="absolute top-4 right-4 w-6 h-6 text-primary/20 animate-pulse" fill="currentColor" />
          <Heart className="absolute bottom-4 left-4 w-5 h-5 text-accent/30 animate-heart-beat" fill="currentColor" />
          
          <div className="space-y-6 text-center md:text-left">
            <div className="text-right text-muted-foreground text-sm mb-8">
              On your special day...
            </div>

            <div className="text-2xl font-bold text-primary mb-6 text-center">
              My Dearest Falak 💕
            </div>

            <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
              <p>
                Happy Birthday to the most wonderful person in my world! 🎉✨ Today marks another year of your beautiful existence, and I couldn't be more grateful to celebrate this special day with you.
              </p>

              <p>
                Every moment we've shared together has been a precious gift. Your smile lights up my darkest days, your laughter is the sweetest melody I know, and your love has transformed my life in the most magical ways.
              </p>

              <p>
                As you blow out your candles today, I want you to know that you are not just another year older, but another year more amazing, more beautiful, and more loved than ever before. 🕯️💖
              </p>

              <p>
                I wish for your dreams to soar as high as the stars, for your heart to always be filled with joy, and for our love to grow stronger with each passing day. You deserve all the happiness in the universe and more.
              </p>

              <p className="text-center font-semibold text-primary text-xl">
                May this birthday be the beginning of your most incredible year yet! 🌟
              </p>
            </div>

            <div className="text-center mt-8 pt-6 border-t border-primary/20">
              <p className="text-lg font-medium text-primary mb-2">
                With all my love and endless birthday wishes,
              </p>
              <div className="flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-primary animate-heart-beat" fill="currentColor" />
                <span className="text-xl font-bold gradient-love bg-clip-text text-transparent">
                  Forever Yours
                </span>
                <Heart className="w-5 h-5 text-primary animate-heart-beat" fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center max-w-3xl mx-auto relative z-10">
        <Button
          onClick={handleBack}
          variant="outline"
          className="flex items-center gap-2 px-8 py-4 text-lg border-primary/30 hover:bg-primary/10 hover:border-primary rounded-full shadow-soft"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Video
        </Button>

        <div className="text-center">
          <Heart className="w-6 h-6 text-primary mx-auto animate-heart-beat" fill="currentColor" />
          <p className="text-sm text-muted-foreground mt-2">4 of 4</p>
        </div>

        <Button
          onClick={handleHome}
          className="flex items-center gap-2 px-8 py-4 text-lg gradient-love text-primary-foreground rounded-full shadow-love hover:shadow-heart hover:scale-105 transition-all duration-300"
        >
          <Home className="w-5 h-5" />
          Back to Start
        </Button>
      </div>

      {/* Final Message */}
      <div className="text-center mt-12 relative z-10">
        <div className="inline-block gradient-soft px-8 py-4 rounded-full shadow-soft border border-primary/20">
          <p className="text-muted-foreground">
            🎂 Happy Birthday, Falak! May all your wishes come true! 🎂
          </p>
        </div>
      </div>
    </div>
  );
};

export default Letter;