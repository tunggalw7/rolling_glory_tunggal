import React from "react";
import hotBadge from "assets/images/icon-badge-hot.png";
import bestBadge from "assets/images/icon-badge-best.png";
import newBadge from "assets/images/icon-badge-new.png";

const ProductBadge = ({ product }) => {
  const renderBadge = () => {
    if (
      product.attributes.rating >= 4 &&
      product.attributes.numOfReviews > 25
    ) {
      return (
        <img
          src={product.attributes.isNew ? hotBadge : bestBadge}
          alt={product.attributes.isNew ? "hot" : "best"}
          className="absolute top-0 right-0 h-20"
        />
      );
    }
    if (product.attributes.isNew) {
      return (
        <img src={newBadge} alt="new" className="absolute top-0 right-0 h-20" />
      );
    }
    return null;
  };

  return renderBadge();
};

export default ProductBadge;
