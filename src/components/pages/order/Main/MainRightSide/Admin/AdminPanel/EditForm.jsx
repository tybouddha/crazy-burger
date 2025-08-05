import { useContext } from "react";
import HintMessage from "./HintMessage";
import { OrderContext } from "../../../../../../../context/OrderContext";

export default function EditForm() {
  //state
  const { productSelected } = useContext(OrderContext);
  //comportements

  //affichage
  return (
    <div>
      <HintMessage />
      <span>{productSelected && productSelected.title}</span>
    </div>
  );
}
