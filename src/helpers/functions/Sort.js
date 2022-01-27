import { SortModes } from "assets/constants/DefaultValues";
import { copyData } from "helpers/functions";

export const sortItems = (sortMode) => {
  const rawData = copyData();
  let sortedData = copyData();
  if (sortMode !== SortModes[0].type) {
    sortedData = rawData.sort((a, b) => {
      if (sortMode === SortModes[1].type) {
        return parseFloat(a.base_price) - parseFloat(b.base_price);
      } else {
        return parseFloat(b.base_price) - parseFloat(a.base_price);
      }
    });
  }

  return sortedData;
};

export const findSortModeName = (type) => {
  for (let i = 0; i <= SortModes.length; i++) {
    if (type === SortModes[i].type) {
      return SortModes[i].name;
    }
  }
};
