import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  //state

  //comportements

  //affichage
  return (
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </React.StrictMode>
  );
}

export default App;
