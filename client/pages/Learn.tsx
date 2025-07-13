import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Play } from "lucide-react";

const vocabularyWords = [
  "Guten Tag",
  "Danke schön",
  "Bitte",
  "Entschuldigung",
  "Auf Wiedersehen",
  "Hallo",
  "Wie geht's?",
  "Sehr gut",
  "Ja",
  "Nein",
];

export function Learn() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWord = vocabularyWords[currentIndex];

  const handleBack = () => {
    navigate("/home");
  };

  const handleKnow = () => {
    nextCard();
  };

  const handleDontKnow = () => {
    nextCard();
  };

  const nextCard = () => {
    if (currentIndex < vocabularyWords.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // End of cards, go back to home
      navigate("/home");
    }
  };

  const handlePlayAudio = () => {
    // Placeholder for audio functionality
    console.log(`Playing audio for: ${currentWord}`);
  };

  return (
    <div className="learn-bg">
      {/* Mobile-first container */}
      <div className="w-full max-w-sm mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-5 pt-8">
          <button
            onClick={handleBack}
            className="glass-button rounded-lg px-3 py-2 flex items-center gap-2 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
            <span className="text-base text-white drop-shadow-sm">Back</span>
          </button>
          <span className="text-base text-white drop-shadow-sm font-medium">
            {currentIndex + 1} / {vocabularyWords.length}
          </span>
        </div>

        {/* Word Card */}
        <div className="px-5 mt-16">
          <div className="glass-card rounded-lg p-8 mb-8 min-h-[200px] flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-white text-center drop-shadow-lg mb-4">
              {currentWord}
            </h2>
            <div className="text-white/70 text-sm text-center">
              German Greeting
            </div>
          </div>

          {/* Play Button */}
          <div className="flex justify-center mb-12">
            <button
              onClick={handlePlayAudio}
              className="w-12 h-12 glass-button rounded-full flex items-center justify-center transition-all hover:scale-110"
            >
              <Play className="w-5 h-5 text-white ml-0.5" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleKnow}
              className="flex-1 bg-green-400/30 hover:bg-green-400/50 transition-colors py-3 px-6 rounded-lg glass-card border-green-300/30"
            >
              <span className="text-sm font-medium text-white drop-shadow-sm">
                ✅ I Know
              </span>
            </button>
            <button
              onClick={handleDontKnow}
              className="flex-1 bg-red-400/30 hover:bg-red-400/50 transition-colors py-3 px-6 rounded-lg glass-card border-red-300/30"
            >
              <span className="text-sm font-medium text-white drop-shadow-sm">
                ❌ Don't Know
              </span>
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-4">
            <div className="flex space-x-2">
              {vocabularyWords.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index <= currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Swipe Instruction */}
          <div className="text-center mt-8">
            <p className="text-xs text-white/60">← Swipe to switch cards →</p>
          </div>
        </div>
      </div>
    </div>
  );
}
