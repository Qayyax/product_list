import carbonIcon from "../assets/icon-carbon-neutral.svg"
import emptyCart from "../assets/illustration-empty-cart.svg"
import CartItem from "./CartItem"

export default function Cart({ cartItems, removeFromCart }) {
  const totalUnits = cartItems.reduce((sum, item) => sum + item.count, 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.count), 0);

  const showCart = (
    <>
      <div>
        {
          cartItems.map((item, key) => (
            <CartItem
              key={key}
              name={item.name}
              count={item.count}
              price={item.price}
              removeFromCart={() => removeFromCart(item.name)}
            />
          ))
        }
      </div>

      <div
        className="flex justify-between items-center"
      >
        <p
          className="text-[#260F08] text-[0.875em]"
        >
          Order Total</p>
        <h2
          className="text-[#260F08] font-bold text-[1.5em]"
        >
          ${totalAmount.toFixed(2)}</h2>
      </div>

      <div
        className="flex gap-x-2 text-[#260F08] text-[0.875em] py-4 px-6 bg-[#FCF8F6] rounded-lg"
      >
        <img src={carbonIcon} alt="carbon neutral icon" />
        <p>
          This is a <span className="font-semibold">carbon-neutral</span> delivery
        </p>
      </div>

      <button
        className="bg-[#C73B0F] rounded-3xl text-white p-4"
      >
        Confirm Order
      </button>
    </>
  )

  const cartEmpty = (
    <div
      className="flex flex-col items-center justify-center"
    >
      <img src={emptyCart} alt="Empty Cart" />
      <p
        className="text-[#87635A] font-semibold text-[0.875em]"
      >Your added items will appear here</p>
    </div>
  )

  return (
    <div
      className="flex flex-col p-6 bg-white rounded-lg gap-y-6 w-full lg:w-[384px] lg:whitespace-nowrap"
    >
      <h1
        className="text-[#C73B0F] font-bold text-[1.5em]"
      >Your Cart ({totalUnits})</h1>
      {totalUnits < 1 ? (
        cartEmpty
      ) : (
        showCart
      )}
    </div>
  )
}
