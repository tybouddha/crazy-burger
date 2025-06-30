import styled from "styled-components";
import { theme } from "../../../../theme";
import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import Card from "../../../reusable-ui/Card";

export default function Menu() {
  //state

  const [products, setProducts] = useState(fakeMenu2);
  //comportement

  //affichage
  return (
    <MenuStyled>
      {products.map((product) => {
        return <Card {...product} />;
      })}
    </MenuStyled>
  );
}

const MenuStyled = styled("div")`
  background: ${theme.colors.background_white};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
  padding: 50px 50px 150px;
  justify-items: center;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
