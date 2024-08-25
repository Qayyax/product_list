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

  const activeProduct = count > 0 ? "border-2 border-[#C73B0F]" : ""

  return (
    <div
      className="flex flex-col gap-y-10"
    >
      <div
        className={`product-image relative rounded-xl ${activeProduct}`}
      >
        {/* Mobile image */}
        <img
          src={image.mobile}
          alt="Product image"
          className="block sm:hidden lg:hidden rounded-xl w-[327px]"
        />

        {/* Tablet image */}
        <img
          src={image.tablet}
          alt="Tablet View"
          className="hidden sm:block lg:hidden rounded-xl w-[213px]"
        />

        {/* Desktop image */}
        <img
          src={image.desktop}
          alt="Desktop View"
          className="hidden lg:block rounded-xl w-[250px]"
        />
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"
        >
          <AddToCart count={count} setCount={setCount} />
        </div>
      </div>
      <div>
        <p
          className="text-[#87635A] text-[0.875em]"
        >{category}</p>
        <h2
          className="font-semibold text-[#260F08]"
        >{name}</h2>
        <p
          className="text-[#C73B0F] font-semibold"
        >${price.toFixed(2)}</p>
      </div>
    </div>
  )
}

