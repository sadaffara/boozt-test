import React from "react";

import { Row, Card, CardBody, CardSubtitle, CardText, Badge } from "reactstrap";
import { Colxx } from "components/common/Colxx";
import ImageCard from "./ImageCard";
import { convertCurrency } from "helpers/functions";

const DataCards = ({ product, selectedCurrency }) => {
  return (
    <Colxx cla sm="6" lg="4" xl="3" className="mb-3 " key={product.id}>
      <Card className="card--shadow">
        <CardBody>
          <Row>
            <div className="img--card">
              <Row className="justify-content-center">
                <Colxx lg={8} md={6} sm={6} xs={6} xxs={8}>
                  <ImageCard product={product} />
                </Colxx>
              </Row>
              {product.brand_name ? (
                <Badge
                  color="primary"
                  pill
                  className="position-absolute badge-top-left"
                >
                  {product.brand_name}
                </Badge>
              ) : null}
              <div className="img--card__container">
                <CardSubtitle className="card--name__height mt-1">
                  {" "}
                  {product.product_name ? product.product_name : "No Name"}
                </CardSubtitle>
                {product.base_price > product.actual_price ? (
                  <CardText className="text-muted text-small mb-0 font-weight-light">
                    Price:{" "}
                    <del>
                      {convertCurrency(
                        selectedCurrency.code,
                        product.base_price
                      ).price
                        ? convertCurrency(
                            selectedCurrency.code,
                            product.base_price
                          ).price
                        : "--"}{" "}
                      <span className="price--color">
                        {" "}
                        {selectedCurrency.symbol}
                      </span>
                    </del>
                  </CardText>
                ) : null}
                <CardText className="text-muted text-small mb-0 font-weight-light ">
                  Sale Price:{" "}
                  {convertCurrency(selectedCurrency.code, product.actual_price)
                    .price
                    ? convertCurrency(
                        selectedCurrency.code,
                        product.actual_price
                      ).price
                    : "--"}{" "}
                  <span className="price--color">
                    {" "}
                    {selectedCurrency.symbol}
                  </span>
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
