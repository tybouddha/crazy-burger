import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./main/Main";
import { theme } from "../../../theme";
import { useState } from "react";
import { IsAdminContext } from "../../../context/IsAdminContext";

export default function OrderPage() {
  //state

  const [isAdmin, setIsAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAddTabSelected, setIsAddTabSelected] = useState(true);
  const [isEditTabSelected, setIsEditTabSelected] = useState(false);

  //comportements
  const isAdminContext = {
    isAdmin,
    setIsAdmin,
    isCollapsed,
    setIsCollapsed,
    setIsEditTabSelected,
    setIsAddTabSelected,
    isEditTabSelected,
    isAddTabSelected,
  };

  //render
  return (
    <IsAdminContext.Provider value={isAdminContext}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </IsAdminContext.Provider>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`;
