import React, { useState } from "react";
import {
  Row,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Collapse,
  Badge,
} from "reactstrap";
import { Colxx, Separator } from "components/common/Colxx";

const ListPageHeading = ({
  changePageSize,
  selectedPageSize,
  totalItemCount,
  startIndex,
  endIndex,
  pageSizes,
  fetchData,
  sorted,
  setSorted,
}) => {
  const [displayOptionsIsOpen, setDisplayOptionsIsOpen] = useState(false);

  return (
    <Row>
      <Colxx xxs="12">
        {console.log("sorted", sorted)}
        <div className="mb-2">
          <h3>Product List</h3>
        </div>
        <Separator />
        <div className="mb-2">
          <Button
            color="empty"
            className="pt-0 pl-0 d-inline-block d-md-none"
            onClick={() => setDisplayOptionsIsOpen(!displayOptionsIsOpen)}
          >
            <DropdownToggle caret color="secondary" size="xs"></DropdownToggle>
          </Button>
          <Collapse
            isOpen={displayOptionsIsOpen}
            className="d-md-block"
            id="displayOptions"
          >
            <div className="d-block d-md-inline-block pt-1">
              <UncontrolledDropdown className="mr-1 float-md-left btn-group mb-1">
                <DropdownToggle caret color="primary" size="xs">
                  Sort By Price: {sorted}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    onClick={() => {
                      setSorted("Asc");
                      fetchData(true, true);
                    }}
                  >
                    Ascending
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setSorted("Desc");
                      fetchData(true, false);
                    }}
                  >
                    Descending
                  </DropdownItem>
                  <DropdownItem
                    onClick={() => {
                      setSorted("All");
                      fetchData(false, true);
                    }}
                  >
                    All Results
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <div className="float-md-right pt-1">
              <span className="text-muted text-small mr-1">{`${startIndex}-${endIndex} of ${totalItemCount} `}</span>
              <UncontrolledDropdown className="d-inline-block">
                <DropdownToggle caret color="outline-dark" size="xs">
                  {selectedPageSize}
                </DropdownToggle>
                <DropdownMenu right>
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

export default ListPageHeading;
