import React, { useState, useEffect } from "react";
import ProductHeading from "components/shared/ProductHeading";
import ProductListing from "components/shared/ProductListing";
import { GET_ALL_PRODUCTS } from "assets/constants/ApiURLS";
import { Adapter } from "helpers/api/Adapter";

const orderOptions = [
  { column: "title", label: "Product Name" },
  { column: "category", label: "Category" },
  { column: "status", label: "Status" },
];
const pageSizes = [4, 8, 12, 20];

const ImageListPages = ({ match }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayMode, setDisplayMode] = useState("imagelist");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPageSize, setSelectedPageSize] = useState(8);
  const [selectedOrderOption, setSelectedOrderOption] = useState({
    column: "title",
    label: "Product Name",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [totalItemCount, setTotalItemCount] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedPageSize, selectedOrderOption]);

  useEffect(() => {
    async function fetchData() {
      Adapter.get(
        `${GET_ALL_PRODUCTS}?pageSize=${selectedPageSize}&currentPage=${currentPage}&orderBy=${selectedOrderOption.column}&search=${search}`
      )
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          setTotalPage(data.totalPage);
          setItems(
            data.data.map((x) => {
              return { ...x, img: x.img.replace("img/", "img/products/") };
            })
          );
          setSelectedItems([]);
          setTotalItemCount(data.totalItem);
          setIsLoaded(true);
        });
    }
    fetchData();
  }, [selectedPageSize, currentPage, selectedOrderOption, search]);

  const startIndex = (currentPage - 1) * selectedPageSize;
  const endIndex = currentPage * selectedPageSize;

  return !isLoaded ? (
    <div className="loading" />
  ) : (
    <>
      <div className="disable-text-selection">
        <ProductHeading
          heading="menu.image-list"
          displayMode={displayMode}
          changeDisplayMode={setDisplayMode}
          changeOrderBy={(column) => {
            setSelectedOrderOption(
              orderOptions.find((x) => x.column === column)
            );
          }}
          changePageSize={setSelectedPageSize}
          selectedPageSize={selectedPageSize}
          totalItemCount={totalItemCount}
          selectedOrderOption={selectedOrderOption}
          match={match}
          startIndex={startIndex}
          endIndex={endIndex}
          selectedItemsLength={selectedItems ? selectedItems.length : 0}
          itemsLength={items ? items.length : 0}
          onSearchKey={(e) => {
            if (e.key === "Enter") {
              setSearch(e.target.value.toLowerCase());
            }
          }}
          orderOptions={orderOptions}
          pageSizes={pageSizes}
          toggleModal={() => setModalOpen(!modalOpen)}
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

export default ImageListPages;
