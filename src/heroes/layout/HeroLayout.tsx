import { Navigate, Outlet } from "react-router"
import { Navbar } from "../../ui"
import { useAuth } from "../../auth/hook/useAuth";
import { useLocation } from "react-router";

export const HeroLayout = () => {
  const { state } = useAuth();
  const { pathname, search } = useLocation();
  const lastPath = `${pathname}${search}`;
  localStorage.setItem('lastPath', lastPath);
  console.log(lastPath);

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
