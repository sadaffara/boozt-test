import React, { useState, useEffect } from "react";
import ProductHeading from "components/shared/ProductHeading";
import ProductListing from "components/shared/ProductListing";
import data from "assets/data/productList.json";
import { Spinner, Row } from "reactstrap";

const pageSizes = [4, 8, 12, 16];

const StaticView = ({ match }) => {
  const totalItemCount = data.length;
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPageSize, setSelectedPageSize] = useState(pageSizes[1]);
  const [totalPage, setTotalPage] = useState(1);
  const [items, setItems] = useState([]);
  const [sortedData, setSortedData] = useState(data);
  const [sorted, setSorted] = useState("All");

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize]);

  useEffect(() => {
    fetchData(false, true, selectedPageSize, currentPage);
  }, [selectedPageSize, currentPage]);

  async function fetchData(
    sort = false,
    asc = true,
    _pageSize = selectedPageSize,
    _pageNumber = currentPage
  ) {
    setLoading(true);
    setSelectedPageSize(_pageSize);
    setCurrentPage(_pageNumber);
    setTimeout(() => {
      let _items = createItems(_pageNumber, _pageSize);
      if (sort) {
        _items = sortItems(asc, _pageSize);
      } else {
        setSorted("All");
        setSortedData(data);
      }
      setItems(_items);
      setTotalPage(data.length / _pageSize);
      setLoading(false);
    }, 1000);
  }

  const sortItems = (asc, _pageSize) => {
    let _items = [];
    data.map((item, i) =>
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
      if (asc) {
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

  const createItems = (_pageNumber, _pageSize) => {
    let allData = sortedData;
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

  return loading ? (
    <Row className="justify-content-center">
      <Spinner animation="border" role="status" />
      <h5 className="row justify-content-center mt-2">Loading Product List</h5>
    </Row>
  ) : (
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
      />
      <ProductListing
        items={items}
        currentPage={currentPage}
        totalPage={totalPage}
        onChangePage={setCurrentPage}
      />
    </div>
  );
};

export default StaticView;
