import { Unit } from "@/lib/unitToBn";

export interface IProduct {
  id: string;
  slug: string;
  nameBn: string;
  unit: Unit;
  image: string;
  today: number;
  change: {
    dir: string;
    pct: number;
  };
}
