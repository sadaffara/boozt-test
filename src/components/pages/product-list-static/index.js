import React, { useState, useEffect } from "react";
import ProductHeading from "components/shared/ProductHeading";
import ProductListing from "components/shared/ProductListing";
import Loading from "components/common/Loading";
import {
  TotalItemCount,
  PageSizes,
  SortModes,
  DefaultPageNumber,
} from "assets/constants/DefaultValues";
import useFetchData from "helpers/hooks/useFetchData";

const StaticView = () => {
  const [loading, items, totalPage, fetchData] = useFetchData(
    SortModes[0].type,
    PageSizes[1],
    DefaultPageNumber
  );
  const [sortMode, setSortMode] = useState(SortModes[0].type);
  const [selectedPageSize, setSelectedPageSize] = useState(PageSizes[1]);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize]);

  useEffect(() => {
    fetchData();
  }, [selectedPageSize, currentPage, sortMode]);

  return (
    <div className="disable-text-selection">
      <ProductHeading
        sortProducts={(sort) => {
          // fetchData(sort, selectedPageSize, DefaultPageNumber);
          setSortMode(sort);
        }}
        changePageSize={(_pageSize) => setSelectedPageSize(_pageSize)}
        selectedPageSize={selectedPageSize}
        totalItemCount={TotalItemCount}
        startIndex={startIndex}
        endIndex={endIndex}
        sortMode={sortMode}
        itemsLength={items ? items.length : 0}
        pageSizes={PageSizes}
      />
      {loading ? (
        <Loading label="Loading Product List" />
      ) : (
        <ProductListing
          items={items}
          currentPage={currentPage}
          totalPage={totalPage}
          onChangePage={(page) => {
            console.log("page", page);
            setCurrentPage(page);
            // fetchData(sortMode, selectedPageSize, page);
          }}
        />
      )}
    </div>
  );
};

export default StaticView;
