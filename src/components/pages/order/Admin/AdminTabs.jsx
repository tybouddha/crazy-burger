import styled from "styled-components";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

import { theme } from "../../../../theme";
import Tab from "../../../reusable-ui/Tab";

export default function AdminTabs() {
  return (
    <AdminTabsStyled>
      <Tab Icon={<FiChevronDown />} className={"up-down"} />
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
  height: 44px;
  width: 1440px;
  color: ${theme.colors.greySemiDark};
  padding-left: 71px;
`;
