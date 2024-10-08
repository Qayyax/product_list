import cartIcon from '../assets/icon-add-to-cart.svg'
import cartPlus from '../assets/icon-increment-quantity.svg'
import cartMinus from '../assets/icon-decrement-quantity.svg'

export default function AddToCart({ count, setCount }) {

  const cartBtn = (
    <button
      className='flex items-center justify-center gap-x-2 px-4 rounded-3xl bg-white border border-[#AD8A85] w-[160px]
      p-3 hover:border-[#C73B0F]  hover:text-[#C73B0F]'
      onClick={() => {
        setCount(1)
      }}
    >
      <img
        src={cartIcon}
        alt="add to cart icon"
      />
      <p
        className='text-[#260F08] text-[14px] font-semibold whitespace-nowrap'
      >Add to Cart</p>
    </button>
  )

  const cartAddItemBtn = (
    <div
      className='flex items-center justify-between bg-[#C73B0F] gap-x-10 rounded-3xl p-3 text-white w-[160px]'
    >
      {btn(cartMinus, "remove item from cart button", minusCount)}
      <span>{count}</span>
      {btn(cartPlus, "add item to cart button", addCount)}
    </div>
  )

  // helper function for increment and decrement button
  function btn(icon, alt, func) {
    return (
      <button
        className='flex items-center justify-center border border-white rounded-full w-[17.5px] h-[17.5px]'
        onClick={func}
      >
        <img
          src={icon}
          alt={alt}
          className='hover:fill-[#C73B0F]'
        />
      </button>
    )
  }

  function addCount() {
    setCount(prev => prev + 1)
  }

  function minusCount() {
    setCount(prev => {
      if (prev > 0) {
        return prev - 1;
      }
    })
  }

  return (
    <>
      {count > 0 ? cartAddItemBtn : cartBtn}
    </>
  )
}


