import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage } = useLanguage();

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/engineers", label: t("nav.engineers") },
    { to: "/chatbot", label: t("nav.chatbot") },
    { to: "/showcase", label: t("nav.showcase") },
  ];

  const btn =
    "px-3 py-1.5 rounded-lg text-sm bg-green-600 text-white hover:bg-green-700";

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-gray-900/70 border-b border-green-200 dark:border-gray-700">
      <nav className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3">
        <NavLink
          to="/"
          className="text-xl font-bold text-green-700 dark:text-green-400"
        >
          {t("appName")} 🌱
        </NavLink>

        <div className="flex items-center gap-2">
          <button onClick={toggleLanguage} className={btn}>
            {t("language")}
          </button>
          <button onClick={toggleTheme} className={btn}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <NavLink to="/auth" className={btn}>
            {t("nav.login")}
          </NavLink>
        </div>

        <div className="order-3 w-full md:order-none md:w-auto flex gap-5 overflow-x-auto">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `whitespace-nowrap ${
                  isActive
                    ? "font-semibold text-green-700 dark:text-green-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-green-600"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}