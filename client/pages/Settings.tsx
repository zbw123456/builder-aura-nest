import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  Globe,
  Volume2,
  Bell,
  User,
  HelpCircle,
} from "lucide-react";

const languages = [
  { id: "german", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
  { id: "spanish", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { id: "french", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { id: "italian", name: "Italian", nativeName: "Italiano", flag: "🇮🇹" },
  { id: "portuguese", name: "Portuguese", nativeName: "Português", flag: "🇵🇹" },
  { id: "japanese", name: "Japanese", nativeName: "日本語", flag: "🇯🇵" },
  { id: "korean", name: "Korean", nativeName: "한국어", flag: "🇰🇷" },
  { id: "chinese", name: "Chinese", nativeName: "中文", flag: "🇨🇳" },
];

export function Settings() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default to German
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleBack = () => {
    navigate("/home");
  };

  const handleLanguageSelect = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Mobile app container - Fixed height for phone screen */}
      <div className="w-full max-w-sm mx-auto bg-gray-600 rounded-lg h-[600px] flex flex-col">
        {/* Header - Fixed */}
        <div className="flex items-center justify-between p-5 pt-8 flex-shrink-0">
          <button
            onClick={handleBack}
            className="simple-button rounded-lg px-3 py-2 flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-white" />
            <span className="text-base text-white">Back</span>
          </button>
          <h2 className="text-white font-medium">Settings</h2>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-5">
          {/* Language Selection */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-5 h-5 text-white" />
              <h3 className="text-white font-medium">Learning Language</h3>
            </div>
            <div className="space-y-2">
              {languages.map((language) => (
                <button
                  key={language.id}
                  onClick={() => handleLanguageSelect(language)}
                  className={`w-full simple-card rounded-lg p-4 flex items-center justify-between transition-all ${
                    selectedLanguage.id === language.id
                      ? "bg-white/20 border-white/30"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{language.flag}</span>
                    <div className="text-left">
                      <div className="text-gray-800 font-medium">
                        {language.name}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {language.nativeName}
                      </div>
                    </div>
                  </div>
                  {selectedLanguage.id === language.id && (
                    <Check className="w-5 h-5 text-green-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Audio Settings */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Volume2 className="w-5 h-5 text-white" />
              <h3 className="text-white font-medium">Audio</h3>
            </div>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="w-full simple-card rounded-lg p-4 flex items-center justify-between"
            >
              <div className="text-left">
                <div className="text-gray-800 font-medium">Sound Effects</div>
                <div className="text-gray-600 text-sm">
                  Play sounds for correct/incorrect answers
                </div>
              </div>
              <div
                className={`w-12 h-6 rounded-full transition-colors ${
                  soundEnabled ? "bg-green-500" : "bg-gray-300"
                } relative`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    soundEnabled ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Notification Settings */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Bell className="w-5 h-5 text-white" />
              <h3 className="text-white font-medium">Notifications</h3>
            </div>
            <button
              onClick={() => setNotificationsEnabled(!notificationsEnabled)}
              className="w-full simple-card rounded-lg p-4 flex items-center justify-between"
            >
              <div className="text-left">
                <div className="text-gray-800 font-medium">Daily Reminders</div>
                <div className="text-gray-600 text-sm">
                  Get reminded to practice daily
                </div>
              </div>
              <div
                className={`w-12 h-6 rounded-full transition-colors ${
                  notificationsEnabled ? "bg-green-500" : "bg-gray-300"
                } relative`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                    notificationsEnabled ? "translate-x-6" : "translate-x-0.5"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Other Settings */}
          <div className="space-y-2 mb-4">
            <button className="w-full simple-card rounded-lg p-4 flex items-center gap-3">
              <User className="w-5 h-5 text-gray-600" />
              <div className="text-left">
                <div className="text-gray-800 font-medium">Account</div>
                <div className="text-gray-600 text-sm">Manage your profile</div>
              </div>
            </button>

            <button className="w-full simple-card rounded-lg p-4 flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-gray-600" />
              <div className="text-left">
                <div className="text-gray-800 font-medium">Help & Support</div>
                <div className="text-gray-600 text-sm">
                  Get help and feedback
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Current Selection Display - Fixed */}
        <div className="p-5 pt-0 flex-shrink-0">
          <div className="simple-card rounded-lg p-3">
            <div className="text-center">
              <div className="text-gray-600 text-xs mb-1">
                Currently Learning
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">{selectedLanguage.flag}</span>
                <span className="text-gray-800 font-medium">
                  {selectedLanguage.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
