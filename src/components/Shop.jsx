import { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

export default function Shop({ data }) {
  const [cartItems, setCartItems] = useState([]);

  function addItemToCart(product) {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.name === product.name);

      if (existingItem) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, count: product.count }
            : item
        );
      } else {
        return [...prev, product];
      }
    });
  }

  function removeItemFromCart(productName) {
    setCartItems((prev) => prev.filter((item) => item.name !== productName));
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 gap-y-6 bg-[#FCF8F6]">
      <Products data={data} addToCart={addItemToCart} removeFromCart={removeItemFromCart} />
      <Cart cartItems={cartItems} removeFromCart={removeItemFromCart} />
    </div>
  );
}
