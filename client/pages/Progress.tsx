import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Settings, TrendingUp } from "lucide-react";

type TimePeriod = "week" | "month" | "year";

const chartData = {
  week: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    values: [12, 18, 15, 25, 22, 28, 30],
    wordsLearned: 156,
    accuracy: 89,
    trend: "+12 this week",
    accuracyTrend: "+5% improved",
  },
  month: {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    values: [85, 120, 145, 180],
    wordsLearned: 530,
    accuracy: 85,
    trend: "+180 this month",
    accuracyTrend: "+2% improved",
  },
  year: {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    values: [400, 650, 800, 1200],
    wordsLearned: 3050,
    accuracy: 88,
    trend: "+1200 this year",
    accuracyTrend: "+15% improved",
  },
};

const achievements = [
  { icon: "🏆", title: "First Week", desc: "Complete 7 days" },
  { icon: "🎯", title: "Quick Learner", desc: "Learn 50 words" },
  { icon: "⭐", title: "Perfect Day", desc: "100% accuracy" },
  { icon: "🔥", title: "Streak Master", desc: "7 day streak" },
];

export function Progress() {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState<TimePeriod>("week");

  const handleBack = () => {
    navigate("/home");
  };

  const handleSettingsGoal = () => {
    console.log("Opening goal settings");
  };

  const currentData = chartData[selectedPeriod];
  const maxValue = Math.max(...currentData.values);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Mobile app container - Fixed height for phone screen */}
      <div className="w-full max-w-sm mx-auto bg-orange-500 rounded-lg h-[600px] flex flex-col">
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-5 pt-8 flex-shrink-0">
          <button
            onClick={handleBack}
            className="simple-button rounded-lg px-3 py-2 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
            <span className="text-base text-white">Back</span>
          </button>
          <h2 className="text-white font-medium">Progress</h2>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-5">
          {/* Time Filter */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setSelectedPeriod("week")}
              className={`rounded-md px-4 py-2 transition-colors ${
                selectedPeriod === "week"
                  ? "bg-white/30 text-white font-medium"
                  : "simple-button text-white/70"
              }`}
            >
              <span className="text-sm">Week 📅</span>
            </button>
            <button
              onClick={() => setSelectedPeriod("month")}
              className={`rounded-md px-4 py-2 transition-colors ${
                selectedPeriod === "month"
                  ? "bg-white/30 text-white font-medium"
                  : "simple-button text-white/70"
              }`}
            >
              <span className="text-sm">Month</span>
            </button>
            <button
              onClick={() => setSelectedPeriod("year")}
              className={`rounded-md px-4 py-2 transition-colors ${
                selectedPeriod === "year"
                  ? "bg-white/30 text-white font-medium"
                  : "simple-button text-white/70"
              }`}
            >
              <span className="text-sm">Year</span>
            </button>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="simple-card rounded-lg p-4 text-center">
              <div className="text-gray-800 text-2xl font-bold mb-1">
                {currentData.wordsLearned}
              </div>
              <div className="text-gray-600 text-xs">Words Learned</div>
              <div className="text-green-600 text-xs mt-1">
                {currentData.trend}
              </div>
            </div>
            <div className="simple-card rounded-lg p-4 text-center">
              <div className="text-gray-800 text-2xl font-bold mb-1">
                {currentData.accuracy}%
              </div>
              <div className="text-gray-600 text-xs">Accuracy Rate</div>
              <div className="text-blue-600 text-xs mt-1">
                {currentData.accuracyTrend}
              </div>
            </div>
          </div>

          {/* Interactive Chart */}
          <div className="simple-card rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-gray-600" />
              <span className="text-gray-800 font-medium">
                Learning Progress -{" "}
                {selectedPeriod.charAt(0).toUpperCase() +
                  selectedPeriod.slice(1)}
              </span>
            </div>

            {/* Chart Area */}
            <div className="h-32 flex items-end justify-between gap-1 mb-3 bg-gray-50 rounded-lg p-3">
              {currentData.values.map((value, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className="bg-orange-400 rounded-t transition-all duration-500 w-full max-w-[20px] mx-auto hover:bg-orange-500"
                    style={{
                      height: `${(value / maxValue) * 80}px`,
                    }}
                    title={`${currentData.labels[index]}: ${value} words`}
                  />
                  <div className="text-xs text-gray-600 mt-2 text-center">
                    {currentData.labels[index]}
                  </div>
                </div>
              ))}
            </div>

            {/* Chart Legend */}
            <div className="flex justify-between text-xs text-gray-500">
              <span>
                Avg:{" "}
                {Math.round(
                  currentData.values.reduce((a, b) => a + b, 0) /
                    currentData.values.length,
                )}
              </span>
              <span>Peak: {Math.max(...currentData.values)}</span>
            </div>
          </div>

          {/* Period-specific insights */}
          <div className="simple-card rounded-lg p-4 mb-4">
            <h3 className="text-gray-800 font-medium mb-2">
              📊{" "}
              {selectedPeriod === "week"
                ? "This Week"
                : selectedPeriod === "month"
                  ? "This Month"
                  : "This Year"}{" "}
              Insights
            </h3>
            {selectedPeriod === "week" && (
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Best day: Sunday (30 words)</p>
                <p>• 7-day streak maintained</p>
                <p>• 89% accuracy rate</p>
              </div>
            )}
            {selectedPeriod === "month" && (
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Strongest week: Week 4 (180 words)</p>
                <p>• 28 active learning days</p>
                <p>• Consistent improvement trend</p>
              </div>
            )}
            {selectedPeriod === "year" && (
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Peak quarter: Q4 (1200 words)</p>
                <p>• 15% accuracy improvement</p>
                <p>• 3050 total words mastered</p>
              </div>
            )}
          </div>

          {/* Achievements */}
          <div className="mb-4">
            <h3 className="text-white font-medium mb-3">🏆 Achievements</h3>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="simple-card rounded-lg p-3">
                  <div className="text-center">
                    <div className="text-xl mb-1">{achievement.icon}</div>
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
        </div>

        {/* Fixed Bottom Button */}
        <div className="p-5 pt-0 flex-shrink-0">
          <button
            onClick={handleSettingsGoal}
            className="w-full bg-white/20 hover:bg-white/30 text-white rounded-lg px-6 py-3 flex items-center justify-center gap-3 transition-colors"
          >
            <Settings className="w-4 h-4" />
            <span className="font-medium">Set Learning Goals</span>
          </button>
        </div>
      </div>
    </div>
  );
}
