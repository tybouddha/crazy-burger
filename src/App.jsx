import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import { GlobalStyle } from "./style/GlobalStyle";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  //state

  //comportements

  //affichage
  return (
    <>
      <GlobalStyle />
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/order/:username" element={<OrderPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </React.StrictMode>
    </>
  );
}

export default App;
