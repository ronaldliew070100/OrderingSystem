import "./App.css"
import Header from "./pages/Header/Header"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Recipes from "./pages/Recipes/Recipes"

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/shop" element={<Shop />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </div>
  )
}

export default App
