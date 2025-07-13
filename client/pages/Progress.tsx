import { useNavigate } from "react-router-dom";
import { ArrowLeft, Settings, TrendingUp } from "lucide-react";

export function Progress() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/home");
  };

  const handleSettingsGoal = () => {
    console.log("Opening goal settings");
  };

  const achievements = [
    { icon: "🏆", title: "First Week", desc: "Complete 7 days" },
    { icon: "🎯", title: "Quick Learner", desc: "Learn 50 words" },
    { icon: "⭐", title: "Perfect Day", desc: "100% accuracy" },
    { icon: "🔥", title: "Streak Master", desc: "7 day streak" },
  ];

  return (
    <div className="progress-bg">
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
          <h2 className="text-white font-medium">Progress</h2>
        </div>

        {/* Time Filter */}
        <div className="px-5 mt-8">
          <div className="flex gap-2 mb-6">
            <button className="bg-white/30 rounded-md px-4 py-2">
              <span className="text-sm text-white font-medium">
                This Week 📅
              </span>
            </button>
            <button className="simple-button rounded-md px-4 py-2">
              <span className="text-sm text-white/70">Month</span>
            </button>
            <button className="simple-button rounded-md px-4 py-2">
              <span className="text-sm text-white/70">Year</span>
            </button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="simple-card rounded-lg p-4 text-center">
              <div className="text-gray-800 text-2xl font-bold mb-1">156</div>
              <div className="text-gray-600 text-xs">Words Learned</div>
              <div className="text-green-600 text-xs mt-1">+12 this week</div>
            </div>
            <div className="simple-card rounded-lg p-4 text-center">
              <div className="text-gray-800 text-2xl font-bold mb-1">89%</div>
              <div className="text-gray-600 text-xs">Accuracy Rate</div>
              <div className="text-blue-600 text-xs mt-1">+5% improved</div>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="simple-card rounded-lg p-6 mb-6 min-h-[150px] flex flex-col items-center justify-center">
            <TrendingUp className="w-8 h-8 text-gray-600 mb-2" />
            <span className="text-sm text-gray-600 text-center">
              📈 Learning Progress Chart
            </span>
            <div className="w-full h-16 mt-4 flex items-end justify-between">
              {[3, 5, 4, 7, 6, 8, 9].map((height, index) => (
                <div
                  key={index}
                  className="bg-orange-300 rounded-t"
                  style={{
                    height: `${height * 6}px`,
                    width: "8px",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-6">
            <h3 className="text-white font-medium mb-3">🏆 Achievements</h3>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="simple-card rounded-lg p-3">
                  <div className="text-center">
                    <div className="text-2xl mb-1">{achievement.icon}</div>
                    <div className="text-gray-800 text-xs font-medium">
                      {achievement.title}
                    </div>
                    <div className="text-gray-600 text-xs">
                      {achievement.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Settings Goal Button */}
          <div className="pb-20">
            <button
              onClick={handleSettingsGoal}
              className="w-full bg-white/20 hover:bg-white/30 text-white rounded-lg px-6 py-4 flex items-center justify-center gap-3 transition-colors"
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Set Learning Goals</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
