import { TEventTypes, TLevelTypes } from './types';

export default interface IPage {
  children: JSX.Element | JSX.Element[];
}

export interface IInfoObj {
  imgName: string;
  text: string;
}

export interface IActionObj {
  imgName: string;
  text: string;
  actionText: string;
  actionPath: string;
}

export interface IBannerObj {
  mainHeader: string,
  secondaryHeader: string,
  secondaryHeaderFont: object,
  bodyText: string,
  imgPath: string,
  orangeButtonName: string,
  whiteButtonName: string,
}

export interface IUserObj {
  date: string | Date;
  level: TLevelTypes;
  mail: string;
  name: string;
  notes: string;
  paid: string;
  phone: string;
  surname: string;
}

export interface IBasicWorkshopObj {
  unique_id?: number;
  path: string;
  name: string;
  db_table_name: string;
  email_template_id: number;
  day_of_week: string;
  workshop_dates: string[];
  duration: number;
  time: string;
  price_sale?: number;
  price_normal: number;
  price_date?: string;
  level: 1 | 2 | 3 | 4;
  additional_info: string[];
  is_active: boolean;
}

export interface IEventObj {
  unique_ID?: number;
  title: string | null;
  customClass: TEventTypes;
  date: string | null;
  time: string | null;
  description: string | null;
  place: string | null;
  price: string | null;
  link: string | null;
  linkTitle: string | null;
  aditionalLink: string | null;
}
