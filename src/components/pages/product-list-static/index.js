import React, { useState, useEffect } from "react";
import ProductHeading from "components/shared/ProductHeading";
import ProductListing from "components/shared/ProductListing";
import data from "assets/data/productList.json";
import { Spinner, Row } from "reactstrap";

const orderOptions = [
  { column: "title", label: "Product Name" },
  { column: "category", label: "Category" },
  { column: "status", label: "Status" },
];
const pageSizes = [4, 8, 12, 20];

const StaticView = ({ match }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayMode, setDisplayMode] = useState("imagelist");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPageSize, setSelectedPageSize] = useState(8);
  const [selectedOrderOption, setSelectedOrderOption] = useState({
    column: "title",
    label: "Product Name",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [totalItemCount, setTotalItemCount] = useState(data.length);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize, selectedOrderOption]);

  useEffect(() => {
    async function fetchData() {
      setTimeout(() => {
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
        _items = _items.slice(currentPage - 1, 10);
        setItems(_items);
        // setTotalPage(data.totalPage);
        setIsLoaded(true);
      }, 1000);
    }
    fetchData();
  }, [selectedPageSize, currentPage, selectedOrderOption, search]);

  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;

  return !isLoaded ? (
    <Row className="justify-content-center">
      <Spinner animation="border" role="status" />
      <h5 className="row justify-content-center mt-2">Loading Product List</h5>
    </Row>
  ) : (
    <>
      <div className="disable-text-selection">
        <ProductHeading
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
          displayMode={displayMode}
          selectedItems={selectedItems}
          currentPage={currentPage}
          totalPage={totalPage}
          onChangePage={setCurrentPage}
        />
      </div>
    </>
  );
};

export default StaticView;
