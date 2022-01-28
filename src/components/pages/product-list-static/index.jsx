import React, { useState } from "react";
import ProductHeading from "components/shared/ProductHeading";
import ProductListing from "components/shared/ProductListing";
import Loading from "components/common/Loading";
import {
  TotalItemCount,
  PageSizes,
  SortModes,
  DefaultPageNumber,
  Currencies,
} from "assets/constants/DefaultValues";
import useFetchData from "helpers/hooks/useFetchData";

const StaticView = () => {
  const [sortMode, setSortMode] = useState(SortModes.all.type);
  const [selectedPageSize, setSelectedPageSize] = useState(PageSizes.md);
  const [currentPage, setCurrentPage] = useState(DefaultPageNumber);
  const [selectedCurrency, setSelectedCurrency] = useState(Currencies.us);
  const [loading, items, totalPage, rangeIndex] = useFetchData(
    sortMode,
    selectedPageSize,
    currentPage
  );

  return (
    <div className="disable-text-selection">
      <ProductHeading
        sortProducts={(sort) => {
          setCurrentPage(1);
          setSortMode(sort);
        }}
        changePageSize={(_pageSize) => {
          setCurrentPage(DefaultPageNumber);
          setSelectedPageSize(_pageSize);
        }}
        selectedPageSize={selectedPageSize}
        totalItemCount={TotalItemCount}
        startIndex={rangeIndex.startIndex}
        endIndex={rangeIndex.endIndex}
        sortMode={sortMode}
        itemsLength={items ? items.length : 0}
        pageSizes={PageSizes}
        selectedCurrency={selectedCurrency}
        setSelectedCurrency={(_currency) => {
          setSelectedCurrency(_currency);
        }}
      />
      {loading ? (
        <Loading label="Loading Product List" />
      ) : (
        <ProductListing
          items={items}
          selectedCurrency={selectedCurrency}
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
