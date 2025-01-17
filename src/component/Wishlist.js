import React from "react";
import loveIcon from "assets/images/icon-love-bg.svg";
import loveOutlineIcon from "assets/images/icon-love-outline.svg";
import { UPDATE_Product } from "services/product";

const Wishlist = ({ product, setProducts, isDetail = false }) => {
  const handleWishlist = (id) => {
    UPDATE_Product(id)
      .then((res) => {
        if (isDetail) {
          setProducts({
            ...product,
            attributes: {
              ...product.attributes,
              isWishlist: !product.attributes.isWishlist,
            },
          });
        } else {
          setProducts((prevProducts) =>
            prevProducts.map((product) =>
              product.id === id
                ? {
                    ...product,
                    attributes: {
                      ...product.attributes,
                      isWishlist: !product.attributes.isWishlist,
                    },
                  }
                : product
            )
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <img
      src={product.attributes.isWishlist ? loveIcon : loveOutlineIcon}
      alt="wishlist"
      className="hover:scale-110 cursor-pointer z-10"
      onClick={() => handleWishlist(product.id)}
    />
  );
};

export default Wishlist;
