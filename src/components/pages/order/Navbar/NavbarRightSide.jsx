<<<<<<< HEAD
import styled from "styled-components"
import Profile from "./Profile"
import ToggleButton from "../../../reusable-ui/ToggleButton"
import { useContext } from "react"
import ToastAdmin from "./ToastAdmin"
import { toast } from "react-toastify"
import OrderContext from "../../../../context/OrderContext"

export default function NavbarRightSide({ username }) {
  const { isModeAdmin, setIsModeAdmin } = useContext(OrderContext)

  const displayToastNotification = () => {
    if (!isModeAdmin) {
=======
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
>>>>>>> e4d5ff0548385cf9830978045bc55b2a50252baf
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
<<<<<<< HEAD
      })
    }
    setIsModeAdmin(!isModeAdmin)
  }

  return (
    <NavbarRightSideStyled>
      <ToggleButton
        isChecked={isModeAdmin}
        labelIfUnchecked="ACTIVER LE MODE ADMIN"
        labelIfChecked="DÉSACTIVER LE MODE ADMIN"
        onToggle={displayToastNotification}
      />
      <Profile username={username} />
      <ToastAdmin />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`
=======
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
>>>>>>> e4d5ff0548385cf9830978045bc55b2a50252baf
