import {
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { SortModes, Currencies } from "assets/constants/DefaultValues";
import { findSortModeName } from "helpers/functions";

export const SortDropdown = ({ sortMode, sortProducts }) => {
  return (
    <UncontrolledDropdown className="mr-4 float-md-left btn-group mb-2">
      <DropdownToggle caret color="primary" size="xs">
        Sort By Price: {findSortModeName(sortMode)}
      </DropdownToggle>
      <DropdownMenu end>
        {Object.keys(SortModes).map((key) => {
          return (
            <DropdownItem
              key={key}
              onClick={() => sortProducts(SortModes[key].type)}
            >
              {SortModes[key].fullName}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export const PageSizeDropdown = ({
  selectedPageSize,
  changePageSize,
  pageSizes,
}) => {
  return (
    <UncontrolledDropdown className="d-inline-block">
      <DropdownToggle caret color="outline-dark" size="xs">
        {selectedPageSize}
      </DropdownToggle>
      <DropdownMenu end>
        {Object.keys(pageSizes).map((key) => {
          return (
            <DropdownItem
              key={key}
              onClick={() => changePageSize(pageSizes[key])}
            >
              {pageSizes[key]}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export const CurrncyDropdown = ({ setSelectedCurrency, selectedCurrency }) => {
  return (
    <UncontrolledDropdown className="mr-1 float-md-left btn-group">
      <DropdownToggle caret color="outline-dark" size="xs">
        Currency: {selectedCurrency.code} {selectedCurrency.symbol}
      </DropdownToggle>
      <DropdownMenu start={"true"}>
        {Object.keys(Currencies).map((key) => {
          return (
            <DropdownItem
              key={key}
              onClick={() => {
                setSelectedCurrency(Currencies[key]);
              }}
            >
              {Currencies[key].name}{" "}
              <span className="price--color">{Currencies[key].symbol}</span>
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
