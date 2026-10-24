import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function FancySelect({ label, options, value, onChange, disabled = false }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [soonId, setSoonId] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const selected = options.find((o) => o.id === value);

  const pick = (o) => {
    if (!o.active) {
      setSoonId(o.id);
      setTimeout(() => setSoonId(null), 1500);
      return;
    }
    onChange(o.id);
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-1" ref={ref}>
      <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpen((o) => !o)}
          className="w-full flex items-center justify-between rounded-xl border border-green-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-start text-gray-800 dark:text-gray-100 disabled:opacity-50"
        >
          <span>{selected ? selected.label : "—"}</span>
          <span className="text-xs">▾</span>
        </button>

        {open && (
          <ul className="absolute z-20 mt-1 w-full max-h-60 overflow-y-auto rounded-xl border border-green-200 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-lg">
            {options.map((o) => (
              <li
                key={o.id}
                onClick={() => pick(o)}
                className={`px-4 py-2 cursor-pointer flex items-center justify-between ${
                  o.active
                    ? "text-gray-800 dark:text-gray-100 hover:bg-green-50 dark:hover:bg-gray-700"
                    : "text-gray-400 dark:text-gray-500 opacity-60"
                }`}
              >
                <span>{o.label}</span>
                {soonId === o.id && (
                  <span className="text-xs rounded-md bg-purple-600 px-2 py-0.5 text-white">
                    {t("soon")}
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}