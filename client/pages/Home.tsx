import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, User, ChevronDown } from "lucide-react";

const categories = [
  { id: "daily", name: "Daily Life", icon: "🏠" },
  { id: "business", name: "Business", icon: "💼" },
  { id: "travel", name: "Travel", icon: "✈️" },
  { id: "food", name: "Food & Drink", icon: "🍕" },
  { id: "health", name: "Health", icon: "🏥" },
  { id: "education", name: "Education", icon: "📚" },
];

const levels = [
  { id: "A1", name: "A1", desc: "Beginner" },
  { id: "A2", name: "A2", desc: "Elementary" },
  { id: "B1", name: "B1", desc: "Intermediate" },
  { id: "B2", name: "B2", desc: "Upper-Int" },
  { id: "C1", name: "C1", desc: "Advanced" },
  { id: "C2", name: "C2", desc: "Proficient" },
];

export function Home() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [selectedLevel, setSelectedLevel] = useState(levels[0]);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showLevelDropdown, setShowLevelDropdown] = useState(false);

  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  const handleCategorySelect = (category: (typeof categories)[0]) => {
    setSelectedCategory(category);
    setShowCategoryDropdown(false);
  };

  const handleLevelSelect = (level: (typeof levels)[0]) => {
    setSelectedLevel(level);
    setShowLevelDropdown(false);
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
          <div className="space-y-4">
            {/* Category & Level Selection */}
            <div className="space-y-3">
              {/* Category Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="w-full simple-card rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{selectedCategory.icon}</span>
                    <div className="text-left">
                      <div className="text-gray-800 font-medium">Category</div>
                      <div className="text-gray-600 text-sm">
                        {selectedCategory.name}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-600 transition-transform ${showCategoryDropdown ? "rotate-180" : ""}`}
                  />
                </button>

                {showCategoryDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 simple-card rounded-lg border border-white/20 z-10 max-h-40 overflow-y-auto">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => handleCategorySelect(category)}
                        className="w-full p-3 flex items-center gap-3 hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-lg">{category.icon}</span>
                        <span className="text-gray-800 text-sm">
                          {category.name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Level Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLevelDropdown(!showLevelDropdown)}
                  className="w-full simple-card rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {selectedLevel.name}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="text-gray-800 font-medium">Level</div>
                      <div className="text-gray-600 text-sm">
                        {selectedLevel.desc}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-600 transition-transform ${showLevelDropdown ? "rotate-180" : ""}`}
                  />
                </button>

                {showLevelDropdown && (
                  <div className="absolute top-full left-0 right-0 mt-1 simple-card rounded-lg border border-white/20 z-10">
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {levels.map((level) => (
                        <button
                          key={level.id}
                          onClick={() => handleLevelSelect(level)}
                          className={`p-3 rounded-md transition-colors ${
                            selectedLevel.id === level.id
                              ? "bg-blue-500 text-white"
                              : "hover:bg-gray-100 text-gray-800"
                          }`}
                        >
                          <div className="font-bold text-sm">{level.name}</div>
                          <div className="text-xs opacity-80">{level.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

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
                {selectedCategory.name} • {selectedLevel.name} Level
              </p>
              <p className="text-gray-500 text-xs mt-1">
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
                  className="bg-orange-600 hover:bg-orange-700 text-white rounded-md px-3 py-1 text-sm transition-colors"
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
