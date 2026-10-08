import { Unit } from "@/lib/unitToBn";

export interface IProduct {
  id: string;
  slug: string;
  nameBn: string;
  categoryNameBn: string;
  categoryIcon: string;
  unit: Unit;
  image: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}
