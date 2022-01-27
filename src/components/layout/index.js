import AppRoutes from "routes/Routes";
import TopNav from "components/common/TopNav";
import { Row, Card, CardBody } from "reactstrap";
import { Colxx } from "components/common/Colxx";
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
                    <AppRoutes />
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
