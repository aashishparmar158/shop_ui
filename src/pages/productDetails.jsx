import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
//import { selectAllProducts } from "../features/products/productSlice.jsx";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <div className="text-center mt-10 text-xl">Product not found 🚫</div>;
  }
 

    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    };

  return (
    <div className="p-6 md:p-10 lg:p-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Product Image */}
      <div className="w-full h-200 flex justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-150 rounded-2xl shadow-lg object-contain mix-blend-multiply"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-6 flex flex-col justify-center ">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg text-gray-500">{product.brand}</p>

        {/* Price & Discount */}
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-semibold text-blue-600">${product.price}</span>
          {product.discount > 0 && (
            <span className="text-sm bg-red-100 text-red-600 px-2 py-1 rounded-md">
              {product.discount}% OFF
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="text-yellow-500 font-medium">⭐ {product.rating} / 5</div>

        {/* Description */}
        <p className="text-gray-700">{product.description}</p>

        {/* Category */}
        <div>
            <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>
  
          {/* Colors */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Colors:</span>
            {product.colors.map((color, idx) => (
              <div
                key={idx}
                className="w-6 h-6 rounded-full border border-gray-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
  
          {/* Stock */}
          <p className={product.stock > 0 ? "text-green-600" : "text-red-500"}>
            {product.stock > 0 ? `In stock: ${product.stock}` : "Out of stock"}
          </p>
  
          {/* Add to Cart Button (dummy for now) */}
          <button
            onClick={()=>handleAddToCart(product)}
            className="mt-4 px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
          <button
            className=" px-6 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition"
          >
            Buy Now
          </button>
        </div>
    </div>
  );
};

export default ProductDetails;
