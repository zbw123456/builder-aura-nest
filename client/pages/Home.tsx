import { useNavigate } from "react-router-dom";
import { Menu, User } from "lucide-react";

export function Home() {
  const navigate = useNavigate();

  const handleMenuClick = () => {
    // Placeholder for menu functionality
    console.log("Menu clicked");
  };

  const handleProfileClick = () => {
    // Placeholder for profile functionality
    console.log("Profile clicked");
  };

  return (
    <div className="home-bg">
      {/* Mobile-first container */}
      <div className="w-full max-w-sm mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-5 pt-8">
          <button
            onClick={handleMenuClick}
            className="glass-button rounded-lg p-2 transition-all hover:scale-105"
          >
            <Menu className="w-5 h-5 text-white" />
          </button>
          <h2 className="text-white font-medium drop-shadow-sm">Home</h2>
          <button
            onClick={handleProfileClick}
            className="glass-button rounded-full p-2 transition-all hover:scale-105"
          >
            <User className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Main Content */}
        <div className="px-5 space-y-6">
          {/* Daily Vocabulary Section */}
          <div className="glass-card rounded-lg p-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-white drop-shadow-sm">
                📚 Daily Vocabulary
              </span>
              <button
                onClick={() => navigate("/learn")}
                className="glass-button rounded-md px-3 py-1 transition-all hover:scale-105"
              >
                <span className="text-sm font-medium text-white drop-shadow-sm">
                  Learn →
                </span>
              </button>
            </div>
            <p className="text-white/80 text-sm mt-2">
              Master 10 new words today
            </p>
          </div>

          {/* Review Reminder Section */}
          <div className="glass-card rounded-lg p-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-white drop-shadow-sm">
                🔄 Review Reminder
              </span>
              <button
                onClick={() => navigate("/review")}
                className="glass-button rounded-md px-3 py-1 transition-all hover:scale-105"
              >
                <span className="text-sm font-medium text-white drop-shadow-sm">
                  Review →
                </span>
              </button>
            </div>
            <p className="text-white/80 text-sm mt-2">5 words need review</p>
          </div>

          {/* Quick Stats */}
          <div className="glass-card rounded-lg p-4">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-white text-xl font-bold">25</div>
                <div className="text-white/70 text-xs">Words Learned</div>
              </div>
              <div>
                <div className="text-white text-xl font-bold">7</div>
                <div className="text-white/70 text-xs">Day Streak</div>
              </div>
              <div>
                <div className="text-white text-xl font-bold">85%</div>
                <div className="text-white/70 text-xs">Accuracy</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 glass-card border-t backdrop-blur-lg">
          <div className="w-full max-w-sm mx-auto flex justify-around py-3">
            <button
              onClick={() => navigate("/learn")}
              className="glass-button rounded-lg px-4 py-2 transition-all hover:scale-105"
            >
              <span className="text-sm text-white">📖 Learn</span>
            </button>
            <button
              onClick={() => navigate("/review")}
              className="glass-button rounded-lg px-4 py-2 transition-all hover:scale-105"
            >
              <span className="text-sm text-white">🔄 Review</span>
            </button>
            <button
              onClick={() => navigate("/progress")}
              className="glass-button rounded-lg px-4 py-2 transition-all hover:scale-105"
            >
              <span className="text-sm text-white">📊 Progress</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
