import { HeroList } from "../components"
import { TitlePage } from "../components"

export const MarvelPage = () => {
  return (
    <>
      <TitlePage title="Marvel Comics" />

      <HeroList publisher="Marvel Comics" />
    </>
  )
}
