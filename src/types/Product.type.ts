import { Unit } from "@/lib/unitToBn";

export interface IProduct {
  id: string;
  slug: string;
  category: string;
  nameBn: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: Unit;
  image: string;
  today: number;
  yesterday: number;
  change: {
    dir: "up" | "down" | "flat";
    pct: number;
  };
  markets: {
    market: string;
    division: string;
    min: number;
    max: number;
  }[];
}
