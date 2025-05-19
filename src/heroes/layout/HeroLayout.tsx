import { Outlet } from "react-router"
import { Navbar } from "../../ui"

export const HeroLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  )
}
