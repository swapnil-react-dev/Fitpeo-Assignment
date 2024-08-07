import React from "react";
import HeaderRoutes from "./routes/HeaderRoutes";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <HeaderRoutes />
    </BrowserRouter>
  );
};

export default App;

