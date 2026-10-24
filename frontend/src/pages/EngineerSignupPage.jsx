import { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import FancySelect from "../components/FancySelect.jsx";
import BirthDateField from "../components/BirthDateField.jsx";
import PhotoField from "../components/PhotoField.jsx";
import { specializations, governorates, anbarAreas } from "../data/options.js";

function Field({ label, children }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm text-gray-700 dark:text-gray-300">{label}</span>
      {children}
    </label>
  );
}

function Group({ children }) {
  return (
    <div className="flex flex-col gap-4 border-t border-green-200 dark:border-gray-700 pt-4 first:border-t-0 first:pt-0">
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-green-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 text-gray-800 dark:text-gray-100 outline-none focus:border-green-600";

export default function EngineerSignupPage() {
  const { t, lang } = useLanguage();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    birthDate: "",
    phone: "",
    email: "",
    password: "",
    governorate: "anbar",
    area: "",
    specialization: "agri",
    experience: "",
    about: "",
    photo: null,
  });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });
  const setValue = (key) => (v) => setForm({ ...form, [key]: v });

  const name = (item) => (lang === "ar" ? item.ar : item.en);

  const governorateOptions = governorates.map((g) => ({
    id: g.id,
    active: g.active,
    label: name(g),
  }));
  const areaOptions = anbarAreas.map((a) => ({
    id: a.id,
    active: true,
    label: name(a),
  }));
  const specOptions = specializations.map((s) => ({
    id: s.id,
    active: s.active,
    label: t(`specializations.${s.id}`),
  }));

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="max-w-xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-green-700 dark:text-green-400 mb-6">
        {t("landing.engineerBtn")}
      </h1>

      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-5 rounded-2xl border border-green-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur p-5 md:p-6"
      >
        <Group>
          <Field label={t("form.fullName")}>
            <input className={inputClass} value={form.fullName} onChange={set("fullName")} />
          </Field>
          <BirthDateField onChange={setValue("birthDate")} />
          <Field label={t("form.phone")}>
            <input type="tel" className={inputClass} value={form.phone} onChange={set("phone")} />
          </Field>
        </Group>

        <Group>
          <Field label={t("form.email")}>
            <input type="email" className={inputClass} value={form.email} onChange={set("email")} />
          </Field>
          <Field label={t("form.password")}>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className={`${inputClass} pe-12`}
                value={form.password}
                onChange={set("password")}
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute end-3 top-1/2 -translate-y-1/2 text-lg"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </Field>
        </Group>

        <Group>
          <FancySelect
            label={t("form.governorate")}
            options={governorateOptions}
            value={form.governorate}
            onChange={setValue("governorate")}
          />
          <FancySelect
            label={t("form.area")}
            options={areaOptions}
            value={form.area}
            onChange={setValue("area")}
          />
        </Group>

        <Group>
          <FancySelect
            label={t("form.specialization")}
            options={specOptions}
            value={form.specialization}
            onChange={setValue("specialization")}
          />
          <Field label={t("form.experience")}>
            <input type="number" min="0" className={inputClass} value={form.experience} onChange={set("experience")} />
          </Field>
          <Field label={t("form.about")}>
            <textarea rows="4" className={inputClass} value={form.about} onChange={set("about")} />
          </Field>
          <PhotoField onChange={setValue("photo")} />
        </Group>

        <button
          type="submit"
          className="px-8 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700"
        >
          {t("form.submit")}
        </button>
      </form>
    </section>
  );
}