import { Currencies } from "assets/constants/DefaultValues";

export const convertCurrency = (code, price) => {
  let convertedPrice = {};
  Object.keys(Currencies).forEach((key) => {
    if (code === Currencies[key].code) {
      convertedPrice = {
        price: price * Currencies[key].convertParam,
        symbol: Currencies[key].symbol,
      };
    }
  });
  return convertedPrice;
};
