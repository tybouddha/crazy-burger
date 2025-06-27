import styled from "styled-components";
import { theme } from "../../../theme";
import { useState } from "react";

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
      <div className="products-container">
        <div className="card">
          {/* <img src={product.picture} alt="image" className="image" />
          <span>{product.title}</span>
          <span>{product.price}</span> */}
          <div className="picture">picture</div>

          <div className="info">
            <div className="title">title</div>
            <div className="price-and-button">
              <div className="price">price</div>
              <div className="button">button</div>
            </div>
          </div>
        </div>
      </div>
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

  .products-container {
    border: 1px solid blue;
    padding: 50px 92.5px;
  }

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

  .info {
    flex-basis: 40%;
    border: 3px solid turquoise;
    display: flex;
    flex-direction: column;

    .title {
      background: blue;
      flex-basis: 50%;
    }

    .price-and-button {
      background: pink;
      flex-basis: 50%;
      display: flex;

      .price {
        flex-basis: 50%;
        background: green;
      }

      .button {
        flex-basis: 50%;
        background: yellow;
      }
    }
  }
`;
