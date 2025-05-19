import { heroes } from "../data";
import type { HeroType } from "../types";

export const getHeroesByPublisher = (publisher: string): HeroType[] => {
  if (!["DC Comics", "Marvel Comics"].includes(publisher)) return [];

  return heroes.filter((hero: HeroType) => hero.publisher === publisher);
};