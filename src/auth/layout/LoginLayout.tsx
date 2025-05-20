import { Outlet } from "react-router"
import { useAuth } from "../hook/useAuth";
import { Navigate } from "react-router";

export const LoginLayout = () => {
  const { state } = useAuth();
  if (state.isLoggedIn) return <Navigate to="/" />;

  return (
    <div className="w-screen h-screen grid place-items-center">
      <Outlet />
    </div>
  )
}
