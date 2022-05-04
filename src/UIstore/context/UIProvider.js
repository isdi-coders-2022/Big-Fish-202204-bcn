import { useReducer } from "react";
import UIReducer from "../reducer/UIReducer";
import UIContext from "./UIContext";

const UIProvider = ({ children }) => {
  const [loadingState, dispatch] = useReducer(UIReducer);

  return (
    <UIContext.Provider value={(loadingState, dispatch)}>
      {children}
    </UIContext.Provider>
  );
};

export default UIProvider;
