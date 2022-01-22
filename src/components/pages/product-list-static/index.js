import React, { useState, useEffect } from "react";
import ProductHeading from "components/shared/ProductHeading";
import ProductListing from "components/shared/ProductListing";
import data from "assets/data/productList.json";
import { Spinner, Row } from "reactstrap";

const pageSizes = [4, 8, 12, 20];

const StaticView = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPageSize, setSelectedPageSize] = useState(8);
  const [totalItemCount, setTotalItemCount] = useState(data.length);
  const [totalPage, setTotalPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize]);

  useEffect(() => {
    fetchData();
  }, [selectedPageSize, currentPage]);

  async function fetchData(sort = false, asc = true) {
    setLoading(true);
    setTimeout(() => {
      let _items = createItems();
      if (sort) {
        _items.sort((a, b) => {
          if (asc) {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        });
      }
      _items = _items.slice(currentPage - 1, selectedPageSize);
      setItems(_items);
      setTotalPage(data.length / selectedPageSize);
      setLoading(false);
    }, 1000);
  }

  const createItems = () => {
    let _items = [];
    data.map((item, i) =>
      _items.push({
        id: item.id,
        name: item.product_name,
        brand: item.brand_name,
        price: item.actual_price,
        image: item.filename,
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
        fetchData={(sort, asc) => fetchData(sort, asc)}
        heading="menu.image-list"
        changePageSize={setSelectedPageSize}
        selectedPageSize={selectedPageSize}
        totalItemCount={totalItemCount}
        match={match}
        startIndex={startIndex}
        endIndex={endIndex}
        selectedItemsLength={selectedItems ? selectedItems.length : 0}
        itemsLength={items ? items.length : 0}
        pageSizes={pageSizes}
      />

      <ProductListing
        items={items}
        selectedItems={selectedItems}
        currentPage={currentPage}
        totalPage={totalPage}
        onChangePage={setCurrentPage}
      />
    </div>
  );
};

export default StaticView;
