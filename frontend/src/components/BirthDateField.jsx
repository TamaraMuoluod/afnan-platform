import { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

const START_YEAR = 2011;
const END_YEAR = 1940;

const selectClass =
  "w-full rounded-xl border border-green-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2.5 text-gray-800 dark:text-gray-100 outline-none focus:border-green-600";

export default function BirthDateField({ onChange }) {
  const { t } = useLanguage();
  const [parts, setParts] = useState({ day: "", month: "", year: "" });

  const years = Array.from(
    { length: START_YEAR - END_YEAR + 1 },
    (_, i) => START_YEAR - i
  );
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const update = (key) => (e) => {
    const next = { ...parts, [key]: e.target.value };
    setParts(next);
    const { day, month, year } = next;
    onChange(
      day && month && year
        ? `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`
        : ""
    );
  };

  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-gray-700 dark:text-gray-300">
        {t("form.birthDate")}
      </span>
      <div dir="ltr" className="grid grid-cols-3 gap-2">
        <select className={selectClass} value={parts.day} onChange={update("day")}>
          <option value="">DD</option>
          {days.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
        <select className={selectClass} value={parts.month} onChange={update("month")}>
          <option value="">MM</option>
          {months.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        <select className={selectClass} value={parts.year} onChange={update("year")}>
          <option value="">YYYY</option>
          {years.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>
      </div>
    </div>
  );
}