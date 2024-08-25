import ProductList from "./ProductList";

export default function Products({ data, addToCart, removeFromCart }) {
  return (
    <div
      className="flex flex-col items-start "
    >
      <h1
        className="text-[#260F08] font-bold text-[40px]"
      >Desserts</h1>
      <div className="flex flex-col items-center justify-center gap-y-6 w-full 
      sm:flex-row sm:flex-wrap sm:gap-x-6">
        {data.map((item, key) => (
          <ProductList
            key={key}
            image={item.image}
            name={item.name}
            category={item.category}
            price={item.price}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </div>
    </div>
  );
}
