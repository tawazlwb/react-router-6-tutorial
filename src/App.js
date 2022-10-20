import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>home page</div>}></Route>
        <Route path='testing' element={<h2>testing</h2>}></Route>
        <Route path='about' element={<div>about</div>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
