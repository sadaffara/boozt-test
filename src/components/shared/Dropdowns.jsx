import { DropdownMenu, DropdownItem, DropdownToggle } from "reactstrap";
import { SortModes } from "assets/constants/DefaultValues";
import { findSortModeName } from "helpers/functions";

export const SortDropdown = ({ sortMode, sortProducts }) => {
  return (
    <>
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
              {SortModes[key].name}
            </DropdownItem>
          );
        })}
      </DropdownMenu>
    </>
  );
};

export const PageSizeDropdown = ({
  selectedPageSize,
  changePageSize,
  pageSizes,
}) => {
  return (
    <>
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
    </>
  );
};
