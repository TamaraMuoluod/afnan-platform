import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function InstallButton() {
  const { t } = useLanguage();
  const [installEvent, setInstallEvent] = useState(null);

  useEffect(() => {
    const onPrompt = (e) => {
      e.preventDefault();
      setInstallEvent(e);
    };
    const onInstalled = () => setInstallEvent(null);

    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (!installEvent) return null;

  const install = async () => {
    installEvent.prompt();
    await installEvent.userChoice;
    setInstallEvent(null);
  };

  return (
    <button
      onClick={install}
      className="px-6 py-2 rounded-xl bg-purple-600 text-white text-sm font-semibold hover:bg-purple-700"
    >
      {t("landing.installBtn")}
    </button>
  );
}