import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/Products";
import { StoreContext } from "../store/StoreContext";
import AddToCartButton from "../components/AddToCartButton";

function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={Products.name} className="rounded mb-3" />
      <h3 className="font-semibold">{Products.name}</h3>
      <p className="text-sm text-gray-500">${Products.price}</p>
      <AddToCartButton product={Products} />
    </div>
  );
}


export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(StoreContext);

  useEffect(() => {
    const timer = setTimeout(() => setProducts(PRODUCTS), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
        Products
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            {/* Product Image */}
            <div className="relative w-full h-56 bg-white rounded-xl overflow-hidden flex items-center justify-center">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />

              {/* Optional badge (like “PM”) */}
              <div className="absolute top-3 right-3 bg-white/80 text-gray-900 text-xs font-semibold px-2 py-1 rounded-md shadow-sm">
                ⭐⭐⭐⭐⭐
              </div>
            </div>

            {/* Product Info */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-semibold text-lg text-gray-800 mb-1">
                {p.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{p.short}</p>

              <div className="mt-auto flex items-center justify-between">
                <Link
                  to={`/product/${p.id}`}
                  className="text-indigo-600 font-medium hover:underline"
                >
                  View
                </Link>

                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-800">
                    ${p.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(p)}
                    className="py-1.5 px-4 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
