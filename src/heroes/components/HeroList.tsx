import { getHeroesByPublisher } from "../helper";
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";
import "animate.css";

type ListHeroesProps = {
  publisher: string;
};

export const HeroList = ({ publisher }: ListHeroesProps) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="mb-8 grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] [grid-auto-rows:200px] gap-4 animate__fadeIn animate__animated">
      {
        heroes.map((hero) =>
          <HeroCard
            key={hero.id}
            hero={hero}
          />
        )
      }
    </div>
  );
};
