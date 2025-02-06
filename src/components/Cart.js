import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container p-4 rounded-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
        <h1 className="text-2xl font-bold mb-4 text-center">Shopping Cart</h1>
        {cart.length === 0 ? (
          <p className="text-center">No items in cart.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="p-2 my-2 flex justify-between">
                <p>{item.title}</p>
                <p>${item.price}</p>
                <button 
                  onClick={() => removeFromCart(item.id)} 
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
            <p className="text-lg font-bold text-center">
              Total: ${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
