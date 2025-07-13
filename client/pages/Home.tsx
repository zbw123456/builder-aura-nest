import { useNavigate } from "react-router-dom";
import { Menu, User } from "lucide-react";

export function Home() {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Mobile app container - Fixed height for phone screen */}
      <div className="w-full max-w-sm mx-auto bg-green-500 rounded-lg h-[600px] flex flex-col">
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-5 pt-8 flex-shrink-0">
          <button
            onClick={handleMenuClick}
            className="simple-button rounded-lg p-2"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white font-medium">Home</h2>
          <button
            onClick={handleProfileClick}
            className="simple-button rounded-full p-2"
          >
            <User className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto px-5">
          <div className="space-y-6">
            {/* Daily Vocabulary Section */}
            <div className="simple-card rounded-lg p-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-800">
                  📚 Daily Vocabulary
                </span>
                <button
                  onClick={() => navigate("/learn")}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1 text-sm transition-colors"
                >
                  Learn →
                </button>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                Master 10 new words today
              </p>
            </div>

            {/* Review Reminder Section */}
            <div className="simple-card rounded-lg p-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-medium text-gray-800">
                  🔄 Review Reminder
                </span>
                <button
                  onClick={() => navigate("/review")}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-3 py-1 text-sm transition-colors"
                >
                  Review →
                </button>
              </div>
              <p className="text-gray-600 text-sm mt-2">5 words need review</p>
            </div>

            {/* Quick Stats */}
            <div className="simple-card rounded-lg p-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-gray-800 text-xl font-bold">25</div>
                  <div className="text-gray-600 text-xs">Words Learned</div>
                </div>
                <div>
                  <div className="text-gray-800 text-xl font-bold">7</div>
                  <div className="text-gray-600 text-xs">Day Streak</div>
                </div>
                <div>
                  <div className="text-gray-800 text-xl font-bold">85%</div>
                  <div className="text-gray-600 text-xs">Accuracy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Fixed */}
        <div className="bg-white/10 backdrop-blur rounded-b-lg border-t border-white/20 flex-shrink-0">
          <div className="flex justify-around py-3">
            <button
              onClick={() => navigate("/learn")}
              className="px-4 py-2 text-sm text-white hover:text-white/80 transition-colors"
            >
              📖 Learn
            </button>
            <button
              onClick={() => navigate("/review")}
              className="px-4 py-2 text-sm text-white hover:text-white/80 transition-colors"
            >
              🔄 Review
            </button>
            <button
              onClick={() => navigate("/progress")}
              className="px-4 py-2 text-sm text-white hover:text-white/80 transition-colors"
            >
              📊 Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
