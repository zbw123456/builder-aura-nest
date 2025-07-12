import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mic } from "lucide-react";

const reviewWords = [
  { word: "Hallo", pronunciation: "/halo/" },
  { word: "Guten Tag", pronunciation: "/guːtən taːk/" },
  { word: "Danke", pronunciation: "/daŋkə/" },
  { word: "Bitte", pronunciation: "/bɪtə/" },
  { word: "Entschuldigung", pronunciation: "/ɛntˈʃʊldɪɡʊŋ/" },
];

export function Review() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  const handlePlayAudio = (word: string) => {
    // Placeholder for audio functionality
    console.log(`Playing audio for: ${word}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile-first container */}
      <div className="w-full max-w-sm mx-auto">
        {/* Header */}
        <div className="flex items-center p-5 pt-8">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-foreground hover:text-gray-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-base">返回</span>
          </button>
        </div>

        {/* Filter Section */}
        <div className="px-5 mt-8">
          <div className="bg-app-lightgray rounded-md p-3 mb-6 w-fit">
            <span className="text-sm text-foreground">Error Vocabulary 🔽</span>
          </div>

          {/* Word List */}
          <div className="space-y-4">
            {reviewWords.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 flex items-center justify-between"
              >
                <div className="flex-1">
                  <span className="text-base text-foreground">
                    {item.word} {item.pronunciation}
                  </span>
                </div>
                <button
                  onClick={() => handlePlayAudio(item.word)}
                  className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors ml-4"
                >
                  <Mic className="w-3 h-3 text-foreground" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
