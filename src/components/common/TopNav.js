import BooztLogo from "assets/images/BooztLogo.png";
import { Row } from "reactstrap";
import { Colxx } from "./Colxx";
import GitHubLogo from "assets/images/GitHubLogo.png";
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
            <img
              className="mr-1 cursor--pointer mb-2"
              src={GitHubLogo}
              alt="GitHub"
              width={"26px"}
            />
            <span>Boozt Test</span>
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
