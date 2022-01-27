import React, { useState } from "react";
import ProductHeading from "components/shared/ProductHeading";
import ProductListing from "components/shared/ProductListing";
import Loading from "components/common/Loading";
import {
  TotalItemCount,
  PageSizes,
  SortModes,
} from "assets/constants/DefaultValues";
import useFetchData from "helpers/hooks/useFetchData";

const StaticView = () => {
  const [sortMode, setSortMode] = useState(SortModes[0].type);
  const [selectedPageSize, setSelectedPageSize] = useState(PageSizes[1]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, items, totalPage] = useFetchData(
    sortMode,
    selectedPageSize,
    currentPage
  );
  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;

  return (
    <div className="disable-text-selection">
      <ProductHeading
        sortProducts={(sort) => {
          setCurrentPage(1);
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
            setCurrentPage(page);
          }}
        />
      )}
    </div>
  );
};

export default StaticView;
