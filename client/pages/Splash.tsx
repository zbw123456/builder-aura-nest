import { useNavigate } from "react-router-dom";

export function Splash() {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate("/home");
  };

  return (
    <div className="learning-bg flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white text-center drop-shadow-lg">
            Learning Assistant
          </h1>
          <p className="text-white/80 text-center mt-2 text-sm">
            Your journey to mastering Chinese starts here
          </p>
        </div>

        {/* Start Button */}
        <button
          onClick={handleStartLearning}
          className="w-full max-w-[200px] h-12 glass-button rounded-lg flex items-center justify-center transition-all active:scale-95"
        >
          <span className="text-white font-medium text-base drop-shadow-sm">
            Start Learning 📱
          </span>
        </button>

        {/* Decorative elements */}
        <div className="mt-8 text-white/60 text-center">
          <div className="flex justify-center space-x-4 text-2xl">📚 ✨ 🎯</div>
          <p className="text-xs mt-2 text-white/50">
            Learn • Practice • Master
          </p>
        </div>
      </div>
    </div>
  );
}
