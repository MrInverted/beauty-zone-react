export const masterCardPreview = {
  isPremium: false,
  rating: "4.8",
  service: "Парихмахерские услуги",
  image: "/images/masters/1.jpg",
  name: "Мария Василенко",
  price: "40-55",
  description: "Мастер с 10 летним опытом. Стрижки для длинных волос, тонирование, подбор профессионального ухода.",
  workingDays: "Пн-Пт",
  workingHours: "8.00-16.00",
  state: "Калифорния",
  city: "Лос-Анджелес"
};

export const masterCardPreviewStandart = Array(11).fill({ ...masterCardPreview });
export const masterCardPreviewPremiun = Array(4).fill({ ...masterCardPreview, isPremium: true });
export const masterCardPreviewBoth = [...masterCardPreviewPremiun, ...masterCardPreviewStandart];

export type MasterCardPreviewType = typeof masterCardPreview;

export const defaultServices = [
  { service: "Ногтевой сервис", value: "", checked: false },
  { service: "Парихмахерские услуги", value: "", checked: false },
  { service: "Косметология", value: "", checked: false },
  { service: "Окрашивание волос", value: "", checked: false },
  { service: "Шугаринг / Восковая эпиляция", value: "", checked: false },
  { service: "Визаж", value: "", checked: false },
  { service: "Массаж", value: "", checked: false },
  { service: "Наращивание волос", value: "", checked: false },
  { service: "Наращивание ресниц", value: "", checked: false },
  { service: "Фотографии / Фотограф", value: "", checked: false },
  { service: "Мастер бровист", value: "", checked: false },
  { service: "Перманентный макияж", value: "", checked: false },
  { service: "Тату-мастер", value: "", checked: false },
  { service: "Фитнес / Тренера", value: "", checked: false },
  { service: "Йога-мастер", value: "", checked: false },
  { service: "Электроэпиляция", value: "", checked: false },
  { service: "Мануальная терапия", value: "", checked: false },
  { service: "Психология", value: "", checked: false },
  { service: "Похудение / Диетология", value: "", checked: false },
  { service: "Обучение для мастеров", value: "", checked: false },
  { service: "Преподаватели / репетиторы", value: "", checked: false }
];