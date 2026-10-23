import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function AuthPage() {
  const { t } = useLanguage();

  const card =
    "flex flex-col items-center justify-center gap-4 w-full sm:w-56 h-44 rounded-2xl border-2 border-green-600 bg-white/70 dark:bg-gray-800/70 backdrop-blur text-xl font-semibold text-green-700 dark:text-green-400 hover:bg-green-600 hover:text-white dark:hover:text-white transition";

  return (
    <section className="max-w-3xl mx-auto px-6 py-12 flex flex-col items-center gap-10">
      <img src="/logo-mark.png" alt="Afnan" className="h-24 w-auto" />

      <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
        <Link to="/auth/engineer" className={card}>
          <span className="text-5xl">👷</span>
          {t("landing.engineerBtn")}
        </Link>
        <Link to="/auth/client" className={card}>
          <span className="text-5xl">👤</span>
          {t("landing.clientBtn")}
        </Link>
      </div>
    </section>
  );
}