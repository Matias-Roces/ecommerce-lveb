import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.scss'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
