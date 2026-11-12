import { useLanguage } from "../context/LanguageContext.jsx";
import { accounts, videos } from "../data/links.js";

const platforms = [
  { id: "youtube", name: "YouTube", icon: "▶️" },
  { id: "instagram", name: "Instagram", icon: "📸" },
  { id: "tiktok", name: "TikTok", icon: "🎵" },
  { id: "linkedin", name: "LinkedIn", icon: "💼" },
];

function getVideoId(url) {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
    if (u.pathname.startsWith("/shorts/")) return u.pathname.split("/")[2];
    return u.searchParams.get("v");
  } catch {
    return null;
  }
}

export default function FollowPage() {
  const { t, lang } = useLanguage();

  return (
    <section className="max-w-4xl mx-auto px-4 py-10 flex flex-col gap-10">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 dark:text-green-400">
        {t("nav.follow")}
      </h1>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {t("follow.videos")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {videos.map((v) => {
            const id = getVideoId(v.url);
            return (
              <a
                key={v.url}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl overflow-hidden border border-green-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 hover:border-green-600 transition"
              >
                {id && (
                  <img
                    src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                    alt=""
                    className="w-full aspect-video object-cover"
                  />
                )}
                <p className="p-3 font-semibold text-gray-800 dark:text-gray-100">
                  {lang === "ar" ? v.ar : v.en}
                </p>
              </a>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          {t("follow.accounts")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {platforms
            .filter((p) => accounts[p.id])
            .map((p) => (
              <a
                key={p.id}
                href={accounts[p.id]}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-green-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 p-4 hover:border-green-600 transition"
              >
                <span className="text-3xl">{p.icon}</span>
                <span dir="ltr" className="text-lg font-semibold text-green-700 dark:text-green-400">
                  {p.name}
                </span>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
}