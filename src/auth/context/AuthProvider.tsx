import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { AuthReducer, initialState } from "./AuthReducer";

interface AuthProviderProps {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </AuthContext.Provider>
  );
};