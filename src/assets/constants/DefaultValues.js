import { data } from "assets/data/productList";

export const PageSizes = {
  sm: 4,
  md: 8,
  lg: 12,
  xlg: 16,
};
export const TotalItemCount = data.length;

export const SortModes = {
  all: {
    name: "All",
    type: 0,
    fullName: "All Results",
  },
  asc: {
    name: "Asc",
    type: 1,
    fullName: "Ascending",
  },
  desc: {
    name: "Desc",
    type: -1,
    fullName: "Descending",
  },
};
export const DefaultPageNumber = 1;

export const Currencies = {
  us: {
    name: "Dollars",
    symbol: "$",
    code: "USD",
    convertParam: 1,
  },
  sweden: {
    name: "Krona",
    symbol: "kr",
    code: "SEK",
    convertParam: 9.45,
  },

  europe: {
    name: "Euro",
    symbol: "€",
    code: "EUR",
    convertParam: 0.9,
  },
};
