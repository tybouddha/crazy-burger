import styled from "styled-components";
import { theme } from "../../../../theme";
import { useState } from "react";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import {
  formatPrice,
  replaceFrenchCommaWithDot,
} from "../../../../utils/maths";
import PrimaryButton from "../../../reusable-ui/PrimaryButton";

export default function Menu() {
  //state

  const [products, setProducts] = useState(fakeMenu2);
  //comportement

  //affichage
  return (
    <MenuStyled>
      {products.map((product) => (
        <div key={product.id} className="card">
          <div className="picture">
            <img src={product.imageSource} alt={product.title} />
          </div>

          <div className="info-text">
            <div className="title">
              <div>{product.title}</div>
            </div>
            <div className="description">
              <div className="price">
                {formatPrice(replaceFrenchCommaWithDot(product.price))}
              </div>
              <div className="button">
                <PrimaryButton label="Ajouter" className={"primary-button"} />
              </div>
            </div>
          </div>
        </div>
      ))}
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

  .card {
    background: ${theme.colors.white};
    width: 200px;
    height: 300px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
  }
  .picture {
    width: 100%;
    height: auto;
    margin-top: 30px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .info-text {
    display: grid;
    grid-template-rows: 30% 70%;
    padding: 5px;

    .title {
      margin: auto 0;
      font-size: ${theme.fonts.size.P4};
      position: relative;
      bottom: 10px;
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      width: 100%;
      text-overflow: ellipsis;
      font-family: "Amatic SC", cursive;
    }

    .description {
      display: grid;
      grid-template-columns: 1fr 1fr;

      .price {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-weight: ${theme.fonts.weights.medium};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: ${theme.fonts.weights.medium};
        color: ${theme.colors.primary};
      }

      .button {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: ${theme.fonts.size.P1};

        .primary-button {
          font-size: ${theme.fonts.size.XS};
          cursor: pointer;
          padding: 12px;
        }
      }
    }
  }
`;
