import React from "react";
import { Row } from "reactstrap";
import Pagination from "components/shared/Pagination";
import DataCard from "components/shared/DataCards";

const ListPageListing = ({ items, currentPage, totalPage, onChangePage }) => {
  return (
    <Row>
      {items.map((product) => {
        return <DataCard key={product.id} product={product} />;
      })}
      {/* <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onChangePage={(i) => onChangePage(i)}
      /> */}
    </Row>
  );
};

export default React.memo(ListPageListing);
