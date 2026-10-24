import { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function PhotoField({ onChange }) {
  const { t } = useLanguage();
  const inputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handle = (e) => {
    const file = e.target.files[0] || null;
    setFileName(file ? file.name : "");
    onChange?.(file);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => inputRef.current.click()}
        className="px-5 py-2.5 rounded-xl border-2 border-dashed border-green-400 dark:border-gray-500 text-green-700 dark:text-green-400 hover:bg-green-50 dark:hover:bg-gray-700"
      >
        📷 {t("form.photo")}
      </button>
      {fileName && (
        <span dir="ltr" className="text-sm text-gray-600 dark:text-gray-300 truncate">
          {fileName}
        </span>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handle}
        className="hidden"
      />
    </div>
  );
}