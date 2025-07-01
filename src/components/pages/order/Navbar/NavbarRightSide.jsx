import styled from "styled-components";
import Profil from "./Profil";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { theme } from "../../../../theme";
import { useState } from "react";

export default function NavbarRightSide({ username }) {
  //state
  const [isAdmin, setIsAdmin] = useState(false);
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
        labelIfUnchecked="Activer le mode admin"
        labelIfChecked="Désactiver le mode admin"
        onToggle={handleClick}
      />
      <ToastContainer className="toaster" bodyClassName="body-toast" />

      <Profil username={username} className={"profile"} />
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

  .toaster {
    max-width: 300px;
  }

  .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
    background: ${theme.colors.background_dark};
  }

  .body-toast {
    .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
      margin-right: 20px;
      margin-left: 5px;
    }
    div {
      line-height: 1.3em;
    }
  }
`;
