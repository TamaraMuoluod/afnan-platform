import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import InstallButton from "../components/InstallButton.jsx";

export default function LandingPage() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-72 w-72 rounded-full bg-green-300/40 blur-3xl dark:bg-purple-500/20" />

      <div className="max-w-4xl mx-auto px-6 py-10 md:py-14 flex flex-col items-center text-center gap-6">
        <img src="/logo-mark.png" alt="Afnan" className="h-24 md:h-32 w-auto" />

        <h1 className="text-2xl md:text-4xl font-bold leading-snug text-gray-800 dark:text-white">
          {t("landing.title")}
        </h1>

        <p className="text-lg md:text-xl text-green-700 dark:text-green-400">
          {t("landing.subtitle")}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            to="/auth/engineer"
            className="px-8 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 text-center"
          >
            {t("landing.engineerBtn")}
          </Link>
          <Link
            to="/auth/client"
            className="px-8 py-3 rounded-xl border-2 border-green-600 text-green-700 dark:text-green-400 font-semibold hover:bg-green-600 hover:text-white text-center"
          >
            {t("landing.clientBtn")}
          </Link>
        </div>

        <InstallButton />
      </div>
    </section>
  );
}