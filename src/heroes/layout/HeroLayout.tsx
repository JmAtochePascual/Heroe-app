import { Outlet } from "react-router"
import { Navbar } from "../../ui"

export const HeroLayout = () => {
  return (
    <>
      <Navbar />

      <main className="w-11/12 max-w-7xl mx-auto">
        <Outlet />
      </main>
    </>
  )
}
