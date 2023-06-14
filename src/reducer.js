import { TOGGLE_MOBILE_MENU, CLOSE_MOBILE_MENU } from "./actions";

export const reducer = (state, action) => {
  // func
  const showOrHideMobileMenu = (task) => {
    return {
      ...state,
      isMenuOpen: task,
    };
  };

  if (action.type === TOGGLE_MOBILE_MENU) {
    return showOrHideMobileMenu(!state.isMenuOpen);
  }

  if (action.type === CLOSE_MOBILE_MENU) {
    return showOrHideMobileMenu(false);
  }
  return state;
};
