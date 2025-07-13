import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const reviewWords = [
  { word: "Guten Tag", pronunciation: "GOO-ten tahk", meaning: "Good day" },
  {
    word: "Danke schön",
    pronunciation: "DAHN-kuh shurn",
    meaning: "Thank you",
  },
  { word: "Bitte", pronunciation: "BIT-tuh", meaning: "Please/You're welcome" },
  {
    word: "Entschuldigung",
    pronunciation: "ent-SHOOL-di-goong",
    meaning: "Excuse me",
  },
  { word: "Hallo", pronunciation: "hah-LOH", meaning: "Hello" },
];

export function Review() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  return (
    <div className="review-bg">
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
          <h2 className="text-white font-medium drop-shadow-sm">Review</h2>
        </div>

        {/* Filter */}
        <div className="px-5 mt-8">
          <div className="glass-card rounded-md p-3 mb-6 w-fit">
            <span className="text-sm text-white drop-shadow-sm">
              Error Vocabulary 🔽
            </span>
          </div>

          {/* Review Stats */}
          <div className="glass-card rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
              <div className="text-center">
                <div className="text-white text-lg font-bold">
                  {reviewWords.length}
                </div>
                <div className="text-white/70 text-xs">Words to Review</div>
              </div>
              <div className="text-center">
                <div className="text-white text-lg font-bold">3</div>
                <div className="text-white/70 text-xs">Difficult Words</div>
              </div>
              <div className="text-center">
                <div className="text-white text-lg font-bold">75%</div>
                <div className="text-white/70 text-xs">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Vocabulary List */}
          <div className="space-y-3">
            {reviewWords.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-lg p-4 transition-all hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-white font-medium drop-shadow-sm">
                      {item.word}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {item.pronunciation}
                    </p>
                    <p className="text-white/60 text-xs mt-1">{item.meaning}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="glass-button rounded-full w-8 h-8 flex items-center justify-center transition-all hover:scale-110">
                      <span className="text-white text-sm">🔊</span>
                    </button>
                    <button className="glass-button rounded-full w-8 h-8 flex items-center justify-center transition-all hover:scale-110">
                      <span className="text-white text-sm">⭐</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 space-y-3 pb-20">
            <button className="w-full glass-button rounded-lg py-3 transition-all hover:scale-105">
              <span className="text-white font-medium drop-shadow-sm">
                🎯 Start Review Session
              </span>
            </button>
            <button className="w-full glass-button rounded-lg py-3 transition-all hover:scale-105">
              <span className="text-white font-medium drop-shadow-sm">
                🔄 Practice Difficult Words
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
