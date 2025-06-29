import styled from "styled-components";
import { theme } from "../../../../theme";
import { useState } from "react";
import Menu from "./Menu";

export default function Main() {
  //state
  const product = {
    id: 1,
    title: "Burger",
    price: 5.6,
    picture: "/images/logoOrange.png",
  };
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Burger",
      price: 5.6,
      picture: "/images/logoOrange.png",
    },
  ]);
  //comportements
  //affichage
  return (
    <MainStyled>
      <div className="basket"></div>
      <Menu />
    </MainStyled>
  );
}

const MainStyled = styled("div")`
  height: 85vh;
  width: 95vw;
  //pour que le composant prenne la place qui reste
  flex: 1;
  background: ${theme.colors.background_white};
  border-radius: 0px 0px 15px 15px;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
`;
