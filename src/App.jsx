import data from "./data.json"
import Products from "./components/Products"

function App() {

  return (
    <>
      <Products data={data} />
    </>
  )
}

export default App
