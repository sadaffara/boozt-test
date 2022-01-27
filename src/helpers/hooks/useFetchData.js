import { useState, useEffect } from "react";
import { createItems, sortItems } from "helpers/functions";
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

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      let allData = sortItems(_sortMode);
      setTimeout(() => {
        setItems(createItems(_pageNumber, _pageSize, allData));
        setTotalPage(TotalItemCount / _pageSize);
        setLoading(false);
      }, 1000);
    }
    fetchData();
  }, [_pageNumber, _pageSize, _sortMode]);

  return [loading, items, totalPage];
};

export default useFetchData;
