import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  //state
  //comportements

  //affichage
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="./order" element={<OrderPage />} />
        <Route path="./error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
