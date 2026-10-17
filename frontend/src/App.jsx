import { useTheme } from "./context/ThemeContext.jsx";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-green-50 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-green-700 dark:text-green-400">
        منصة أفنان 🌱
      </h1>
      <button
        onClick={toggleTheme}
        className="px-6 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
      >
        {theme === "light" ? "🌙 الوضع الغامق" : "☀️ الوضع الفاتح"}
      </button>
    </div>
  );
}

export default App;