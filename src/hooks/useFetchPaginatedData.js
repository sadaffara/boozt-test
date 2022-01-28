import { useState, useEffect } from "react";
import { handlePaging, sortItems } from "helpers/functions";
import {
  PageSizes,
  SortModes,
  DefaultPageNumber,
} from "assets/constants/DefaultValues";

const useFetchPaginatedData = (
  _sortMode = SortModes.all.type,
  _pageSize = PageSizes.md,
  _pageNumber = DefaultPageNumber
) => {
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState(DefaultPageNumber);
  const [items, setItems] = useState([]);
  const [rangeIndex, setRangeIndex] = useState({
    startIndex: 0,
    endIndex: PageSizes.md,
  });

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setTimeout(() => {
        let paginationData = handlePaging(
          _pageNumber,
          _pageSize,
          sortItems(_sortMode)
        );
        setItems(paginationData.pageData);
        setRangeIndex({
          startIndex: paginationData.startIndex,
          endIndex: paginationData.endIndex,
        });
        setTotalPage(paginationData.totalPage);
        setLoading(false);
      }, 1000);
    }
    fetchData();
  }, [_pageNumber, _pageSize, _sortMode]);

  return [loading, items, totalPage, rangeIndex];
};

export default useFetchPaginatedData;
