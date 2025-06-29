import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Menu() {
  return (
    <MenuStyled>
      <div className="card">
        {/* <img src={product.picture} alt="image" className="image" />
          <span>{product.title}</span>
          <span>{product.price}</span> */}
        <div className="picture">picture</div>

        <div className="info-text">
          <div className="title">title</div>
          <div className="description">
            <div className="price">price</div>
            <div className="button">button</div>
          </div>
        </div>
      </div>
    </MenuStyled>
  );
}

const MenuStyled = styled("div")`
  border: 1px solid blue;
  padding: 50px 92.5px;

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

  .info-text {
    flex-basis: 40%;
    border: 3px solid turquoise;
    display: flex;
    flex-direction: column;

    .title {
      background: blue;
      flex-basis: 40%;
    }

    .description {
      background: pink;
      flex-basis: 60%;
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
