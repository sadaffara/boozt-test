import React from "react";
import { Row, Card, CardBody, CardSubtitle, CardText, Badge } from "reactstrap";
import { Colxx } from "components/common/Colxx";

const DataCards = ({ product }) => {
  return (
    <Colxx cla sm="6" lg="4" xl="3" className="mb-3 " key={product.id}>
      <Card className="card--shadow">
        <CardBody>
          <Row>
            <div className="img--card">
              <Row className="justify-content-center">
                <Colxx lg={8} md={6} sm={6} xs={6} xxs={8}>
                  <img alt={product.name} src={product.image} width={"100%"} />
                </Colxx>
              </Row>
              <Badge
                color="primary"
                pill
                className="position-absolute badge-top-left"
              >
                {product.brand}
              </Badge>
              <div className="img--card__container">
                <CardSubtitle> Product Name: {product.name}</CardSubtitle>
                <CardText className="text-muted text-small mb-0 font-weight-light">
                  Price: {product.price}{" "}
                  <span className="price--color"> $</span>
                </CardText>
                <CardText className="text-muted fw text-small mb-0 font-weight-light">
                  <span className="text--gold">#{product.index + 1}</span>
                </CardText>
              </div>
            </div>
          </Row>
        </CardBody>
      </Card>
    </Colxx>
  );
};

export default React.memo(DataCards);
