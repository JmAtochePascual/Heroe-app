import { NavLink, useNavigate } from "react-router"
import { useAuth } from "../../auth/hook/useAuth";

export const Navbar = () => {
  const navigate = useNavigate();
  const { state, onLogout } = useAuth();

  const handleLogout = () => {
    onLogout();
    navigate('/login', { replace: true });
  };

  return (
    <nav className="mb-8 py-4 bg-gray-900">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col gap-4 justify-between md:flex-row">
        <div className="flex gap-2 items-center">
          <NavLink
            to="marvel"
            className={({ isActive }) => `${isActive ? 'text-white font-semibold' : 'text-gray-300'}`} >
            Marvel
          </NavLink>

          <NavLink
            to="dc"
            className={({ isActive }) => `${isActive ? 'text-white font-semibold' : 'text-gray-300'}`} >
            DC
          </NavLink>

          <NavLink
            to="search"
            className={({ isActive }) => `${isActive ? 'text-white font-semibold' : 'text-gray-300'}`} >
            Search
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-sm text-white">
            {state.user}
          </p>

          <button
            onClick={handleLogout}
            className="w-full px-4 py-1 rounded-md cursor-pointer text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
            Logout
          </button>
        </div>
      </div >
    </nav >
  );
};
