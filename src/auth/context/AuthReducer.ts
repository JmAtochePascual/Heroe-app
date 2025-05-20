export type AuthAction =
  { type: 'login'; payload: string; } |
  { type: 'logout'; };


export type AuthState = {
  isLoggedIn: boolean;
  user: string;
};

export const initialState: AuthState = JSON.parse(localStorage.getItem('authState') || '{}');

export const AuthReducer = (state: AuthState = initialState, action: AuthAction) => {

  if (action.type === 'login') {
    return {
      ...state,
      isLoggedIn: true,
      user: action.payload
    };
  };

  if (action.type === 'logout') {
    return {
      ...state,
      isLoggedIn: false,
      user: ''
    };
  }

  return state;
};
