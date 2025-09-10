import React, { useState } from 'react'
import { useCart } from '../../CartContext/CartContext'
import { Link } from 'react-router-dom'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen overflow-x-hidden py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1a120b] via-[#2a1e14] to-[#3e2b1d]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 animate-fade-in-down">
          <span className="font-dancingscript block text-5xl sm:text-6xl md:text-7xl mb-2 bg-gradient-to-r from-amber-100 to-amber-400 bg-clip-text text-transparent">
            Your Cart
          </span>
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center animate-fade-in">
            <p className="text-amber-100/80 text-xl mb-4">Your cart is empty</p>
            <Link
              to="/menu"
              className="transition-all duration-300 text-amber-100 inline-flex items-center gap-2 hover:gap-3 hover:bg-amber-800/50 bg-amber-900/40 px-6 py-2 rounded-full font-cinzel text-sm uppercase"
            >
              Browse All Items
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cartItems.map((item, index) => {
              // normalize fields here so CartPage never breaks
              const itemName = item.name || item.title || "Unnamed";
              const itemPrice = typeof item.price === "string"
                ? item.price.replace("₹", "")
                : item.price;
              const itemImage = item.image || "/images/placeholder.png";

              return (
                <div
                  key={item.id || index}
                  className="group bg-amber-900/20 p-4 rounded-2xl border-4 border-dashed border-amber-500 backdrop-blur-sm flex flex-col items-center gap-4 transition-all duration-300 hover:border-solid hover:shadow-xl hover:shadow-amber-900/10 transform hover:-translate-y-1 animate-fade-in"
                >
                  {/* Image */}
                  <div
                    className="w-24 h-24 flex-shrink-0 cursor-pointer relative overflow-hidden rounded-lg transition-transform duration-300"
                    onClick={() => setSelectedImage(itemImage)}
                  >
                    <img
                      src={itemImage}
                      alt={itemName}
                      className="w-full h-full object-contain"
                      onError={(e) => (e.target.src = "/images/placeholder.png")}
                    />
                  </div>

                  {/* Name + Price */}
                  <div className="w-full text-center">
                    <h3 className="text-xl font-dancingscript text-amber-100">
                      {itemName}
                    </h3>
                    <p className="text-amber-100/80 font-cinzel mt-1">
                      ₹{itemPrice}
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="w-8 h-8 rounded-full bg-amber-900/40 flex items-center justify-center transition-all duration-200 active:scale-95"
                    >
                      <FaMinus className="w-4 h-4 text-amber-100" />
                    </button>
                    <span className="w-8 text-center text-amber-100 font-cinzel">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-amber-900/40 flex items-center justify-center transition-all duration-200 active:scale-95"
                    >
                      <FaPlus className="w-4 h-4 text-amber-100" />
                    </button>
                  </div>

                  <div  className='flex items-center justify-between w-full'>
                    <button onClick={()=>removeFromCart(item.id)}
                      className='bg-amber-900/40 px-3 py-1 rounded-full font-cinzel text-xs uppercase transition-all duration-300 hover:bg-amber-800/50 flex items-center gap-1 active:scale-95'>
                        <FaTrash className='w-4 h-4 text-amber-100'/>
                        <span className='text-amber-100'>Remove</span>
                    </button>
                    <p className='text-sm font-dancingscript text-amber-300'>
                     ₹{item.price*item.quantity}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
