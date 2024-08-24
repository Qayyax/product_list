import iconRemove from "../assets/icon-remove-item.svg"
export default function CartItem({ name, count, price, removeFromCart }) {
  const total = price * count
  return (
    <div
      className="flex justify-between items-center border-b-[1px] border-[#F5EEEC] 
      py-4"
    >
      <div
        className="flex flex-col gap-y-2"
      >
        <h3
          className="text-[#260F08] font-semibold text-[0.875em]"
        >{name}</h3>
        <div
          className="flex gap-x-2"
        >
          <p
            className="text-[#C73B0F] font-semibold text-[0.875em]"
          >
            {count}x 
          </p>

          <p
            className="text-[#87635A] text-[0.875em]"
          >
            @ ${price}
          </p>
          <p
            className="text-[#87635A] font-semibold text-[0.875em]"
          >
            ${total.toFixed(2)}
          </p>
        </div>
      </div>
      {/*close button goes here*/}
      <button
        className="border border-[#AD8A85] rounded-full p-1"
        onClick={removeFromCart}
      >
        <img src={iconRemove} alt="remove item from cart icon" />
      </button>

    </div>
  )
}
