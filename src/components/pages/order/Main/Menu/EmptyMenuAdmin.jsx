import React, { useContext } from "react";
import { fakeMenu } from "../../../../../fakeData/fakeMenu";
import { OrderContext } from "../../../../../context/OrderContext";
import styled from "styled-components";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";

export default function EmptyMenuAdmin() {
  //state
  const { setMenu } = useContext(OrderContext);

  //comportement
  const resetMenu = () => {
    console.log("reset menu");
    setMenu(fakeMenu.SMALL);
  };
  //affichage
  return (
    <EmptyMenuAdminStyled>
      <span>LE MENU EST VIDE?</span>
      <br />
      <span>CLIQUEZ CI-DESSOUS POUR LE REINITIALISER </span>
      <PrimaryButton
        label={"Générer de nouveaux produits"}
        onClick={resetMenu}
      />
    </EmptyMenuAdminStyled>
  );
}

const EmptyMenuAdminStyled = styled("div")``;
