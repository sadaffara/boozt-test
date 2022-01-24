import React, { useState, useEffect } from "react";
import ProductHeading from "components/shared/ProductHeading";
import ProductListing from "components/shared/ProductListing";
import data from "assets/data/productList.json";
import Loading from "components/common/Loading";

const pageSizes = [4, 10, 12, 16];

const StaticView = ({ match }) => {
  const totalItemCount = data.length;
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPageSize, setSelectedPageSize] = useState(pageSizes[1]);
  const [totalPage, setTotalPage] = useState(1);
  const [items, setItems] = useState([]);
  const [sortedData, setSortedData] = useState(data);
  const [sorted, setSorted] = useState("All");
  const [sortMode, setSortMode] = useState(false);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize]);

  useEffect(() => {
    fetchData(false, true, selectedPageSize, currentPage, sortMode);
  }, [selectedPageSize, currentPage, sortMode]);

  async function fetchData(
    sort = false,
    asc = "All",
    _pageSize = selectedPageSize,
    _pageNumber = currentPage
  ) {
    console.log("sort", sort);
    setLoading(true);
    setSortMode(sort);
    setSelectedPageSize(_pageSize);
    setCurrentPage(_pageNumber);
    setTimeout(() => {
      let _items = [];
      if (sort) {
        _items = sortItems(asc, _pageSize);
      } else {
        if (sort) {
          _items = createItems(_pageNumber, _pageSize, sortedData);
        } else {
          _items = createItems(_pageNumber, _pageSize, data);
        }
      }
      setItems(_items);
      setTotalPage(data.length / _pageSize);
      setLoading(false);
    }, 1000);
  }

  const sortItems = (asc, _pageSize) => {
    let _items = [];
    data.map((item) =>
      _items.push({
        index: item.index,
        id: item.id,
        name: item.product_name,
        brand: item.brand_name,
        price: item.base_price,
        image: item.filename,
      })
    );
    _items.sort((a, b) => {
      if (asc === "Asc") {
        setSorted("Asc");
        return a.price - b.price;
      } else {
        setSorted("Desc");
        return b.price - a.price;
      }
    });
    setSortedData(_items);
    _items = _items.slice(0, _pageSize);
    return _items;
  };

  const createItems = (_pageNumber, _pageSize, _sortedData) => {
    let allData = _sortedData;
    let currentIndex = (_pageNumber - 1) * _pageSize;
    let pageData = allData.slice(currentIndex, currentIndex + _pageSize);
    let _items = [];
    pageData.map((item) =>
      _items.push({
        index: item.index,
        id: item.id,
        name: item.product_name || item.name,
        brand: item.brand_name || item.brand,
        price: item.base_price || item.price,
        image: item.filename || item.image,
      })
    );
    return _items;
  };

  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;

  return (
    <div className="disable-text-selection">
      <ProductHeading
        fetchData={(sort, asc) => fetchData(sort, asc, selectedPageSize, 1)}
        heading="menu.image-list"
        changePageSize={setSelectedPageSize}
        selectedPageSize={selectedPageSize}
        totalItemCount={totalItemCount}
        match={match}
        startIndex={startIndex}
        endIndex={endIndex}
        itemsLength={items ? items.length : 0}
        pageSizes={pageSizes}
        sorted={sorted}
        setSorted={(sortStatus) => setSorted(sortStatus)}
        setSortMode={(_sortMode) => setSortMode(_sortMode)}
      />
      {loading ? (
        <Loading label="Loading Product List" />
      ) : (
        <ProductListing
          items={items}
          currentPage={currentPage}
          totalPage={totalPage}
          onChangePage={(page) => {
            fetchData(sortMode, sorted, selectedPageSize, page);
          }}
        />
      )}
    </div>
  );
};

export default StaticView;
