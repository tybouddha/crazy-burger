import styled from "styled-components";
import { theme } from "../../../../theme";
import { useState } from "react";
import { fakeMenu1 } from "../../../../fakeData/fakeMenu";
import {
  formatPrice,
  replaceFrenchCommaWithDot,
} from "../../../../utils/maths";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

export default function Menu() {
  //state

  const [products, setProducts] = useState(fakeMenu1);
  //comportement

  //affichage
  return (
    <MenuStyled>
      {products.map((product) => (
        <div key={product.id} className="card">
          {/* <img src={product.picture} alt="image" className="image" />
          <span>{product.title}</span>
          <span>{product.price}</span> */}
          <div className="picture">
            <img src={product.imageSource} alt="image" />
          </div>

          <div className="info-text">
            <div className="title">
              <div>{product.title}</div>
            </div>
            <div className="description">
              <div className="price">
                {formatPrice(replaceFrenchCommaWithDot(product.price))}
              </div>
              <PrimaryButton label="Ajouter" className={"button"} />
              {/* <div className="button">button</div> */}
            </div>
          </div>
        </div>
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled("div")`
  border: 1px solid blue;
  /* padding: 50px 92.5px; */
  padding: 50px 50px 150px;
  display: grid;
  grid-row-gap: 60px;
  grid-template-columns: repeat(4, 1fr);
  background: #f5f5f7;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;

  .card {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 330px;
    color: ${theme.colors.dark};
    padding: 10px 20px 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  }

  .picture {
    flex-basis: 60%;
    /* background: red; */
    /* width: 200px;
    height: 145px; */
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 10px;
  }

  .info-text {
    flex-basis: 40%;
    border: 3px solid turquoise;
    display: flex;
    flex-direction: column;

    .title {
      /* background: blue; */
      flex-basis: 40%;
      font-size: ${theme.fonts.P4};
      font-family: "Amatic SC", cursive;
      font-weight: ${theme.weights.bold};
    }

    .description {
      /* background: pink; */
      flex-basis: 60%;
      display: flex;
      margin-top: 14.25px;
      margin-bottom: 14.25px;

      .price {
        display: flex;
        align-items: center;
        flex-basis: 50%;
        /* background: green; */
        color: ${theme.colors.primary};
      }

      .button {
        flex-basis: 50%;
        /* background: transparent; */
        font-size: ${theme.fonts.XS};
      }
    }
  }
`;
