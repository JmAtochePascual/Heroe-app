import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer, initialState } from "./AuthReducer";

interface AuthProviderProps {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const onLogin = (name: string) => {
    dispatch({ type: 'login', payload: name });
    localStorage.setItem('authState', JSON.stringify({ isLoggedIn: true, user: name }));
  };

  const onLogout = () => {
    localStorage.removeItem('authState');
    dispatch({ type: 'logout' });
  };

  return (
    <AuthContext.Provider value={{
      state,
      onLogin,
      onLogout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};