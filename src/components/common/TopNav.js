import BooztLogo from "assets/images/BooztLogo.png";
import { Row } from "reactstrap";
import { Colxx } from "./Colxx";

const TopNav = () => {
  return (
    <div className=" topnav">
      <Row>
        <Colxx lg={10} md={10} sm={8} xs={8} xxs={6}>
          <span
            onClick={() => {
              window.open("https://github.com/sadaffara/boozt-test", "_blank");
            }}
            className="top-title cursor--pointer"
          >
            Boozt Test
          </span>
        </Colxx>
        <Colxx lg={2} md={2} sm={4} xs={4} xxs={6}>
          <img
            onClick={() => {
              window.open("https://booztgroup.com", "_blank");
            }}
            className="logo cursor--pointer"
            src={BooztLogo}
            alt="Boozt"
          />
        </Colxx>
      </Row>
    </div>
  );
};

export default TopNav;
