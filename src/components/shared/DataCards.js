import React, { useState } from "react";
import { Row, Card, CardBody, CardSubtitle, CardText, Badge } from "reactstrap";
import { Colxx } from "components/common/Colxx";
import NoImg from "assets/images/NoImg.jpg";
const DataCards = ({ product }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    product.filename ? product.filename : NoImg
  );

  const onError = () => {
    if (!imgLoaded) {
      setImgSrc(NoImg);
      setImgLoaded(true);
    }
  };

  return (
    <Colxx cla sm="6" lg="4" xl="3" className="mb-3 " key={product.id}>
      <Card className="card--shadow">
        <CardBody>
          <Row>
            <div className="img--card">
              <Row className="justify-content-center">
                <Colxx lg={8} md={6} sm={6} xs={6} xxs={8}>
                  <img
                    className="image--default--background"
                    alt={product.name}
                    src={imgSrc}
                    onError={() => onError()}
                    loading="lazy"
                    width={"100%"}
                  />
                </Colxx>
              </Row>
              <Badge
                color="primary"
                pill
                className="position-absolute badge-top-left"
              >
                {product.brand_name}
              </Badge>
              <div className="img--card__container">
                <CardSubtitle className="card--name__height">
                  {" "}
                  Product Name: {product.product_name}
                </CardSubtitle>
                <CardText className="text-muted text-small mb-0 font-weight-light">
                  Price: {product.base_price}{" "}
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
