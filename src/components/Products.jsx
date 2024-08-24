import ProductList from "./ProductList";

export default function Products({ data, addToCart }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 gap-y-6 bg-[#FCF8F6]">
      {data.map((item, key) => (
        <ProductList
          key={key}
          image={item.image}
          name={item.name}
          category={item.category}
          price={item.price}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}
