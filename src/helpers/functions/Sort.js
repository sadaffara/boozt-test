import { SortModes } from "assets/constants/DefaultValues";
import { copyData } from "helpers/functions";

export const sortItems = (sortMode) => {
  const rawData = copyData();
  let sortedData = copyData();
  if (sortMode !== SortModes.all.type) {
    sortedData = rawData.sort((a, b) => {
      if (sortMode === SortModes.asc.type) {
        return parseFloat(a.base_price) - parseFloat(b.base_price);
      } else {
        return parseFloat(b.base_price) - parseFloat(a.base_price);
      }
    });
  }

  return sortedData;
};

export const findSortModeName = (type) => {
  let name = "";
  Object.keys(SortModes).map((key) => {
    if (SortModes[key].type === type) {
      name = SortModes[key].name;
    }
  });
  return name;
};
