import styled from "styled-components";
import { theme } from "../../theme";
import { formatPrice, replaceFrenchCommaWithDot } from "../../utils/maths";
import PrimaryButton from "../reusable-ui/PrimaryButton";

export default function Card({ title, imageSource, price, id }) {
  return (
    <CardStyled key={id} className="card">
      <div className="picture">
        <img src={imageSource} alt={title} />
      </div>

      <div className="info-text">
        <div className="title">{title}</div>

        <div className="description">
          <div className="price">
            {formatPrice(replaceFrenchCommaWithDot(price))}
          </div>
          <div className="button">
            <PrimaryButton label="Ajouter" className={"primary-button"} />
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled("div")`
  background: ${theme.colors.white};
  width: 200px;
  height: 300px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  border-radius: ${theme.borderRadius.extraRound};
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
      position: relative;
      margin: auto 0;
      bottom: 10px;
      width: 100%;
      font-family: "Amatic SC", cursive;
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.bold};
      color: ${theme.colors.dark};
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
