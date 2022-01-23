import React from "react";
import {
  Row,
  Card,
  CardBody,
  CardSubtitle,
  CardImg,
  CardText,
  Badge,
} from "reactstrap";
import { Colxx } from "components/common/Colxx";

const DataCards = ({ product }) => {
  return (
    <Colxx cla sm="6" lg="4" xl="3" className="mb-3 " key={product.id}>
      <Card>
        <div className="position-relative img--card__padding">
          <div className=" w-50 w-sm-100">
            <Row className="justify-content-center">
              <CardImg top alt={product.name} src={product.image} />
            </Row>
          </div>
          <Badge
            color="primary"
            pill
            className="position-absolute badge-top-left"
          >
            {product.brand}
          </Badge>
        </div>

        <CardBody>
          <Row>
            <Colxx xxs="10" className="mb-3">
              <CardSubtitle> Product Name: {product.name}</CardSubtitle>
              <CardText className="text-muted text-small mb-0 font-weight-light">
                Price: {product.price} <span className="price--color"> $</span>
              </CardText>
              <CardText className="text-muted fw text-small mb-0 font-weight-light">
                #{product.index + 1}
              </CardText>
            </Colxx>
          </Row>
        </CardBody>
      </Card>
    </Colxx>
  );
};

export default React.memo(DataCards);
