import { IconType } from "react-icons";

export interface Price {
  id: string;
  unit_amount: number;
  nickname: string;
  icon?: IconType;
  offers: string[];
}