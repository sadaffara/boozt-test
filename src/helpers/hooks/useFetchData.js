import { useState, useEffect } from "react";
import { createItems, sortItems } from "helpers/functions";
import { data } from "assets/data/productList";
import {
  TotalItemCount,
  PageSizes,
  SortModes,
  DefaultPageNumber,
} from "assets/constants/DefaultValues";

const UnsortedData = data;

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
      let allData = UnsortedData;
      setTimeout(() => {
        console.log("_sortMode", _sortMode);
        console.log("_pageNumber", _pageNumber);
        if (_sortMode !== SortModes[0].type && _pageNumber === 1) {
          console.log(222);

          //data has to be sorted by asc or desc order
          allData = sortItems(_sortMode, allData);
          setItems(allData.slice(0, _pageSize));
        } else if (_sortMode === SortModes[0].type && _pageNumber === 1) {
          console.log("UnsortedData", UnsortedData);
          setItems(createItems(DefaultPageNumber, _pageSize, UnsortedData));
        } else {
          console.log(44444);
          //either the data is not sorted, or it was sorted from the last page and now it is changing to a new page
          setItems(createItems(_pageNumber, _pageSize, allData));
        }
        setTotalPage(TotalItemCount / _pageSize);
        setLoading(false);
      }, 1000);
    }
    fetchData();
  }, [_pageNumber, _pageSize, _sortMode]);

  return [loading, items, totalPage];
};

export default useFetchData;
