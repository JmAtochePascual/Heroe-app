import { getHeroesByPublisher } from "../helper";

type ListHeroesProps = {
  publisher: string;
};

export const HeroList = ({ publisher }: ListHeroesProps) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <>
      {
        heroes.map((hero) =>
          <div
            key={hero.id}>
            {hero.superhero}
          </div>
        )
      }
    </>
  );
};
