import { createContext, useContext, useEffect, useState } from "react";

export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [data, setData] = useState("");

  function changeData(data) {
    setData(data);
  }

  return (
    <DataContext.Provider value={{ data, changeData }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
