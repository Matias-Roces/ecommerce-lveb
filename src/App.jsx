import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Cart from "./components/Cart"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.scss'
import Spacer from "./components/Spacer"
import ItemListContainer from "./components/itemListContainer"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Spacer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Cart" element={<Cart />} />
          <Route exact path="/ItemDetailContainer/:id" element={<ItemDetailContainer />} />
          <Route exact path="/category/:categoria" element={<ItemListContainer />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
