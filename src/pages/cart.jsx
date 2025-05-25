
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/cart/cartSlice.jsx';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveToCart = (id) => {
        dispatch(removeItem(id));
      };

  return (
    <div className="max-h-fit p-6 bg-gradient-to-b from-white to-black">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Welcome to Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto h-full">
        {/* Left Side - Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.length === 0 ? (
           <div className="flex flex-col justify-center items-center min-h-[60vh]">
           <p className="text-white text-center text-xl">Your cart is empty 🛒</p>
           <a href="/shop" className="mt-4 text-blue-500 underline hover:text-blue-800">Browse Products</a>
         </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow flex justify-between items-center gap-4 w-full h-auto"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-70 h-70 object-cover rounded-lg"
                />
                <div className="flex flex-col items-center justify-between gap-2 p-4">
                  <div className="text-m text-semibold text-gray-600 text-justify flex justify-start items-start mb-10">
                    <p>{item.description}</p>
                  </div>
                  <div className="flex items-center justify-between w-full h-full">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-500 ">₹{item.price}</p>
                  </div>
                  <div className="flex items-center justify-between w-full h-full">
                    <span className="font-semibold">Qty: {item.quantity}</span>
                    <button onClick={()=>handleRemoveToCart(item.id)} className="cursor-pointer text-red-500 hover:underline">Remove</button>
                  </div>

                  {/* Order Summary for each product */}
                  <div className="mt-4 w-full bg-gray-100 p-4 rounded-xl">
                    <h3 className="font-semibold text-lg">Order Summary</h3>
                    <div className="flex justify-between mb-2 text-gray-700">
                      <span>Subtotal</span>
                      <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-4 text-gray-500">
                      <span>Shipping</span>
                      <span>{item.shipping}</span>
                    </div>
                    <hr className="mb-4" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>₹{((item.price * item.quantity)+item.shipping).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
