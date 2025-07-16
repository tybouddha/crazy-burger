import styled from "styled-components";
import Profil from "./Profil";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import AdminToast from "../../../reusable-ui/AdminToast.jsx";
import { toast } from "react-toastify";
import { useContext } from "react";
import { IsAdminContext } from "../../../../context/IsAdminContext.jsx";

export default function NavbarRightSide() {
  //state
  const { isAdmin, setIsAdmin } = useContext(IsAdminContext);
  //comportement
  const handleClick = () => {
    if (!isAdmin) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsAdmin(!isAdmin);
  };
  //render
  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton
        isChecked={isAdmin}
        labelIfUnchecked="Activer le mode admin"
        labelIfChecked="Désactiver le mode admin"
        onToggle={handleClick}
      />

      <Profil className={"profile"} />
      <AdminToast />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled("div")`
  display: flex;
  align-items: center;
  padding-right: 50px;

  .profile {
    padding-left: 50px;
  }
`;
