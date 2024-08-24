import ProductList from "./ProductList";

export default function Products({ data, addToCart, removeFromCart }) {
  return (
    <div className="">
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
  );
}
