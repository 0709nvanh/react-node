import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readProduct } from "../../../../apis/product";
import { BsStar, BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";

const MainDetail = () => {
  const [product, setProduct] = useState();
  const { slug } = useParams();

  useEffect(() => {
    const getSlug = async () => {
      const { data } = await readProduct(slug);
      // console.log('slug', data);
      setProduct(data);
    };
    getSlug();
  }, [slug]);
  return (
    <div className="flex justify-between">
      <div className="image-product w-full">
        <img
          className="w-[475px] object-cover m-0"
          src="https://cdn.shopify.com/s/files/1/0595/7291/2305/products/3_8d5afff0-730c-4465-ade9-0bbd751d961c_1000x.png?v=1634293863"
          alt=""
        />
      </div>
      <div className="info-product w-full">
        <div className="name flex items-center">
          <h1 className="text-[28px] w-full">{product?.name}</h1>
          <div className="bg-white border-2 h-[44px] rounded-full hover:bg-black hover:text-white p-3 transition-all duration-300">
            <BsStar />
          </div>
        </div>
        <div className="price text-[24px] text-[#5e5d5d] py-4">
          ${product?.price}.00
        </div>
        <div className="description pb-4">
          <h2 className="font-semibold py-3">Description</h2>
          <p>{product?.description}</p>
        </div>
        <div className="py-5">
          <div className="flex flex-wrap items-end">
            <div className="mr-5 w-32">
              <div className="quantity h-[46px] flex border border-color-border rounded">
                <button className="quantity-input__button flex items-center justify-center h-[46px] w-[46px]">
                  <FaMinus />
                </button>
                <input
                  type="text"
                  value={1}
                  className="w-10 text-center flex-grow shrink appearance-none"
                />
                <button className="quantity-input__button flex items-center justify-center h-[46px] w-[46px]">
                  <BsPlusLg />
                </button>
              </div>
            </div>
            <button className="flex-grow shrink not-change relative border border-color-border rounded h-[45px] hover:bg-black hover:text-white transition-all duration-300 ease-in-out">
              <span className="uppercase">add to cart</span>
            </button>
          </div>
        </div>
        <div className="h-[123px] bg-[#F8F8F8] p-4">
          <div className="text p-4">
            <p className="items-center">
              <img
                src="https://cdn.shopify.com/s/files/1/0595/7291/2305/files/Bitmap_360x_94aa583e-a410-4343-bcc1-b4a3505bc673_357x.jpg?v=1629655138 mx-auto"
                alt=""
              />
            </p>
            <h4 className="text-center font-semibold py-3">Guarantee safe & secure checkout</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDetail;
