import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/' className='btn'>
        Home
      </Link>
      <Link to='/about' className='btn'>
        About
      </Link>
      <Link to='/products' className='btn'>
        Products
      </Link>
    </nav>
  )
}

export default Navbar
