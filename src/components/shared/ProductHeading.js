import React, { useState } from "react";
import {
  Row,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Collapse,
} from "reactstrap";
import { Colxx, Separator } from "components/common/Colxx";
import { SortModes } from "assets/constants/DefaultValues";
import { findSortModeName } from "helpers/functions";

const ProductHeading = ({
  changePageSize,
  selectedPageSize,
  totalItemCount,
  startIndex,
  endIndex,
  pageSizes,
  sortProducts,
  sortMode,
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
          ></DropdownToggle>
          <Collapse
            isOpen={displayOptionsIsOpen}
            className="d-md-block"
            id="displayOptions"
          >
            <div className="d-block d-md-inline-block pt-1">
              <UncontrolledDropdown className="mr-1 float-md-left btn-group mb-1">
                <DropdownToggle caret color="primary" size="xs">
                  Sort By Price: {findSortModeName(sortMode)}
                </DropdownToggle>
                <DropdownMenu end>
                  {SortModes.map((item) => (
                    <DropdownItem
                      key={item.type}
                      onClick={() => {
                        sortProducts(item.type);
                      }}
                    >
                      {item.fullName}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <div className="float-md-right pt-1">
              <span className="text-muted text-small mr-1">{`${startIndex}-${endIndex} of ${totalItemCount} `}</span>
              <UncontrolledDropdown className="d-inline-block">
                <DropdownToggle caret color="outline-dark" size="xs">
                  {selectedPageSize}
                </DropdownToggle>
                <DropdownMenu end>
                  {pageSizes.map((size, index) => {
                    return (
                      <DropdownItem
                        key={index}
                        onClick={() => changePageSize(size)}
                      >
                        {size}
                      </DropdownItem>
                    );
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
          </Collapse>
        </div>
        <Separator className="mb-5" />
      </Colxx>
    </Row>
  );
};

export default ProductHeading;
