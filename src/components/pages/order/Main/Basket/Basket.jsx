import styled from "styled-components";
import Total from "./Total";
import Footer from "./Footer";
import { formatPrice } from "../../../../../utils/maths";
import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";

export default function Basket() {
  const { basket } = useContext(OrderContext);

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />

      <EmptyBasket basket={basket} />

      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
`;
