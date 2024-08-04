export interface IArticleModel {
  _id: string;
  service: string;
  description: string;
  mainFileLink: string;
  priceMin: number;
  priceMax: number;
  phoneNumber: string;
  workingDays: string;
  workingHours: string;

  services: string[];
  portfolioLink: string[];

  rating: number;
  viewsCount: number;
  isPremium: boolean;

  ownerId: IUserModel;
}

export interface ICommentModel {
  _id: string;
  name: string;
  email: string;
  text: string;
  imageUrl: string;
  rating: number;
  createdAt: string;

  articleId: string | IArticleModel;
}

export interface IRequest {
  _id: string;
  name: string;
  phone: string;
  text: string;
  isChecked: boolean;
  createdAt: string;

  articleId: IArticleModel;
  ownerId: string | IUserModel;
}

export interface IUserModel {
  _id: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  state: string;
  city: string;
  street: string;
  building: string;
}