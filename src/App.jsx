import data from "./data.json"
import Shop from "./components/Shop"

function App() {

  return (
    <>
      <Shop data={data} />
    </>
  )
}

export default App
