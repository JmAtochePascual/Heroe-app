import { Link } from "react-router";
import type { HeroType } from "../types";

type HeroCardProps = {
  hero: HeroType;
};

export const HeroCard = ({ hero }: HeroCardProps) => {
  const { id, superhero, alter_ego, publisher, first_appearance } = hero;

  return (
    <div className="w-full h-full grid grid-cols-[100px_1fr] border border-gray-200 rounded-md overflow-hidden">
      <img
        src={`${id}.jpg`}
        alt={superhero}
        className="w-full h-full object-cover" />

      <div className="h-full p-2 flex flex-col justify-between">
        <div>
          <h5 className="text-lg font-bold">{superhero}</h5>
          <p>{alter_ego}</p>
          <p>{publisher}</p>
          <p>{first_appearance}</p>
        </div>

        <Link
          to={`/hero/${id}`}
          className="w-full py-1 mt-3  rounded-md text-blue-600">
          ver más
        </Link>
      </div>
    </div>
  )
}
