import { useState } from "react";
import BooztLogo from "assets/images/BooztLogo.png";
import {
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Colxx } from "./Colxx";
import { useNavigate } from "react-router-dom";

const TopNav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className=" topnav">
      <Row>
        <Colxx lg={2} md={2} sm={4} xs={4} xxs={6}>
          <span className="top-title">Boozt Test</span>
        </Colxx>
        <Colxx className="mb-2" lg={8} md={8} sm={4} xs={4} xxs={6}>
          <Dropdown
            group
            isOpen={dropdownOpen}
            size="sm"
            toggle={() => setDropdownOpen(!dropdownOpen)}
          >
            <DropdownToggle caret>View</DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                onClick={() => {
                  navigate("/");
                }}
                header
              >
                {" "}
                Dynamic View
              </DropdownItem>
              <DropdownItem disabled>Static View</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Colxx>
        <Colxx lg={2} md={2} sm={4} xs={4} xxs={12}>
          <img className="logo" src={BooztLogo} alt="Boozt" />
        </Colxx>
      </Row>
    </div>
  );
};

export default TopNav;
