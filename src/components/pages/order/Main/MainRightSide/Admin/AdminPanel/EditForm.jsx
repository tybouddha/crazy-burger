import { useContext } from "react";
// import HintMessage from "./HintMessage";
import { OrderContext } from "../../../../../../../context/OrderContext";
import styled from "styled-components";
import TextInput from "../../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";
import ImagePreview from "./ImagePreview";
import EditInfoMessage from "./EditInfoMessage";

export default function EditForm() {
  //state
  const { productSelected, setProductSelected, handleEdit, titleEditRef } =
    useContext(OrderContext);

  const inputTexts = getInputTextsConfig(productSelected);

  //comportements
  const handleChange = (event) => {
    const { name, value } = event.target;
    const produitBeingUpdated = {
      ...productSelected,
      [name]: value,
    };
    //state interne au formulaire EditForm pour update
    setProductSelected(produitBeingUpdated);
    //State handler du menu pour update
    handleEdit(produitBeingUpdated);
  };

  //affichage
  return (
    <EditFormStyled>
      <ImagePreview
        imageSource={productSelected.imageSource}
        title={productSelected.title}
      />
      <div className="input-fields">
        {inputTexts.map((input) => (
          <TextInput
            {...input}
            key={input.id}
            onChange={handleChange}
            version="minimalist"
            ref={input.name === "title" ? titleEditRef : null}
          />
        ))}
      </div>
      <div className="submit">
        <EditInfoMessage />
      </div>
    </EditFormStyled>
  );
}
const EditFormStyled = styled("div")`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    /* background: blue; */
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    /* background: green; */
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;
  }
`;
