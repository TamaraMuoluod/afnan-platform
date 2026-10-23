import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function BackButton() {
  const { t, lang } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") return null;

  const goBack = () => {
    if (location.key !== "default") navigate(-1);
    else navigate("/");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 pt-4">
      <button
        onClick={goBack}
        className="inline-flex items-center gap-2 text-sm text-green-700 dark:text-green-400 hover:underline"
      >
        <span>{lang === "ar" ? "→" : "←"}</span>
        {t("back")}
      </button>
    </div>
  );
}