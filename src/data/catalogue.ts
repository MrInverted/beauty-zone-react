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

export const allServices = [
  { russian: "Парихмахерские услуги", english: "", imageUrl: "/images/services/1.jpg", value: "", checked: false },
  { russian: "Ногтевой сервис", english: "", imageUrl: "./images/services/2.jpg", value: "", checked: false },
  { russian: "Косметология", english: "", imageUrl: "./images/services/3.jpg", value: "", checked: false },
  { russian: "Окрашивание волос", english: "", imageUrl: "./images/services/4.jpg", value: "", checked: false },
  { russian: "Шугаринг / Восковая эпиляция", english: "", imageUrl: "./images/services/5.jpg", value: "", checked: false },
  { russian: "Визаж", english: "", imageUrl: "./images/services/6.jpg", value: "", checked: false },
  { russian: "Массаж", english: "", imageUrl: "./images/services/7.jpg", value: "", checked: false },
  { russian: "Наращивание волос", english: "", imageUrl: "./images/services/8.jpg", value: "", checked: false },
  { russian: "Наращивание ресниц", english: "", imageUrl: "./images/services/9.jpg", value: "", checked: false },
  { russian: "Фотографии / Фотограф", english: "", imageUrl: "./images/services/10.jpg", value: "", checked: false },
  { russian: "Мастер бровист", english: "", imageUrl: "./images/services/11.jpg", value: "", checked: false },
  { russian: "Перманентный макияж", english: "", imageUrl: "./images/services/12.jpg", value: "", checked: false },
  { russian: "Тату-мастер", english: "", imageUrl: "./images/services/13.jpg", value: "", checked: false },
  { russian: "Фитнес / Тренера", english: "", imageUrl: "./images/services/14.jpg", value: "", checked: false },
  { russian: "Йога-мастер", english: "", imageUrl: "./images/services/15.jpg", value: "", checked: false },
  { russian: "Электроэпиляция", english: "", imageUrl: "./images/services/16.jpg", value: "", checked: false },
  { russian: "Мануальная терапия", english: "", imageUrl: "./images/services/17.jpg", value: "", checked: false },
  { russian: "Психология", english: "", imageUrl: "./images/services/18.jpg", value: "", checked: false },
  { russian: "Похудение / Диетология", english: "", imageUrl: "./images/services/19.jpg", value: "", checked: false },
  { russian: "Обучение для мастеров", english: "", imageUrl: "./images/services/20.jpg", value: "", checked: false },
  { russian: "Преподаватели / репетиторы", english: "", imageUrl: "./images/services/21.jpg", value: "", checked: false },
] as const;

export type AllServiceType = typeof allServices[number]["russian"]