import { useNavigate } from "react-router-dom";
import { ArrowLeft, Settings } from "lucide-react";

export function Progress() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  const handleSettingsGoal = () => {
    // Placeholder for settings functionality
    console.log("Opening goal settings");
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

        {/* Time Filter */}
        <div className="px-5 mt-8">
          <div className="bg-app-lightgray rounded-md p-3 mb-6 w-fit">
            <span className="text-sm text-foreground">本周 📅</span>
          </div>

          {/* Chart Placeholder */}
          <div className="bg-app-gray rounded-lg p-8 mb-8 min-h-[150px] flex items-center justify-center">
            <span className="text-sm text-foreground">📈 折线图占位</span>
          </div>

          {/* Achievement Badge */}
          <div className="mb-8">
            <div className="bg-app-yellow rounded-lg w-15 h-15 flex items-center justify-center mb-2">
              <span className="text-2xl">🏆</span>
            </div>
            <p className="text-xs text-foreground">连续3天</p>
          </div>

          {/* Settings Goal Button */}
          <button
            onClick={handleSettingsGoal}
            className="bg-app-darkgray hover:bg-gray-300 transition-colors rounded-lg px-6 py-3 flex items-center gap-2"
          >
            <Settings className="w-4 h-4 text-foreground" />
            <span className="text-sm text-foreground">设置目标</span>
          </button>
        </div>
      </div>
    </div>
  );
}
