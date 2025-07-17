import styled from "styled-components";
import TextInput from "../../../reusable-ui/TextInput";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { theme } from "../../../../theme";

export default function AddForm() {
  //state
  const [inputValue, setInputValue] = useState("");
  //comportements
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  //affichage
  return (
    <AddFormStyled action="submit">
      <div className="img">
        <img placeholder="Aucune image" />
      </div>
      <div className="text-and-button">
        <div className="text">
          <TextInput
            Icon={<FaHamburger className="icon" />}
            value={inputValue}
            onChange={handleChange}
            placeholder={"Nom du produit (ex: Super Burger)"}
            className={"textInput"}
          />
          <TextInput
            Icon={<BsFillCameraFill className="icon" />}
            value={inputValue}
            onChange={handleChange}
            placeholder={
              "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
            }
            className={"textInput"}
          />
          <TextInput
            Icon={<MdOutlineEuro className="icon" />}
            value={inputValue}
            onChange={handleChange}
            placeholder={"Prix"}
            className={"textInput"}
          />
        </div>
        <PrimaryButton
          label={"Ajouter un nouveau produit au menu"}
          className={"button"}
        />
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled("form")`
  border: 2px solid green;
  width: 880px;
  height: 160px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 31px;
  margin-left: 71px;
  .img {
    background: blue;
    border-color: ${theme.colors.greyLight};
  }

  img {
    width: 215px;
    height: 120px;
    border: 1px solid grey;
  }
  .text-and-button {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .text {
    border: 1px solid red;
    width: 645px;
    height: 121px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
  }

  .textInput {
    width: 645px;
    height: 35px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.white};
  }

  .button {
    width: 275px;
    height: 34px;
  }
`;
