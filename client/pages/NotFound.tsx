import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm mx-auto flex flex-col items-center text-center">
        <div className="mb-8">
          <div className="text-6xl mb-4">😵</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Page Not Found
          </h1>
          <p className="text-gray-600 text-sm">
            The page you're looking for doesn't exist.
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-3 transition-colors"
        >
          🏠 Go Home
        </button>
      </div>
    </div>
  );
}
