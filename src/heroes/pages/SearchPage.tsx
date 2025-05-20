import { useLocation, useNavigate } from "react-router";
import { HeroCard, TitlePage } from "../components"
import { useHero } from "../hooks/usehero";
import { getHeroesByName } from "../helper";

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const { q = '' } = Object.fromEntries(searchParams.entries());

  const { search, setSearch } = useHero(q);

  const heroes = getHeroesByName(q);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value);

  const onSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (search.trim().length === 0) return;

    navigate(`?q=${search}`);
  };

  return (
    <>
      <TitlePage title="Search" />

      <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
        <form
          autoComplete="off"
          onSubmit={onSearch}>
          <input
            type="text"
            placeholder="Search"
            name="search"
            value={search}
            onChange={onChange}
            className="w-full p-2 rounded-md border outline-none ring-blue-600 focus:ring-2 border-gray-300" />

          <button
            type="submit"
            className="w-full py-1 mt-3 rounded-md cursor-pointer text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300">
            Search
          </button>
        </form>

        {
          heroes.length === 0
            ?
            <div className="p-2 text-center text-gray-400">
              No hay resultados o coincidencias...
            </div>
            :
            <div className="grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] [grid-auto-rows:200px] gap-4">
              {
                heroes.map((hero) =>
                  <HeroCard
                    key={hero.id}
                    hero={hero}
                  />
                )
              }
            </div>
        }
      </div>
    </>
  );
};
