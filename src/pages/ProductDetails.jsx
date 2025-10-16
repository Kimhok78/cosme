// src/pages/ProductDetails.jsx
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../store/StoreContext";
import { PRODUCTS } from "../data/Products";
import Products from "./Product";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(StoreContext);
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    const found = PRODUCTS.find((p) => String(p.id) === String(id));
    setProduct(found || null);
  }, [id]);

  if (!product) return <div className="p-6">Product not found.</div>;

  const handleAdd = async () => {
    if (product.stock !== undefined && qty > product.stock) {
      alert(`Only ${product.stock} available`);
      return;
    }
    setAdding(true);
    await new Promise((res) => setTimeout(res, 300));
    addToCart(product, qty);
    setAdding(false);
    // optional feedback:
    // toast("Added to cart");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded"
      />
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="mt-2 text-gray-600">{Products.desc}</p>
        <div className="mt-4 text-xl font-semibold">
          ${product.price.toFixed(2)}
        </div>

        <div className="mt-4 flex items-center gap-3">
          <label className="flex items-center gap-2">
            Qty:
            <input
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
              className="w-20 p-1 border rounded"
            />
          </label>
          <button
            onClick={handleAdd}
            disabled={
              adding || (product.stock !== undefined && product.stock <= 0)
            }
            className="px-4 py-2 rounded bg-green-600 text-white disabled:opacity-50"
          >
            {adding
              ? "Adding..."
              : product.stock === 0
              ? "Sold out"
              : "Add to cart"}
          </button>
        </div>

        {product.stock !== undefined && (
          <div className="mt-2 text-sm text-gray-500">
            {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
          </div>
        )}
      </div>
    </div>
  );
}
