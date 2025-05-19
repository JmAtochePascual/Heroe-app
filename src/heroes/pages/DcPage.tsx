import { HeroList } from "../components"

export const DcPage = () => {
  return (
    <>
      <h1 className="mb-2 text-2xl font-black">DC Comics</h1>
      <hr className="mb-4 border border-gray-200" />

      <HeroList publisher="DC Comics" />
    </>
  )
}
