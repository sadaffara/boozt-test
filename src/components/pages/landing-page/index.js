import { Button, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ModalHeader>How would you like to view the product list?</ModalHeader>
      <ModalBody>
        <p>I implemented the product list in 2 different ways:</p>
        <p>1. Using the statis product_list.json file that was sent to me</p>
        <p>
          2. Using a mock API to fetch products from a server and creating a
          list with the respone
        </p>
        <p>
          You can choose which view you would like to see, and you can also
          change your desired view from the navbar again later.
        </p>
      </ModalBody>
      <ModalFooter>
        <Button color="primary">Dynamic List</Button>{" "}
        <Button
          onClick={() => {
            navigate("/static-list");
          }}
          color="secondary"
        >
          Static JSON
        </Button>
      </ModalFooter>
    </div>
  );
};

export default LandingPage;
