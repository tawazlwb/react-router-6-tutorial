import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, About, Products, Error } from './pages'
import SharedLayout from './pages/SharedLayout'

function App() {
  return (
    <BrowserRouter>
      {/* <nav>our navbar</nav> */}
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='products' element={<Products />} />
          <Route path='*' element={<Error />} />
        </Route>
        {/* <Route path='dashboard' element={<div>dashboard</div>}>
          <Route path='stats' element={<div>stats</div>} />
        </Route> */}
      </Routes>
      {/* <footer>our footer</footer> */}
    </BrowserRouter>
  )
}

export default App
