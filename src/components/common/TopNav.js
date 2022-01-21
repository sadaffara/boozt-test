import { Link } from "react-router-dom";
import BooztLogo from "assets/images/BooztLogo.png";
import { Row, Col } from "reactstrap";
import { Colxx } from "./Colxx";
function TopNav() {
  return (
    <div class="topnav">
      <Row>
        <Col lg={2} md={2}>
          <span className="top-title">Boozt Test</span>
        </Col>
        <Col lg={9} md={9}>
          <Link to={"https://www.booztgroup.com/"}>
            <img className="logo" src={BooztLogo} alt="Boozt" />
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default TopNav;
