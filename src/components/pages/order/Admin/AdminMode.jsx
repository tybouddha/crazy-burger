import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";

export default function AdminMode() {
  return (
    <AdminModeStyled>
      <div className="AdminTabs">
        <button className="icon">
          <FiChevronDown />
        </button>
        <button className="ajouter">Ajouter un produit</button>
        <button className="modifier">Modifier un produit</button>
      </div>
      <div className="panel">
        <span>Ajouter un produit</span>
      </div>
    </AdminModeStyled>
  );
}

const AdminModeStyled = styled("div")`
  height: 294px;
  width: 1400px;
  position: absolute;
  /* bottom: 0;
  left: 0;
  right: 0; */
  .AdminTabs {
    margin-left: 71px;
    width: 1400px;
    height: 44px;
    background: green;
  }

  .icon {
    height: 43px;
    width: 60px;
  }

  .ajouter {
    height: 43px;
    width: 212px;
  }

  .modifier {
    height: 43px;
    width: 220px;
  }

  .panel {
    width: 1400px;
    height: 250px;
    background: white;
  }
`;
