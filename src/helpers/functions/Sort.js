import { SortModes } from "assets/constants/DefaultValues";

export const sortItems = (sortMode, data) => {
  const SoretdData = data.sort((a, b) => {
    if (sortMode === SortModes[1].type) {
      return parseFloat(a.base_price) - parseFloat(b.base_price);
    } else {
      return parseFloat(b.base_price) - parseFloat(a.base_price);
    }
  });
  return SoretdData;
};

export const findSortModeName = (type) => {
  for (let i = 0; i <= SortModes.length; i++) {
    if (type === SortModes[i].type) {
      return SortModes[i].name;
    }
  }
};
