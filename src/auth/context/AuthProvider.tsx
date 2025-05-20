import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer, initialState } from "./AuthReducer";

interface AuthProviderProps {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const onLogin = (name: string) => {
    localStorage.setItem('authState', JSON.stringify({ isLoggedIn: true, user: name }));
    dispatch({ type: 'login', payload: name });
  };

  const onLogout = () => {
    localStorage.removeItem('authState');
    dispatch({ type: 'logout' });
  };

  return (
    <AuthContext.Provider value={{
      state,
      onLogin,
      onLogout
    }}>
      {children}
    </AuthContext.Provider>
  );
};