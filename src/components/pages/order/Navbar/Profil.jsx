import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../../theme";

export default function Profil({ username, className }) {
  return (
    <ProfilStyled className={className}>
      <div className="info">
        <p>
          Hey <b>{username}</b>
        </p>
        <Link to="/">
          <div className="description">
            <small>Déconnexion</small>
          </div>
        </Link>
      </div>
      <div div className="picture">
        <BsPersonCircle />
      </div>
    </ProfilStyled>
  );
}

const ProfilStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
  .info {
    text-align: right;
    margin-right: 10px;
    p {
      margin: 0;
      color: ${theme.colors.greyBlue};
    }
    b {
      color: ${theme.colors.primary};
    }
  }
  a {
    text-decoration: none;
    .description {
      &:hover {
        text-decoration: underline;
        color: ${theme.colors.greyDark};
      }
      small {
        font-size: ${theme.fonts.size.XXS};
        color: ${theme.colors.greyBlue};
        font-weight: ${theme.fonts.weights.medium};
        text-decoration: none;
        position: relative;
        bottom: 2px;
      }
    }
  }
  .picture {
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`;
