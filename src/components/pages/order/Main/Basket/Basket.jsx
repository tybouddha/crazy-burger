import styled from "styled-components";
import Total from "./Total";
import Footer from "./Footer";
import { formatPrice } from "../../../../../utils/maths";
import { useContext } from "react";
import { OrderContext } from "../../../../../context/OrderContext";
import EmptyBasket from "./EmptyBasket";
import BasketProducts from "./BasketProducts";

export default function Basket() {
  const { basket } = useContext(OrderContext);
  const isBasketEmpty = basket.length === 0;

  return (
    <BasketStyled>
      <Total amountToPay={formatPrice(0)} />

      {isBasketEmpty ? <EmptyBasket /> : <BasketProducts />}

      <Footer />
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;
`;
