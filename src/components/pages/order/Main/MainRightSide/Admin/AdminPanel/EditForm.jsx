import { useContext, useState } from "react";
import HintMessage from "./HintMessage";
import { OrderContext } from "../../../../../../../context/OrderContext";
import styled from "styled-components";
import { EMPTY_PRODUCT } from "../../../../../../../enums/product";
import TextInput from "../../../../../../reusable-ui/TextInput";
import { getInputTextsConfig } from "./inputTextConfig";
import ImagePreview from "./ImagePreview";

export default function EditForm() {
  //state
  const { productSelected } = useContext(OrderContext);
  const [productBeingEdited, setproductBeingEdited] = useState(EMPTY_PRODUCT);

  const inputTexts = getInputTextsConfig(productSelected);
  //comportements
  const handleChange = (event) => {
    const { name, value } = event.target;
    setproductBeingEdited({ ...productBeingEdited, [name]: value });
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
          />
        ))}
      </div>
      <div className="submit"></div>
      {/* <HintMessage />
      <span>{productSelected && productSelected.title}</span> */}
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

    .submit-button {
      /* width: 50%; */
      height: 100%;
    }
  }
`;
