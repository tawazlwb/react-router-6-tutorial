import { NavLink } from 'react-router-dom'

export const StyledNavbar = () => {
  const btnActiveClass = ({ isActive }) => {
    return `link${isActive ? ' active' : ''}`
  }

  return (
    <nav className='navbar'>
      <NavLink to='/' className={btnActiveClass}>
        Home
      </NavLink>
      <NavLink to='/about' className={btnActiveClass}>
        About
      </NavLink>
      <NavLink to='/products' className={btnActiveClass}>
        Products
      </NavLink>
      <NavLink to='/login' className={btnActiveClass}>
        Login
      </NavLink>
    </nav>
  )
}

export default StyledNavbar
