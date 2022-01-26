import { useState } from "react";
import { createItems, sortItems } from "helpers/functions";
import data from "assets/data/productList.json";
import {
  TotalItemCount,
  PageSizes,
  SortModes,
  DefaultPageNumber,
} from "assets/constants/DefaultValues";

const useFetchData = (
  _sortMode = SortModes[0].type,
  _pageSize = PageSizes[1],
  _pageNumber = DefaultPageNumber
) => {
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(DefaultPageNumber);
  const [items, setItems] = useState([]);

  async function fetchData() {
    setLoading(true);
    let allData = data;
    setTimeout(() => {
      if (_sortMode !== SortModes[0].type) {
        //data has to be sorted by asc or desc order
        allData = sortItems(_sortMode, _pageSize);
        setItems(items.slice(0, _pageSize));
      } else {
        //either the data is not sorted, or it was sorted from the last page and now it is changing to a new page
        setItems(createItems(_pageNumber, _pageSize, allData));
      }
      setTotalPage(TotalItemCount / _pageSize);
      setLoading(false);
    }, 1000);
  }
  return [loading, items, totalPage, fetchData];
};

export default useFetchData;
