import React, { useContext, useState } from "react";
import { StoreContext } from "../store/StoreContext";
import { ShoppingCart, Check } from "lucide-react";
import Products from "../pages/Product";

export default function AddToCartButton({ product }) {
    const { addToCart } = useContext(StoreContext);
    const [added, setAdded] = useState(false);

    if (!product) return null;

    const { id, name, price, image } = Products;

    const handleAdd = () => {
        addToCart(id);
        setAdded(true);
        setTimeout(() => setAdded(false), 1200);
    };

    const formattedPrice =
        typeof price === "number"
            ? new Intl.NumberFormat(undefined, { style: "currency", currency: "USD" }).format(price)
            : price;

    return (
        <div className="flex items-center gap-4">
            <img
                src={image}
                alt={name}
                className="w-20 h-20 rounded object-cover border border-gray-200"
            />
            <div className="flex-1 min-w-0">
                <div className="text-sm font-medium truncate">{name}</div>
                <div className="text-sm text-gray-600">{formattedPrice}</div>
            </div>

            <button
                onClick={handleAdd}
                aria-label={`Add ${name} to cart`}
                className={`flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium transition-all hover:bg-gray-800 hover:text-white ${
                    added ? "bg-green-500 text-white" : ""
                }`}
            >
                {added ? (
                    <>
                        <Check size={16} />
                        Added
                    </>
                ) : (
                    <>
                        <ShoppingCart size={16} />
                        Add to Cart
                    </>
                )}
            </button>
        </div>
    );
}
