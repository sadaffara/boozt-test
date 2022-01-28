import React, { useState } from "react";
import { Row, DropdownToggle, Collapse } from "reactstrap";
import { Colxx, Separator } from "components/common/Colxx";
import { SortDropdown, PageSizeDropdown, CurrncyDropdown } from "./Dropdowns";

const ProductHeading = ({
  changePageSize,
  selectedPageSize,
  totalItemCount,
  startIndex,
  endIndex,
  pageSizes,
  sortProducts,
  sortMode,
  selectedCurrency,
  setSelectedCurrency,
}) => {
  const [displayOptionsIsOpen, setDisplayOptionsIsOpen] = useState(false);

  return (
    <Row>
      <Colxx xxs="12">
        <div className="mb-2">
          <h3>Product List</h3>
        </div>
        <Separator />
        <div className="mb-2">
          <DropdownToggle
            onClick={() => setDisplayOptionsIsOpen(!displayOptionsIsOpen)}
            caret
            color="secondary"
            size="xs"
            className="mb-2 d-inline-block d-md-none"
          >
            Menu
          </DropdownToggle>
          <Collapse
            isOpen={displayOptionsIsOpen}
            className="d-md-block"
            id="displayOptions"
          >
            <div className="d-block d-md-inline-block pt-1">
              <SortDropdown
                sortMode={sortMode}
                sortProducts={(type) => sortProducts(type)}
              />

              <CurrncyDropdown
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={(_currency) => {
                  setSelectedCurrency(_currency);
                }}
              />
            </div>
            <div className="float-md-right pt-1">
              <span className="text-muted text-small mr-1">{`${startIndex}-${endIndex} of ${totalItemCount} `}</span>

              <PageSizeDropdown
                selectedPageSize={selectedPageSize}
                pageSizes={pageSizes}
                changePageSize={(size) => changePageSize(size)}
              />
            </div>
          </Collapse>
        </div>
        <Separator className="mb-5" />
      </Colxx>
    </Row>
  );
};

export default ProductHeading;
