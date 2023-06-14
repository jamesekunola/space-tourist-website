import { useReducer, createContext, useContext } from "react";
import { reducer } from "./reducer";
import { TOGGLE_MOBILE_MENU, CLOSE_MOBILE_MENU } from "./actions";

export const AppContext = createContext();

const initialState = {
  isMenuOpen: false,
};

export const useGlobalState = () => {
  return useContext(AppContext);
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleMenu = () => {
    dispatch({ type: TOGGLE_MOBILE_MENU });
  };

  const closeMobileMenu = () => {
    dispatch({ type: CLOSE_MOBILE_MENU });
  };

  return (
    <AppContext.Provider value={{ ...state, toggleMenu, closeMobileMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export default Context;
