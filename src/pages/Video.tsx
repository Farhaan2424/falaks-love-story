import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Heart, Play } from "lucide-react";

const Video = () => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleBack = () => {
    setIsAnimating(true);
    setTimeout(() => navigate("/images"), 300);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => navigate("/letter"), 300);
  };

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // Here you would implement actual video playback
    // For now, we'll just show a message
  };

  return (
    <div className={`min-h-screen p-6 transition-all duration-300 ${isAnimating ? 'opacity-0 scale-95' : 'animate-fade-in'}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-8 h-8 text-primary animate-heart-beat" fill="currentColor" />
          <h1 className="text-4xl font-bold gradient-love bg-clip-text text-transparent">
            A Special Message
          </h1>
          <Heart className="w-8 h-8 text-primary animate-heart-beat" fill="currentColor" />
        </div>
        <p className="text-muted-foreground text-lg">
          Watch this special birthday video made just for you 🎥💕
        </p>
      </div>

      {/* Video Section */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-love hover:shadow-heart transition-all duration-300">
          {!isPlaying ? (
            // Video Thumbnail/Placeholder
            <div className="w-full h-full gradient-soft flex flex-col items-center justify-center cursor-pointer group" onClick={handlePlayVideo}>
              <div className="relative">
                <div className="w-24 h-24 rounded-full gradient-love flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-heart animate-love-glow">
                  <Play className="w-12 h-12 text-primary-foreground ml-1" fill="currentColor" />
                </div>
                
                {/* Floating hearts around play button */}
                <Heart className="absolute -top-2 -right-2 w-6 h-6 text-accent animate-float" fill="currentColor" />
                <Heart className="absolute -bottom-1 -left-3 w-4 h-4 text-primary/60 animate-heart-beat" fill="currentColor" />
              </div>
              
              <div className="text-center mt-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Birthday Wishes for Falak</h3>
                <p className="text-muted-foreground">Click to play the special video message</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4">
                <Heart className="w-5 h-5 text-primary/40 animate-pulse" fill="currentColor" />
              </div>
              <div className="absolute top-6 right-8">
                <Heart className="w-4 h-4 text-accent animate-float" fill="currentColor" />
              </div>
              <div className="absolute bottom-8 left-6">
                <Heart className="w-6 h-6 text-primary/30 animate-heart-beat" fill="currentColor" />
              </div>
            </div>
          ) : (
            // Video Player Placeholder
            <div className="w-full h-full bg-black flex items-center justify-center">
              <div className="text-center text-white">
                <Heart className="w-16 h-16 mx-auto mb-4 animate-heart-beat" fill="currentColor" />
                <p className="text-xl">Video would play here...</p>
                <p className="text-sm text-gray-300 mt-2">
                  In a real implementation, you would integrate with a video player
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Video Description */}
        <div className="text-center mt-6 p-6 gradient-soft rounded-2xl shadow-soft">
          <h3 className="text-xl font-semibold text-primary mb-2">
            "Every moment with you feels like magic ✨"
          </h3>
          <p className="text-muted-foreground">
            A heartfelt message filled with love, memories, and birthday wishes that will make your heart flutter.
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <Button
          onClick={handleBack}
          variant="outline"
          className="flex items-center gap-2 px-8 py-4 text-lg border-primary/30 hover:bg-primary/10 hover:border-primary rounded-full shadow-soft"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Images
        </Button>

        <div className="text-center">
          <Heart className="w-6 h-6 text-primary mx-auto animate-heart-beat" fill="currentColor" />
          <p className="text-sm text-muted-foreground mt-2">3 of 4</p>
        </div>

        <Button
          onClick={handleNext}
          className="flex items-center gap-2 px-8 py-4 text-lg gradient-love text-primary-foreground rounded-full shadow-love hover:shadow-heart hover:scale-105 transition-all duration-300"
        >
          Read Letter
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default Video;