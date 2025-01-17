import React, { useEffect, useState } from "react";
import closeIcon from "assets/images/icon-close.svg";
import transparentBg from "assets/images/bg-transparent.png";
import greenBg from "assets/images/bg-green.png";
import viewButtonImg from "assets/images/img-view-detail.png";
import noImg from "assets/images/no-image.png";
import { useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import Select from "./Select";
import { GET_Products } from "services/product";
import StarRating from "./StarRating";
import Wishlist from "./Wishlist";
import ProductBadge from "./ProductBadge";
import StockStatus from "./StockStatus";
import "../global.css";

function ProductList(props) {
  const { getFiltersMenu } = props;
  const navigate = useNavigate();
  const [activeProductIds, setActiveProductIds] = useState([]);
  const [oldProducts, setOldProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("terbaru");
  const [filters, setFilters] = useState({
    sort: "terbaru",
    instock: false,
    rating: false,
  });

  useEffect(() => {
    getListProducts();
  }, []);

  useEffect(() => {
    sortData();
  }, [filters]);

  useEffect(() => {
    const combineFilters = { ...filters, ...getFiltersMenu };
    console.log("combineFilters", combineFilters);
    setFilters(combineFilters);
  }, [getFiltersMenu]);

  const getListProducts = () => {
    setLoading(true);
    GET_Products()
      .then((res) => {
        setOldProducts(res.data);
        sortData(res.data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleRedirect = (id) => {
    navigate("/detail/" + id);
  };

  const toggleActive = (id) => {
    if (activeProductIds.includes(id)) {
      setActiveProductIds(
        activeProductIds.filter((productId) => productId !== id)
      );
    } else {
      setActiveProductIds([...activeProductIds, id]);
    }
  };

  const handleChange = (value) => {
    console.log("e", value);
    setSort(value);
    setFilters({
      ...filters,
      sort: value,
    });
  };

  const sortData = (data) => {
    setLoading(true);
    const productList = data ? data : oldProducts;
    let sorted = [...productList];

    if (filters.instock) {
      sorted = sorted.filter((product) => product.attributes.stock > 0);
    }

    if (filters.rating) {
      sorted = sorted.filter((product) => product.attributes.rating >= 4);
    }

    if (filters.sort === "terbaru") {
      sorted = sorted.sort((a, b) => b.attributes.id - a.attributes.id);
    } else if (filters.sort === "ulasan") {
      sorted = sorted.sort((a, b) => b.attributes.rating - a.attributes.rating);
    }

    console.log(sorted);
    setProducts(sorted);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="col-span-9 relative">
      <div className="flex justify-between 2md:items-center items-baseline">
        <h2 className="text-medium font-bold text-black-primary">
          Product List
        </h2>
        <Select onChangeTrigger={handleChange} />
      </div>
      <div className="border border-gray-primary border-solid"></div>
      <div
        className={`${
          loading ? "opacity-20 cursor-not-allowed pointer-events-none" : ""
        } grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[21.5px]`}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className={`${
              activeProductIds.includes(product.id) ? "active" : ""
            } bg-white border border-gray-primary border-solid rounded-lg relative overflow-hidden`}
            onClick={() => toggleActive(product.id)}
          >
            {!product.attributes.stock > 0 && (
              <img
                src={transparentBg}
                className="absolute left-0 top-0 w-full"
                alt="transparent"
              />
            )}
            {activeProductIds.includes(product.id) &&
              product.attributes.stock > 0 && (
                <img
                  src={greenBg}
                  className="absolute left-0 top-0 w-full opacity-90"
                  alt="transparent"
                />
              )}
            <div className="p-6">
              <div className="cursor-pointer grid">
                <StockStatus
                  stock={product.attributes.stock}
                  styles={
                    activeProductIds.includes(product.id) &&
                    product.attributes.stock > 0
                      ? "text-white z-10"
                      : ""
                  }
                />

                <ProductBadge product={product} />

                <img
                  src={product.attributes.images[0]}
                  alt={product.attributes.name}
                  className="xl:h-60 h-48 mx-auto my-3"
                  onError={(e) => {
                    e.target.src = noImg;
                  }}
                />
                <h3 className="xl:text-semi-medium text-sm text-black-primary mt-4 mb-1">
                  {activeProductIds.includes(product.id) &&
                  product.attributes.stock > 0 ? (
                    <span className="h-16"></span>
                  ) : (
                    product.attributes.name
                  )}
                </h3>
              </div>

              {activeProductIds.includes(product.id) &&
                product.attributes.stock > 0 && (
                  <>
                    <h3 className="absolute text-semi-medium text-white z-10 inset-0 flex items-center left-6">
                      {product.attributes.name}
                    </h3>
                    <div class="wrapper-box">
                      <img
                        src={viewButtonImg}
                        className="button-view"
                        alt="view"
                        onClick={() => handleRedirect(product.id)}
                      />
                    </div>
                  </>
                )}

              <div className="flex justify-between items-center">
                {!(
                  activeProductIds.includes(product.id) &&
                  product.attributes.stock > 0
                ) ? (
                  <div className="grid gap-1">
                    <div className="flex gap-2 items-center">
                      <img src={closeIcon} alt="close" />
                      <p className="text-green-secondary text-sm">
                        {product.attributes.points} points
                      </p>
                    </div>
                    <div className="grid xl:flex gap-2 items-center">
                      <StarRating rating={product.attributes.rating} />
                      <p className="text-gray-third text-xs">
                        {product.attributes.numOfReviews} reviews
                      </p>
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
                <Wishlist product={product} setProducts={setProducts} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <span className="absolute inset-0 flex top-96 justify-center">
          <BeatLoader size={20} color={"#404040"} />
        </span>
      )}
    </section>
  );
}

export default ProductList;
