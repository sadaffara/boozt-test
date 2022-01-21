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
import { NavLink } from "react-router-dom";
import { Colxx } from "components/common/Colxx";

const DataCards = ({ product }) => {
  return (
    <Colxx sm="6" lg="4" xl="3" className="mb-3" key={product.id}>
      <Card>
        <div className="position-relative">
          <NavLink to={`?p=${product.id}`} className="w-40 w-sm-100">
            <CardImg top alt={product.name} src={product.image} />
          </NavLink>
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
            <Colxx xxs="2"></Colxx>
            <Colxx xxs="10" className="mb-3">
              <CardSubtitle>Name: {product.name}</CardSubtitle>
              <CardText className="text-muted text-small mb-0 font-weight-light">
                Price: {product.price} $
              </CardText>
            </Colxx>
          </Row>
        </CardBody>
      </Card>
    </Colxx>
  );
};

export default React.memo(DataCards);
