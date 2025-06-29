import styled from "styled-components";
import { theme } from "../../../../theme";
import { useState } from "react";
import { fakeMenu1 } from "../../../../fakeData/fakeMenu";
import {
  formatPrice,
  replaceFrenchCommaWithDot,
} from "../../../../utils/maths";
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
              <div className="button">button</div>
            </div>
          </div>
        </div>
      ))}
    </MenuStyled>
  );
}

const MenuStyled = styled("div")`
  border: 1px solid blue;
  padding: 50px 92.5px;
  display: grid;
  grid-row-gap: 60px;
  grid-template-columns: repeat(4, 1fr);

  .card {
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 330px;
    color: ${theme.colors.dark};
    padding: 10px 20px 10px;
  }

  .picture {
    flex-basis: 60%;
    background: red;
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
      background: blue;
      flex-basis: 40%;
      font-size: ${theme.fonts.P4};
      font-family: "Amatic SC", cursive;
      font-weight: ${theme.weights.bold};
    }

    .description {
      background: pink;
      flex-basis: 60%;
      display: flex;

      .price {
        flex-basis: 50%;
        background: green;
        color: black;
      }

      .button {
        flex-basis: 50%;
        background: yellow;
      }
    }
  }
`;
