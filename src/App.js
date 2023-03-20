import "./style/App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Menu from "./pages/Menu"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/restaurant-app" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          {/* '*' wale route ko hamesha last me nahi, beech me likha to '*' k niche wale koi execute nahi honge */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
