import React from "react";
import productsData from "../Data/product";

export default function Plates() {
  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Some of our production are displayed below
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            We have been working with areca leaf plates production on this
            project. Here are some of the production that are available with us.
            For queries Please contact us via "Contact Us" page
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {productsData.map((product) => {
            const { image, price, category, name, id } = product;
            return (
              <div className="xl:w-1/4 md:w-1/2 p-4" key={id}>
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-contain object-center mb-6"
                    src={image}
                    alt={name}
                  />
                  <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                    {price}.00
                  </h3>
                  <h2 className="text-lg text-white font-medium title-font mb-4">
                    {name}
                  </h2>
                  <p className="leading-relaxed text-base">
                    This plate falls under {category} category. The price tag is
                    for per 1000 pscs
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
