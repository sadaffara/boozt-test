import AppRoutes from "routes/Routes";
import TopNav from "components/common/TopNav";
import { Row, Card, CardBody } from "reactstrap";
import { Colxx } from "components/common/Colxx";
import Home from "components/pages/product-list-static";
function MainLayout() {
  return (
    <div className="background--color">
      <TopNav />
      <div className="mt-0">
        <div className="content--pos mt-3">
          <div className="mr-4 ml-4">
            <Row className="justify-content-center">
              <Colxx>
                <Card>
                  <CardBody>
                    <Home />
                  </CardBody>
                </Card>
              </Colxx>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
