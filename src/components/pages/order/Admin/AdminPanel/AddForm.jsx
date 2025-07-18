import styled from "styled-components";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";
import TextInput from "../../../../reusable-ui/TextInput";
import { useState } from "react";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { theme } from "../../../../../theme";

export default function AddForm() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, imageUrl, price });
  };

  return (
    <AddFormStyled onSubmit={handleSubmit}>
      <div className="img">
        {imageUrl ? <img src={imageUrl} alt="aperçu" /> : "Aucune image"}
      </div>

      <div className="text-and-button">
        <div className="text">
          <TextInput
            Icon={<FaHamburger />}
            placeholder="Nom du produit (ex: Super Burger)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextInput
            Icon={<BsFillCameraFill />}
            placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />

          <TextInput
            Icon={<MdOutlineEuro />}
            placeholder="Prix"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <PrimaryButton
          type="submit"
          className="button"
          label={"Ajouter un nouveau produit"}
        />
      </div>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.form`
  width: 880px;
  height: 160px;
  display: grid;
  grid-template-columns: 215px 1fr;
  grid-template-rows: 1fr;
  gap: 20px;
  margin-top: 31px;
  margin-left: 71px;

  .img {
    width: 215px;
    height: 120px;
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.fonts.size.XS};
    color: ${theme.colors.greyMedium};
    background-color: ${theme.colors.white};
    text-align: center;
    padding: 8px;
    transition: all 0.2s ease;

    &:hover {
      border-color: ${theme.colors.primary};
      box-shadow: 0 2px 8px rgba(255, 160, 27, 0.1);
    }
  }

  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${theme.borderRadius.round};
  }

  .text-and-button {
    display: grid;
    grid-template-rows: 121px 1fr;
    gap: 12px;
    align-items: start;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    height: 121px;
  }

  .button {
    width: fit-content;
    justify-self: start;
    background: ${theme.colors.green};
    color: ${theme.colors.white};
    font-weight: ${theme.fonts.weights.bold};
    font-size: ${theme.fonts.size.XS};
    padding: 10px 16px;
    border-radius: ${theme.borderRadius.round};
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid ${theme.colors.green};
    box-shadow: ${theme.shadows.subtle};

    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.green};
      border-color: ${theme.colors.green};
      transform: translateY(-1px);
      box-shadow: ${theme.shadows.green};
    }

    &:active {
      transform: translateY(0);
      box-shadow: ${theme.shadows.subtle};
    }
  }
`;
