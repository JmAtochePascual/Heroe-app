import { createContext } from "react";
import type { AuthState } from "./AuthReducer";

export type AuthContextType = {
  state: AuthState;
  onLogin: (name: string) => void;
  onLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);