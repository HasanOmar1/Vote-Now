import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DataProvider from "./Contexts/DataContext/DataContext.jsx";
import CurrentUserProvider from "./Contexts/CurrentUserContext/CurrentUserContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </DataProvider>
);
