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

type Answer = "know" | "dont-know" | null;

export function Learn() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(
    new Array(vocabularyWords.length).fill(null),
  );
  const currentWord = vocabularyWords[currentIndex];

  const handleBack = () => {
    navigate("/home");
  };

  const handleKnow = () => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = "know";
    setAnswers(newAnswers);
    nextCard();
  };

  const handleDontKnow = () => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = "dont-know";
    setAnswers(newAnswers);
    nextCard();
  };

  const nextCard = () => {
    if (currentIndex < vocabularyWords.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // End of cards, show summary and go back to home
      const knownCount =
        answers.filter((answer) => answer === "know").length +
        (answers[currentIndex] ? 1 : 0);
      const unknownCount =
        answers.filter((answer) => answer === "dont-know").length +
        (answers[currentIndex] ? 1 : 0);

      setTimeout(() => {
        alert(
          `Session Complete!\n✅ Known: ${knownCount} words\n❌ Need Review: ${unknownCount} words`,
        );
        navigate("/home");
      }, 100);
    }
  };

  const handlePlayAudio = () => {
    console.log(`Playing audio for: ${currentWord}`);
  };

  const getProgressDotColor = (index: number) => {
    if (index < currentIndex) {
      // Already answered
      return answers[index] === "know" ? "bg-green-500" : "bg-red-500";
    } else if (index === currentIndex) {
      // Current word
      return "bg-white border-2 border-white";
    } else {
      // Not yet answered
      return "bg-white/30";
    }
  };

  const getProgressDotSize = (index: number) => {
    return index === currentIndex ? "w-3 h-3" : "w-2 h-2";
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Mobile app container */}
      <div className="w-full max-w-sm mx-auto bg-purple-500 rounded-lg h-[600px]">
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

          {/* Progress Indicator with Colored Dots */}
          <div className="flex justify-center mb-4">
            <div className="flex space-x-2">
              {vocabularyWords.map((_, index) => (
                <div
                  key={index}
                  className={`rounded-full transition-all duration-300 ${getProgressDotColor(index)} ${getProgressDotSize(index)}`}
                />
              ))}
            </div>
          </div>

          {/* Progress Legend */}
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-white/70">Known</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-xs text-white/70">Need Review</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-white/30 rounded-full"></div>
              <span className="text-xs text-white/70">Pending</span>
            </div>
          </div>

          {/* Current Progress Summary */}
          <div className="text-center mt-4">
            <div className="flex justify-center gap-4 text-xs text-white/80">
              <span>
                ✅ Known: {answers.filter((answer) => answer === "know").length}
              </span>
              <span>
                ❌ Review:{" "}
                {answers.filter((answer) => answer === "dont-know").length}
              </span>
            </div>
          </div>

          {/* Swipe Instruction */}
          <div className="text-center mt-6">
            <p className="text-xs text-white/60">← Swipe to switch cards →</p>
          </div>
        </div>
      </div>
    </div>
  );
}
