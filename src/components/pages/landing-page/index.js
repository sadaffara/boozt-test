import { Row, Card, CardBody } from "reactstrap";
import { Colxx } from "components/common/Colxx";
const LandingPage = () => {
  return (
    <div>
      <Row className="justify-content-center">
        <Colxx>
          <Card>
            <CardBody>Content</CardBody>
          </Card>
        </Colxx>
      </Row>
    </div>
  );
};

export default LandingPage;
