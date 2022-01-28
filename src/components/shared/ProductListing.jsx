import React from "react";
import { Row } from "reactstrap";
import Pagination from "components/shared/Pagination";
import DataCard from "components/shared/DataCards";

const ProductListing = ({
  items,
  currentPage,
  totalPage,
  onChangePage,
  selectedCurrency,
}) => {
  return (
    <Row>
      {items.map((product) => {
        return (
          <DataCard
            selectedCurrency={selectedCurrency}
            key={product.id}
            product={product}
          />
        );
      })}
      <Pagination
        currentPage={currentPage}
        totalPage={totalPage}
        onChangePage={(page) => onChangePage(page)}
      />
    </Row>
  );
};

export default React.memo(ProductListing);
