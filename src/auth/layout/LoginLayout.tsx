import { Outlet } from "react-router"

export const LoginLayout = () => {
  return (
    <div className="w-screen h-screen grid place-items-center">
      <Outlet />
    </div>
  )
}
