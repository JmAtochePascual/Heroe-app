import { useNavigate } from "react-router";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="w-full max-w-xs border border-gray-300 rounded-md bg-white p-4 shadow-2xl">
      <h1 className="mb-2 text-2xl font-black text-center uppercase">Login</h1>
      <hr className="mb-8" />

      <button
        onClick={onLogin}
        className="w-full px-4 py-1 rounded-md cursor-pointer text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
        Login
      </button>
    </div>
  );
};
