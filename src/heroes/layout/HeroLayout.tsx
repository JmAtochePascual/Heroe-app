import { Navigate, Outlet } from "react-router"
import { Navbar } from "../../ui"
import { useAuth } from "../../auth/hook/useAuth";

export const HeroLayout = () => {
  const { state } = useAuth();
  if (!state.isLoggedIn) return <Navigate to="/login" />;

  return (
    <>
      <Navbar />

      <main className="w-11/12 max-w-7xl mx-auto">
        <Outlet />
      </main>
    </>
  )
}
