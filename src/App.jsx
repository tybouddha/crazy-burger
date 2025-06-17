import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  //state
  const [username, setUsername] = useState("");

  //comportements

  //affichage
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setUsername={setUsername} />} />
        <Route path="/order" element={<OrderPage username={username} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
