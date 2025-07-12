import { useNavigate } from "react-router-dom";
import { Menu, User } from "lucide-react";

export function Home() {
  const navigate = useNavigate();

  const handleLearnClick = () => {
    navigate("/learn");
  };

  const handleReviewClick = () => {
    navigate("/review");
  };

  const handleProgressClick = () => {
    navigate("/progress");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile-first container */}
      <div className="w-full max-w-sm mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-5 pt-8">
          <button className="p-2">
            <Menu className="w-6 h-6 text-foreground" />
          </button>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Main Content */}
        <div className="px-5 space-y-8 mt-16">
          {/* Daily Vocabulary Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg font-medium text-foreground">
                📚 今日词汇
              </span>
            </div>
            <button
              onClick={handleLearnClick}
              className="bg-app-lightgray hover:bg-gray-300 transition-colors px-4 py-2 rounded-md"
            >
              <span className="text-sm font-medium text-foreground">
                学习 →
              </span>
            </button>
          </div>

          {/* Review Reminder Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg font-medium text-foreground">
                🔄 复习提醒
              </span>
            </div>
            <button
              onClick={handleReviewClick}
              className="bg-app-lightgray hover:bg-gray-300 transition-colors px-4 py-2 rounded-md"
            >
              <span className="text-sm font-medium text-foreground">
                复习 →
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-gray-100 px-5 py-4">
          <div className="flex items-center justify-center space-x-8">
            <button
              onClick={handleLearnClick}
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors"
            >
              <span className="text-sm text-foreground">📖 学习</span>
            </button>
            <button
              onClick={handleReviewClick}
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors"
            >
              <span className="text-sm text-foreground">🔄 复习</span>
            </button>
            <button
              onClick={handleProgressClick}
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors"
            >
              <span className="text-sm text-foreground">📊 进度</span>
            </button>
          </div>
        </div>

        {/* Bottom padding to account for fixed navigation */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}
