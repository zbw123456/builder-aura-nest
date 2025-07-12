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
    <div className="min-h-screen bg-white">
      {/* Mobile-first container */}
      <div className="w-full max-w-sm mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 pt-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-foreground hover:text-gray-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-base">返回</span>
          </button>
          <span className="text-base text-foreground">
            {currentIndex + 1} / {vocabularyWords.length}
          </span>
        </div>

        {/* Word Card */}
        <div className="px-5 mt-16">
          <div className="bg-app-gray rounded-lg p-8 mb-8 min-h-[200px] flex items-center justify-center">
            <h2 className="text-2xl font-bold text-foreground text-center">
              {currentWord}
            </h2>
          </div>

          {/* Play Button */}
          <div className="flex justify-center mb-12">
            <button
              onClick={handlePlayAudio}
              className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors"
            >
              <Play className="w-4 h-4 text-foreground ml-0.5" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={handleKnow}
              className="flex-1 bg-app-lightgreen hover:bg-green-300 transition-colors py-3 px-6 rounded-lg"
            >
              <span className="text-sm font-medium text-foreground">
                ✅ 我认识
              </span>
            </button>
            <button
              onClick={handleDontKnow}
              className="flex-1 bg-app-lightred hover:bg-red-300 transition-colors py-3 px-6 rounded-lg"
            >
              <span className="text-sm font-medium text-foreground">
                ❌ 不认识
              </span>
            </button>
          </div>

          {/* Swipe Instruction */}
          <div className="text-center mt-8">
            <p className="text-xs text-gray-400">← 滑动切换卡片 →</p>
          </div>
        </div>
      </div>
    </div>
  );
}
