import { SortModes } from "assets/constants/DefaultValues";
import { copyData } from "helpers/functions";

export const sortItems = (sortMode) => {
  const rawData = copyData();
  let sortedData = copyData();
  if (sortMode !== SortModes.all.type) {
    sortedData = rawData.sort((a, b) => {
      if (sortMode === SortModes.asc.type) {
        return parseFloat(a.actual_price) - parseFloat(b.actual_price);
      } else {
        return parseFloat(b.actual_price) - parseFloat(a.actual_price);
      }
    });
  }

  return sortedData;
};

export const findSortModeName = (type = 0) => {
  return Object.entries(SortModes).find(([, s]) => s.type === type)[1].name;
};
