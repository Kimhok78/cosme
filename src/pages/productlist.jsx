import React, { useContext } from "react";
import { PRODUCTS } from "../data/Products";
import { StoreContext } from "../store/StoreContext";
import { ShoppingCart } from "lucide-react";
import Products from "./Product";

export default function ProductList() {
  const { addToCart } = useContext(StoreContext);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((Products) => (
          <div
            key={Products.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col justify-between"
          >
            <img
              src={Products.image}
              alt={Products.name}
              className="rounded-xl object-cover w-full h-48 mb-4"
            />
            <div>
              <h3 className="font-semibold text-lg mb-1">{Products.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{Products.short}</p>
              <p className="font-bold text-blue-700 mb-3">${Products.price}</p>
            </div>
            <button
              onClick={() => addToCart(Products)}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg flex items-center justify-center gap-2 transition"
            >
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
