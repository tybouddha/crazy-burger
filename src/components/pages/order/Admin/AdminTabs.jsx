import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

import { theme } from "../../../../theme";
import Tab from "../../../reusable-ui/Tab";

export default function AdminTabs({ setIsCollapsed, isCollapsed }) {
  //state

  //comportements

  //affichage

  return (
    <AdminTabsStyled>
      <Tab
        Icon={isCollapsed ? <FiChevronUp /> : <FiChevronDown />}
        label=""
        className={isCollapsed ? "is-active" : ""}
        onClick={() => setIsCollapsed(!isCollapsed)}
      />
      <Tab
        Icon={<AiOutlinePlus />}
        label="Ajouter un produit"
        className={"ajouter"}
      />
      <Tab
        Icon={<MdModeEditOutline />}
        label="Modifier un produit"
        className={"modifier"}
      />
    </AdminTabsStyled>
  );
}

const AdminTabsStyled = styled("div")`
  display: flex;
  padding: 0 20px;

  position: relative;
  left: 5%;

  :hover {
    border-bottom: 2px solid ${theme.colors.white};
  }

  .is-active {
    background-color: ${theme.colors.background_dark};
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
  }

  button {
    margin-left: 1px;
  }
`;
