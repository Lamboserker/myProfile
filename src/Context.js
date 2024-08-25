import React, { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
  name: "",
  email: "",
  message: "",
};

// Reducer function
function formReducer(state, action) {
  switch (action.type) {
    case "SET_FORM_DATA":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET_FORM":
      return initialState;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

// Create context
const FormContext = createContext();

// Custom hook to use the form context
export function useFormContext() {
  return useContext(FormContext);
}

// Provider component
export function FormProvider({ children }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}
