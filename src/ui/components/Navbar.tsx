import { NavLink, useNavigate } from "react-router"

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', { replace: true });
  };

  return (
    <nav className="mb-8 py-4 bg-gray-900">
      <div className="w-11/12 max-w-7xl mx-auto flex justify-between">
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

          <NavLink
            to="/login"
            className={({ isActive }) => `${isActive ? 'text-white font-semibold' : 'text-gray-300'}`} >
            Login
          </NavLink>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-blue-300">
            JeanCarlos
          </span>

          <button
            onClick={onLogout}
            className="px-4 py-1 rounded-md cursor-pointer text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
            Logout
          </button>
        </div>
      </div >
    </nav >
  );
};
