export type AuthAction =
  { type: 'login'; payload: string; } |
  { type: 'logout'; };


export type AuthState = {
  isLoggedIn: boolean;
  user: string | null;
};


export const initialState: AuthState = {
  isLoggedIn: false,
  user: null
};

export const AuthReducer = (state: AuthState = initialState, action: AuthAction) => {

  if (action.type === 'login') {
    return {
      ...state,
      isLoggedIn: true,
      user: action.payload
    };
  }

  if (action.type === 'logout') {
    return {
      ...state,
      isLoggedIn: false,
      user: null
    };
  }

  return state;
};
