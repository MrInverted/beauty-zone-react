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