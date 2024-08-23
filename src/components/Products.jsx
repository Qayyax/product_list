import ProductList from "./ProductList"

export default function Products({ data }) {
  return (
    <div
      className="flex flex-col items-center justify-center p-2 gap-y-6"
    >
      {data.map((item, key) => (
        <ProductList
          key={key}
          image={item.image}
          name={item.name}
          category={item.category}
          price={item.price}
        />
      ))}
    </div>
  )
}
