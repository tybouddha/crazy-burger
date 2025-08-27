import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import { deepClone, findInArray } from "../utils/array";
export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productToAdd) => {
    //copie du state
    const basketCopy = deepClone(basket);
    const isProductAlreadyInBasket =
      findInArray(productToAdd.id, basketCopy) !== undefined;
    //manip de la copie du state
    //1er cas: le produit n'est pas dans le panier
    if (!isProductAlreadyInBasket) {
      const newBasketProduct = { ...productToAdd, quantity: 1 };
      const basketUpdater = [newBasketProduct, ...basketCopy];
      //update du state
      setBasket(basketUpdater);
    }
    //2eme cas: le produit est déjà dans le panier
    else {
      const indexOfProductToIncrement = basket.findIndex(
        (basketProduct) => basketProduct.id === productToAdd.id
      );
      basketCopy[indexOfProductToIncrement].quantity += 1;
      setBasket(basketCopy);
    }
    // setBasket(isProductAlreadyInBasket);
  };
  return { basket, handleAddToBasket };
};
