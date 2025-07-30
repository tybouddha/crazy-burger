import React from "react";
import styled from "styled-components";

export default function EmptyMenuClient() {
  return (
    <EmptyMenuClientStyled>
      <span>VICTIME DE NOTRE SUCCES ! :D</span>
      <span>DE NOUVELLES RECETTES SONT EN COURS DE PREPARATION.</span>
      <span>A TRES VITE !</span>
    </EmptyMenuClientStyled>
  );
}

const EmptyMenuClientStyled = styled("div")``;
