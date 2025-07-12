import { useNavigate } from "react-router-dom";

export function Splash() {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm mx-auto flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-black text-center">
            Learning Assistant
          </h1>
        </div>

        {/* Start Button */}
        <button
          onClick={handleStartLearning}
          className="w-full max-w-[200px] h-12 bg-blue-600 rounded-lg flex items-center justify-center transition-all hover:bg-blue-700 active:scale-95"
        >
          <span className="text-white font-medium text-base">
            Start Learning 📱
          </span>
        </button>

        {/* Debug info */}
        <div className="mt-4 text-sm text-gray-600">
          Debug: Splash component loaded
        </div>
      </div>
    </div>
  );
}
