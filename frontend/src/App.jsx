import { useTheme } from "./context/ThemeContext.jsx";
import { useLanguage } from "./context/LanguageContext.jsx";

function App() {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-green-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-green-700 dark:text-green-400">
        {t("appName")} 🌱
      </h1>
      <div className="flex gap-3">
        <button
          onClick={toggleTheme}
          className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
        >
          {theme === "light" ? t("darkMode") : t("lightMode")}
        </button>
        <button
          onClick={toggleLanguage}
          className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
        >
          {t("language")}
        </button>
      </div>
    </div>
  );
}

export default App;