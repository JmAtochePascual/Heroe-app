import { HeroList } from "../components/HeroList"

export const MarvelPage = () => {
  return (
    <>
      <h1 className="mb-2 text-2xl font-black">Marvel Comics</h1>
      <hr className="mb-4 border border-gray-200" />

      <HeroList publisher="Marvel Comics" />
    </>
  )
}
