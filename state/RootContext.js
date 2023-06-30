import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [context, setContext] = useState({
    darkMode: true,
  });

  return (
    <AppContext.Provider value={[context, setContext]}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
