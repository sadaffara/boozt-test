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
            <CardImg top alt={product.title} src={product.img} />
          </NavLink>
          <Badge
            color={product.statusColor}
            pill
            className="position-absolute badge-top-left"
          >
            {product.status}
          </Badge>
        </div>
        <CardBody>
          <Row>
            <Colxx xxs="2"></Colxx>
            <Colxx xxs="10" className="mb-3">
              <CardSubtitle>{product.title}</CardSubtitle>
              <CardText className="text-muted text-small mb-0 font-weight-light">
                {product.date}
              </CardText>
            </Colxx>
          </Row>
        </CardBody>
      </Card>
    </Colxx>
  );
};

export default React.memo(DataCards);
