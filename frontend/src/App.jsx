import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import BackButton from "./components/BackButton.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import { useLanguage } from "./context/LanguageContext.jsx";

function Placeholder({ title }) {
  return (
    <div className="flex items-center justify-center py-32">
      <h1 className="text-3xl font-bold text-green-700 dark:text-green-400">
        {title}
      </h1>
    </div>
  );
}

function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-green-50 dark:bg-gray-900">
      <Navbar />
      <BackButton />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/engineers" element={<Placeholder title={t("nav.engineers")} />} />
        <Route path="/chatbot" element={<Placeholder title={t("nav.chatbot")} />} />
        <Route path="/showcase" element={<Placeholder title={t("nav.showcase")} />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/auth/engineer" element={<Placeholder title={t("landing.engineerBtn")} />} />
        <Route path="/auth/client" element={<Placeholder title={t("landing.clientBtn")} />} />
      </Routes>
    </div>
  );
}

export default App;