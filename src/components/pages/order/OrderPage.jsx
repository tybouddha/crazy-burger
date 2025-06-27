import styled from "styled-components";
import Navbar from "./Navbar";
import Main from "./Main";
import { useParams } from "react-router-dom";
import { theme } from "../../../theme";

export default function OrderPage() {
  //state
  const { username } = useParams();

  //comportements

  //render
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar username={username} />
        <Main />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: orange;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  .container {
    background: #f5f5f7;
    border-radius: 0px 0px 15px 15px;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

    height: 95vh;
    width: 95vw;
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};
  }
`;
