import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Colxx } from "components/common/Colxx";

const Pagination = ({
  totalPage = 0,
  currentPage = 1,
  numberLimit = 5,
  lastIsActive = true,
  firstIsActive = true,
  onChangePage,
}) => {
  let startPoint = 1;
  let endPoint = numberLimit;

  if (numberLimit > totalPage) {
    startPoint = 1;
    endPoint = totalPage;
  } else if (currentPage <= parseInt(numberLimit / 2, 10)) {
    startPoint = 1;
    endPoint = numberLimit;
  } else if (currentPage + parseInt(numberLimit / 2, 10) <= totalPage) {
    startPoint = currentPage - parseInt(numberLimit / 2, 10);
    endPoint = currentPage + parseInt(numberLimit / 2, 10);
  } else {
    startPoint = totalPage - (numberLimit - 1);
    endPoint = totalPage;
  }
  startPoint = startPoint === 0 ? 1 : startPoint;
  const points = [];
  for (let i = startPoint; i <= endPoint; i += 1) {
    points.push(i);
  }

  const firstPageButtonClassName = currentPage <= 1 ? "disabled" : "";
  const lastPageButtonClassName = currentPage >= totalPage ? "disabled" : "";
  const prevPageButtonClassName = currentPage <= 1 ? "disabled" : "";
  const nextPageButtonClassName = currentPage >= totalPage ? "disabled" : "";
  return totalPage > 1 ? (
    <Colxx xxs="12" className="mt-3 mb-3 cursor--pointer">
      <Nav className="pagination justify-content-center">
        {firstIsActive && (
          <NavItem className={`page-item ${firstPageButtonClassName}`}>
            <NavLink
              className="page-link first c-pointer"
              onClick={() => onChangePage(1)}
            >
              <span className="arrow left" />
              <span className="arrow left" />
            </NavLink>
          </NavItem>
        )}
        <NavItem className={`page-item ${prevPageButtonClassName}`}>
          <NavLink
            className="page-link prev c-pointer"
            onClick={() => onChangePage(currentPage - 1)}
          >
            <span className="arrow left" />
          </NavLink>
        </NavItem>
        {points.map((i) => {
          return (
            <NavItem
              key={i}
              className={`page-item ${currentPage === i && "active"}`}
            >
              <NavLink
                className="page-link c-pointer"
                onClick={() => onChangePage(i)}
              >
                {i}
              </NavLink>
            </NavItem>
          );
        })}
        <NavItem className={`page-item ${nextPageButtonClassName}`}>
          <NavLink
            className="page-link next c-pointer"
            onClick={() => onChangePage(currentPage + 1)}
          >
            <span className="arrow right" />
          </NavLink>
        </NavItem>
        {lastIsActive && (
          <NavItem className={`page-item ${lastPageButtonClassName}`}>
            <NavLink
              className="page-link last c-pointer"
              onClick={() => onChangePage(totalPage)}
            >
              <span className="arrow right" />
              <span className="arrow right" />
            </NavLink>
          </NavItem>
        )}
      </Nav>
    </Colxx>
  ) : (
    <Colxx xxs="12" className="mt-2" />
  );
};

export default Pagination;
