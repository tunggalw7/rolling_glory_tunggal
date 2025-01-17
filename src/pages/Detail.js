import React, { useEffect, useState } from "react";
import Header from "component/Header";
import Footer from "component/Footer";
import pointIcon from "assets/images/icon-point.svg";
import { GET_Detail_Product } from "services/product";
import { useNavigate, useParams } from "react-router-dom";
import ProductBadge from "component/ProductBadge";
import StarRating from "component/StarRating";
import StockStatus from "component/StockStatus";
import Wishlist from "component/Wishlist";
import Counter from "component/Counter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bgContent from "assets/images/bg-content.png";
import { BeatLoader } from "react-spinners";

function Detail() {
  const [product, setProduct] = useState({});
  const [amount, setAmount] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getDetailProduct();
  }, []);

  const getDetailProduct = () => {
    setLoading(true);
    GET_Detail_Product(id)
      .then((res) => {
        setProduct(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleAddToCart = () => {
    if (amount > product.attributes.stock) {
      toast.error("Jumlah melebihi stock barang!!");
    } else {
      toast.success("Barang sudah ditambahkan!!");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col max-w-screen-2xl m-auto">
      <Header />
      <div
        className="absolute inset-0 bottom-0 top-auto h-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgContent})` }}
      />

      <div
        className={`${
          loading ? "opacity-20 cursor-not-allowed pointer-events-none" : ""
        } min-h-screen bg-gray-100 py-4 xs:px-32 px-0`}
      >
        {/* Breadcrumb */}
        <div className="text-sm text-black-secondary mb-4 cursor-pointer mx-8">
          <span onClick={() => navigate("/")}>List product &gt; </span>
          <span className="font-medium">{product?.attributes?.name}</span>
        </div>

        {/* Product Section */}
        <div className="max-w-6xl mx-auto bg-white rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="flex justify-center relative">
            <img
              src={product?.attributes?.images[0]}
              alt={product?.attributes?.name}
              className="h-3/4 my-8"
            />
            {product?.attributes?.rating && <ProductBadge product={product} />}
          </div>

          {/* Product Info */}
          <div className="mt-6">
            <h1 className="text-2xl text-black-secondary font-bold mb-2">
              {product?.attributes?.name}
            </h1>
            <div className="flex gap-4 items-center">
              <StarRating rating={product?.attributes?.rating} />
              <p className="text-gray-third text-sm">
                {product?.attributes?.numOfReviews} reviews
              </p>
            </div>
            <p className="text-green-600 text-xl font-semibold my-4 flex items-center gap-3">
              <div className="flex gap-1 items-center">
                <img src={pointIcon} alt="new" />
                <p className="text-green-secondary text-2xl font-bold">
                  {product?.attributes?.points} points
                </p>
              </div>
              <StockStatus stock={product?.attributes?.stock} />
            </p>

            <div
              className="text-black-secondary text-sm leading-7 space-y-1 mb-6"
              dangerouslySetInnerHTML={{ __html: product?.attributes?.info }}
            />
            <p className="text-gray-third text-sm mb-4">Jumlah</p>
            <div className="grid items-center mb-4">
              <Counter setCounter={setAmount} />
              <div className="flex m-0 gap-4 pt-8">
                {product.attributes && (
                  <Wishlist
                    product={product}
                    setProducts={setProduct}
                    isDetail
                  />
                )}
                <button className="px-4 py-2 bg-green-third flex items-center justify-center text-white text-sm w-[150px] h-[35px] rounded-full">
                  Redeem
                </button>
                <button
                  onClick={handleAddToCart}
                  className="px-4 py-2 rounded-full text-sm flex items-center justify-center border border-green-secondary border-solid text-green-secondary bg-white w-[150px] h-[35px]"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="max-w-6xl mx-auto bg-white rounded-lg p-6 mt-6">
          <h2 className="text-semi-medium text-green-secondary mb-2">
            Info produk
          </h2>

          <div className="relative w-full mb-2">
            <div className="w-full border border-gray-thick"></div>
            <div className="absolute top-0 left-0 w-20 border-t-2 border-green-secondary"></div>
          </div>
          <h2 className="text-xl py-8 text-green-third">Rincian</h2>
          <div
            className="text-black-secondary text-sm leading-10"
            dangerouslySetInnerHTML={{
              __html: product?.attributes?.description,
            }}
          />
        </div>
      </div>

      {loading && (
        <span className="absolute inset-0 flex top-96 justify-center">
          <BeatLoader size={20} color={"#404040"} />
        </span>
      )}
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default Detail;
