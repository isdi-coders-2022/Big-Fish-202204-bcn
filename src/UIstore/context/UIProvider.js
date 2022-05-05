import { useReducer } from "react";
import UIReducer from "../reducer/UIReducer";
import UIContext from "./UIContext";

const UIProvider = ({ children }) => {
  const initialUI = {
    loading: false,
  };
  const [loadingState, dispatch] = useReducer(initialUI);

  return (
    <UIContext.Provider value={(loadingState, dispatch)}>
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
