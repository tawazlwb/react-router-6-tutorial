import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Products } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='products' element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
