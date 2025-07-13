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
      navigate("/home");
    }
  };

  const handlePlayAudio = () => {
    console.log(`Playing audio for: ${currentWord}`);
  };

  return (
    <div className="learn-bg">
      {/* Mobile-first container */}
      <div className="w-full max-w-sm mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 pt-8">
          <button
            onClick={handleBack}
            className="simple-button rounded-lg px-3 py-2 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
            <span className="text-base text-white">Back</span>
          </button>
          <span className="text-base text-white font-medium">
            {currentIndex + 1} / {vocabularyWords.length}
          </span>
        </div>

        {/* Word Card */}
        <div className="px-5 mt-16">
          <div className="simple-card rounded-lg p-8 mb-8 min-h-[200px] flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
              {currentWord}
            </h2>
            <div className="text-gray-600 text-sm text-center">
              German Greeting
            </div>
          </div>

          {/* Play Button */}
          <div className="flex justify-center mb-12">
            <button
              onClick={handlePlayAudio}
              className="w-12 h-12 simple-button rounded-full flex items-center justify-center"
            >
              <Play className="w-5 h-5 text-white ml-0.5" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleKnow}
              className="flex-1 bg-green-500 hover:bg-green-600 transition-colors py-3 px-6 rounded-lg"
            >
              <span className="text-sm font-medium text-white">✅ I Know</span>
            </button>
            <button
              onClick={handleDontKnow}
              className="flex-1 bg-red-500 hover:bg-red-600 transition-colors py-3 px-6 rounded-lg"
            >
              <span className="text-sm font-medium text-white">
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
