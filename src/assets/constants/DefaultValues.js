import data from "assets/data/productList.json";

export const PageSizes = [4, 8, 12, 16];
export const TotalItemCount = data.length;
export const SortModes = [
  {
    name: "All",
    type: 0,
    fullName: "All Results",
  },
  {
    name: "Asc",
    type: 1,
    fullName: "Ascending",
  },
  {
    name: "Desc",
    type: -1,
    fullName: "Descending",
  },
];
export const DefaultPageNumber = 1;
