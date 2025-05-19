import { useNavigate } from "react-router";

export const LoginPage = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', { replace: true });
  };

  return (
    <div className="p-20 flex flex-col gap-2">
      <h1 className="text-2xl font-bold capitalize">LoginPage</h1>
      <hr />

      <button
        onClick={onLogin}
        className="px-4 py-1 rounded-md cursor-pointer text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
        Login
      </button>
    </div>
  )
}
