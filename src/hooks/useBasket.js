import { useState } from "react";
import { fakeBasket } from "../fakeData/fakeBasket";
import {
  deepClone,
  filterInArray,
  findInArray,
  findIndexInArray,
} from "../utils/array";
export const useBasket = () => {
  const [basket, setBasket] = useState(fakeBasket.EMPTY);

  const handleAddToBasket = (productToAdd) => {
    const basketCopy = deepClone(basket);
    const productFoundInBasket = findInArray(productToAdd.id, basketCopy);
    //1er cas : le produit n'est pas dans le panier
    if (!productFoundInBasket) {
      createNewProductInBasket(productToAdd, basketCopy, setBasket);
      return;
    }
    //2e cas : le produit est déjà dans le panier
    incrementProductAlreadyInBasket(productToAdd, basketCopy);
  };

  const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
    const newBasketProduct = { ...productToAdd, quantity: 1 };
    const basketUpdater = [newBasketProduct, ...basketCopy];
    setBasket(basketUpdater);
    return;
  };

  const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
    const indexOfProductToIncrement = findIndexInArray(
      productToAdd.id,
      basketCopy
    );
    basketCopy[indexOfProductToIncrement].quantity += 1;
    setBasket(basketCopy);
  };

  const handleDeleteBasketProduct = (idBasketProduct) => {
    const basketCopy = deepClone(basket);

    const basketUpdated = filterInArray(idBasketProduct, basketCopy);

    setBasket(basketUpdated);
  };

  return { basket, handleAddToBasket, handleDeleteBasketProduct };
};
