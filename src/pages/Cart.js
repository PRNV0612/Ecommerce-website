// src/pages/CartPage.js
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartPage = () => {
  const { cart, removeFromCart, increaseAmount, decreaseAmount, total, clearCart } = useContext(CartContext);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover" />
                <span className="flex-1">{item.title}</span>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => decreaseAmount(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.amount}</span>
                  <button
                    onClick={() => increaseAmount(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
                <span>${(item.price * item.amount).toFixed(2)}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right font-semibold text-lg">
            <p>Total: ${total.toFixed(2)}</p>
            <button
              onClick={clearCart}
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
