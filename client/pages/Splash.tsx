import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

export function Splash() {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Mobile-first container with max width for larger screens */}
      <div className="w-full max-w-sm mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-32 sm:mb-40">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground text-center">
            学习助手
          </h1>
        </div>

        {/* Start Button */}
        <button
          onClick={handleStartLearning}
          className="w-full max-w-[200px] h-12 bg-app-blue rounded-lg flex items-center justify-center transition-all hover:bg-blue-600 active:scale-95"
        >
          <span className="text-white font-medium text-base">
            开始离线学习 📱
          </span>
        </button>

        {/* Down Arrow Indicator */}
        <div className="mt-16 sm:mt-20">
          <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
