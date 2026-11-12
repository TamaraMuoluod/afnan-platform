export const specializations = [
  {
    id: "agri",
    active: true,
    subs: [
      { id: "farms", active: true },
      { id: "fields", active: true },
      { id: "gardens", active: true },
      { id: "plantDiseases", active: true },
      { id: "irrigation", active: true },
      { id: "soil", active: true },
      { id: "afforestation", active: true },
    ],
  },
  { id: "solar", active: false, subs: [] },
  { id: "electric", active: false, subs: [] },
  { id: "decor", active: false, subs: [] },
];

export const governorates = [
  { id: "anbar", ar: "الأنبار", en: "Anbar", active: true },
  { id: "baghdad", ar: "بغداد", en: "Baghdad", active: false },
  { id: "nineveh", ar: "نينوى", en: "Nineveh", active: false },
  { id: "basra", ar: "البصرة", en: "Basra", active: false },
  { id: "dhiqar", ar: "ذي قار", en: "Dhi Qar", active: false },
  { id: "babylon", ar: "بابل", en: "Babylon", active: false },
  { id: "kirkuk", ar: "كركوك", en: "Kirkuk", active: false },
  { id: "erbil", ar: "أربيل", en: "Erbil", active: false },
  { id: "sulaymaniyah", ar: "السليمانية", en: "Sulaymaniyah", active: false },
  { id: "duhok", ar: "دهوك", en: "Duhok", active: false },
  { id: "diyala", ar: "ديالى", en: "Diyala", active: false },
  { id: "saladin", ar: "صلاح الدين", en: "Saladin", active: false },
  { id: "najaf", ar: "النجف", en: "Najaf", active: false },
  { id: "karbala", ar: "كربلاء", en: "Karbala", active: false },
  { id: "wasit", ar: "واسط", en: "Wasit", active: false },
  { id: "maysan", ar: "ميسان", en: "Maysan", active: false },
  { id: "qadisiyah", ar: "القادسية", en: "Al-Qadisiyah", active: false },
  { id: "muthanna", ar: "المثنى", en: "Muthanna", active: false },
];

export const anbarAreas = [
  { id: "ramadi", ar: "الرمادي", en: "Ramadi" },
  { id: "hit", ar: "هيت", en: "Hit" },
  { id: "fallujah", ar: "الفلوجة", en: "Fallujah" },
  { id: "ana", ar: "عانة", en: "Ana" },
  { id: "haditha", ar: "حديثة", en: "Haditha" },
  { id: "rutba", ar: "الرطبة", en: "Rutba" },
  { id: "qaim", ar: "القائم", en: "Qaim" },
  { id: "rawa", ar: "راوة", en: "Rawa" },
  { id: "khalidiyah", ar: "الخالدية", en: "Khalidiyah" },
  { id: "amiriyah", ar: "العامرية", en: "Amiriyah" },
  { id: "karma", ar: "الكرمة", en: "Karma" },
  { id: "zangora", ar: "زنكورة", en: "Zangora" },
];