import { HeroList } from "../components"
import { TitlePage } from "../components"

export const DcPage = () => {
  return (
    <>
      <TitlePage title="DC Comics" />

      <HeroList publisher="DC Comics" />
    </>
  )
}
