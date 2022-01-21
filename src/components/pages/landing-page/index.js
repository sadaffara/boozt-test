import {
  Row,
  Card,
  CardBody,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Colxx } from "components/common/Colxx";
const LandingPage = () => {
  return (
    <div>
      <Row className="justify-content-center">
        <Colxx>
          <Card>
            <CardBody>
              <ModalHeader>
                How would you like to view the product list?
              </ModalHeader>
              <ModalBody>
                <p>I implemented the product list in 2 different ways:</p>
                <p>
                  1. Using the statis product_list.json file that was sent to me
                </p>
                <p>
                  2. Using a mock API to fetch products from a server and
                  creating a list with the respone
                </p>
                <p>
                  You can choose which view you would like to see, and you can
                  also change your desired view from the navbar again later.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="primary">Dynamic List</Button>{" "}
                <Button color="secondary">Static JSON</Button>
              </ModalFooter>
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </div>
  );
};

export default LandingPage;
