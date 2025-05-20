import { Navigate, useNavigate, useParams } from "react-router";
import { getHeroesById } from "../helper";
import { useMemo } from "react";
import "animate.css";

export const HeroPage = () => {
  const { heroID } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroesById(heroID!), [heroID]);

  const onReturn = () => navigate(-1);

  if (!hero) return <Navigate to="/" />;

  const { id, superhero, alter_ego, publisher, first_appearance } = hero;

  return (
    <div className="w-full max-w-lg h-56 grid grid-cols-[100px_1fr] border border-gray-200 rounded-md overflow-hidden md:h-96 md:grid-cols-[150px_1fr] lg:grid-cols-[200px_1fr]">
      <img
        src={`${id}.jpg`}
        alt={superhero}
        className="w-full h-full object-cover animate__fadeInLeft animate__animated" />

      <div className="h-full p-2 flex flex-col justify-between">
        <div>
          <h5 className="w-[300px] text-2xl font-bold md:text-4xl">{superhero}</h5>
          <p>{alter_ego}</p>
          <p>{publisher}</p>
          <p>{first_appearance}</p>
        </div>

        <button
          onClick={onReturn}
          className="w-full py-1 mt-3 rounded-md cursor-pointer text-white bg-blue-600">
          Regresar
        </button>

      </div>
    </div>
  );
};
