import React, { useState } from "react";
import NoImg from "assets/images/NoImg.jpg";

const ImageCard = ({ product }) => {
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
    <img
      className="image--default--background"
      alt={product.name}
      src={imgSrc}
      onError={() => onError()}
      loading="lazy"
      width={"100%"}
    />
  );
};

export default ImageCard;
