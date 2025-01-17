import React, { useState } from "react";
import Header from "component/Header";
import Footer from "component/Footer";
import ProductList from "component/ProductList";
import bgContent from "assets/images/bg-content.png";

function Home() {
  const [filters, setFilters] = useState({
    instock: false,
    rating: false,
  });

  return (
    <div className="relative min-h-screen max-w-screen-2xl m-auto flex flex-col">
      <Header />
      <div
        className="absolute inset-0 bottom-0 top-auto h-1/2 bg-contain bg-center"
        style={{ backgroundImage: `url(${bgContent})` }}
      />

      <main className="flex-1 xl:container mx-auto p-4 w-full">
        <div className="2md:grid 2md:grid-cols-12 xl:gap-14">
          <aside className="col-span-3 bg-gray-100 pb-8 2md:px-4 rounded">
            <h2 className="text-medium my-3 font-bold text-black-primary">
              Filter
            </h2>
            <div className="border border-gray-primary border-solid"></div>
            <div className="mt-[21.5px] border border-gray-primary border-solid rounded-md px-4 py-5">
              <label className="flex justify-between items-center text-small text-gray-secondary">
                Stock Tersedia
                <input
                  type="checkbox"
                  checked={filters.instock}
                  className="h-4 w-4"
                  onChange={() =>
                    setFilters({
                      ...filters,
                      instock: !filters.instock,
                    })
                  }
                />
              </label>
              <label className="flex justify-between mt-[31px] text-small text-gray-secondary items-center">
                Rating 4 ke atas
                <input
                  type="checkbox"
                  checked={filters.rating}
                  className="h-4 w-4"
                  onChange={() =>
                    setFilters({
                      ...filters,
                      rating: !filters.rating,
                    })
                  }
                />
              </label>
            </div>
          </aside>

          <ProductList getFiltersMenu={filters} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Home;
