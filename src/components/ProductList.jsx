import { useState, useEffect } from "react";
import AddToCart from "./AddToCart";

export default function ProductList({
  image,
  name,
  category,
  price,
  addToCart,
  removeFromCart
}) {

  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 0) {
      addToCart({
        price, name, count
      });
    } else {
      removeFromCart(name)
    }
  }, [count]);


  return (
    <div
      className="flex flex-col gap-y-10"
    >
      <div
        className="product-image relative"
      >
        {/* Mobile image */}
        <img
          src={image.mobile}
          alt="Product image"
          className="block md:hidden lg:hidden rounded-xl w-[327px]"
        />

        {/* Tablet image */}
        <img
          src={image.tablet}
          alt="Tablet View"
          className="hidden md:block lg:hidden w-full rounded-xl"
        />

        {/* Desktop image */}
        <img
          src={image.desktop}
          alt="Desktop View"
          className="hidden lg:block rounded-xl"
        />
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
        >
          <AddToCart count={count} setCount={setCount} />
        </div>
      </div>
      <div>
        <p>{category}</p>
        <h2>{name}</h2>
        <p>${price.toFixed(2)}</p>
      </div>
    </div>
  )
}

