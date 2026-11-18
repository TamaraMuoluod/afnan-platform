import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import FancySelect from "../components/FancySelect.jsx";
import { specializations, governorates, anbarAreas } from "../data/options.js";
import { sampleEngineers } from "../data/sampleEngineers.js";

export default function DirectoryPage() {
  const { t, lang } = useLanguage();
  const [filters, setFilters] = useState({
    governorate: "all",
    area: "all",
    specialization: "all",
    sub: "all",
  });

  const setFilter = (key) => (v) => setFilters({ ...filters, [key]: v });
  const pickSpecialization = (id) =>
    setFilters({ ...filters, specialization: id, sub: "all" });

  const name = (item) => (lang === "ar" ? item.ar : item.en);
  const allOption = { id: "all", active: true, label: t("engineers.all") };

  const governorateOptions = [
    allOption,
    ...governorates.map((g) => ({ id: g.id, active: g.active, label: name(g) })),
  ];
  const areaOptions = [
    allOption,
    ...anbarAreas.map((a) => ({ id: a.id, active: true, label: name(a) })),
  ];
  const specOptions = [
    allOption,
    ...specializations.map((s) => ({
      id: s.id,
      active: s.active,
      label: t(`specializations.${s.id}`),
    })),
  ];

  const currentSpec = specializations.find((s) => s.id === filters.specialization);
  const subs = currentSpec?.subs ?? [];
  const subOptions = [
    allOption,
    ...subs.map((s) => ({
      id: s.id,
      active: s.active,
      label: t(`subSpecializations.${s.id}`),
    })),
  ];

  const results = sampleEngineers.filter(
    (e) =>
      (filters.governorate === "all" || e.governorate === filters.governorate) &&
      (filters.area === "all" || e.area === filters.area) &&
      (filters.specialization === "all" || e.specialization === filters.specialization) &&
      (filters.sub === "all" || e.sub === filters.sub)
  );

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 dark:text-green-400">
        {t("nav.engineers")}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl border border-green-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur p-4">
        <FancySelect
          label={t("form.governorate")}
          options={governorateOptions}
          value={filters.governorate}
          onChange={setFilter("governorate")}
        />
        <FancySelect
          label={t("form.area")}
          options={areaOptions}
          value={filters.area}
          onChange={setFilter("area")}
        />
        <FancySelect
          label={t("form.specialization")}
          options={specOptions}
          value={filters.specialization}
          onChange={pickSpecialization}
        />
        {subs.length > 0 && (
          <FancySelect
            label={t("form.subSpecialization")}
            options={subOptions}
            value={filters.sub}
            onChange={setFilter("sub")}
          />
        )}
      </div>

      {results.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400 py-10">
          {t("engineers.noResults")}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {results.map((e) => {
            const area = anbarAreas.find((a) => a.id === e.area);
            return (
              <div
                key={e.id}
                className="flex flex-col gap-3 rounded-2xl border border-green-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                    {name(e).charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800 dark:text-gray-100">
                      {name(e)}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {t(`specializations.${e.specialization}`)} · {t(`subSpecializations.${e.sub}`)}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-gray-700 dark:text-gray-300 flex flex-col gap-1">
                  <span>
                    {t("form.area")}: {area ? name(area) : ""}
                  </span>
                  <span>
                    {t("form.experience")}: {e.experience}
                  </span>
                </div>

                <Link
                  to="/auth"
                  className="mt-1 px-4 py-2 rounded-xl bg-green-600 text-center text-white font-semibold hover:bg-green-700"
                >
                  {t("engineers.requestBtn")}
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}