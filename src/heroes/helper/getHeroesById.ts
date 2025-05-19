import { heroes } from "../data";
import type { HeroType } from "../types";

export const getHeroesById = (id: string): HeroType | undefined => {
  return heroes.find((hero: HeroType) => hero.id === id);
};
