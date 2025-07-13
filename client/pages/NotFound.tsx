import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="learning-bg flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm mx-auto flex flex-col items-center text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">😵</div>
          <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
            Page Not Found
          </h1>
          <p className="text-white/80 text-sm">
            The page you're looking for doesn't exist.
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="glass-button rounded-lg px-6 py-3 transition-all hover:scale-105"
        >
          <span className="text-white font-medium drop-shadow-sm">
            ��� Go Home
          </span>
        </button>
      </div>
    </div>
  );
}
