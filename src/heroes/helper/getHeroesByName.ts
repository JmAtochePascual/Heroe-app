import { heroes } from "../data";
import type { HeroType } from "../types";

export const getHeroesByName = (name: string): HeroType[] => {
  if (name.trim().length === 0) return [];

  return heroes.filter((hero: HeroType) => hero.superhero.toLowerCase().includes(name.toLowerCase().trim()));
};


