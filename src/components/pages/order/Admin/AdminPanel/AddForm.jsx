import styled from "styled-components";
import PrimaryButton from "../../../../reusable-ui/PrimaryButton";
import TextInput from "../../../../reusable-ui/TextInput";
import { useState, useContext } from "react";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { theme } from "../../../../../theme";
import { OrderContext } from "../../../../../context/OrderContext";
import { FiCheckCircle } from "react-icons/fi";

export default function AddForm() {
  //state
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const { addProduct } = useContext(OrderContext);

  //pour price
  const parsePrice = (value) => {
    if (!value) return 0;
    const normalized = value.replace(",", ".");
    const number = parseFloat(normalized);
    return isNaN(number) ? 0 : number;
  };

  const formatPrice = (value) =>
    value.toLocaleString("fr-FR", {
      style: "currency",
      currency: "EUR",
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Traitement des données selon les règles métier
    const finalName = name.trim() || "";
    const finalImageUrl = imageUrl.trim() || "/images/coming-soon.png";
    const finalPrice = parsePrice(price);

    // Ajouter le produit au menu
    const newProduct = {
      id: Date.now(), // ID unique temporaire
      title: finalName,
      imageSource: finalImageUrl,
      price: finalPrice,
    };
    console.log(addProduct);
    addProduct(newProduct);
    console.log({
      name: finalName,
      imageUrl: finalImageUrl,
      price: formatPrice(finalPrice),
    });

    // Afficher le message de succès
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);

    // Vider le formulaire
    setName("");
    setImageUrl("");
    setPrice("");
  };

  //affichage
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
            type="url"
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
        <div className="button-success">
          <PrimaryButton
            type="submit"
            className="button"
            label={"Ajouter un nouveau produit"}
          />
          {showSuccess && (
            <SuccessMessage>
              <FiCheckCircle />
              Ajouté avec succès !
            </SuccessMessage>
          )}
        </div>
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

    &:hover {
      border-color: ${theme.colors.primary};
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
    border: 1px solid ${theme.colors.green};
    box-shadow: ${theme.shadows.subtle};

    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.green};
      border-color: ${theme.colors.green};
      transform: translateY(-1px);
      box-shadow: ${theme.shadows.green};
    }
  }

  .button-success {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 12px;
  }
`;

const SuccessMessage = styled.div`
  /* background: ${theme.colors.green}; */
  color: ${theme.colors.green};
  padding: 8px 16px;
  border-radius: ${theme.borderRadius.round};
  font-weight: ${theme.fonts.weights.bold};
  box-shadow: ${theme.shadows.subtle};
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 12px;
  animation: slideIn 0.3s ease-out;

  @keyframes slideIn {
    from {
      transform: translateX(30%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  svg {
    font-size: 1.3em;
    color: ${theme.colors.green};
  }
`;
