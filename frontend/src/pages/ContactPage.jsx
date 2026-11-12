import { useLanguage } from "../context/LanguageContext.jsx";
import { contact } from "../data/links.js";

function Item({ icon, label, value, href }) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-2xl border border-green-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur p-4 hover:border-green-600 transition"
    >
      <span className="text-3xl">{icon}</span>
      <div className="flex flex-col">
        <span className="text-sm text-gray-600 dark:text-gray-400">{label}</span>
        <span dir="ltr" className="text-lg font-semibold text-green-700 dark:text-green-400 text-start">
          {value}
        </span>
      </div>
    </a>
  );
}

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <section className="max-w-xl mx-auto px-4 py-10 flex flex-col gap-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 dark:text-green-400">
        {t("nav.contact")}
      </h1>

      <div className="flex flex-col gap-4">
        {contact.email && (
          <Item
            icon="✉️"
            label={t("form.email")}
            value={contact.email}
            href={`mailto:${contact.email}`}
          />
        )}
        {contact.phone && (
          <Item
            icon="📞"
            label={t("form.phone")}
            value={contact.phone}
            href={`tel:${contact.phone}`}
          />
        )}
      </div>
    </section>
  );
}