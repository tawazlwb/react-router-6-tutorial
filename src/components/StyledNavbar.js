import { NavLink } from 'react-router-dom'

export const StyledNavbar = () => {
  const btnActiveStyle = ({ isActive }) => {
    return { color: isActive ? 'red' : 'grey' }
  }

  const btnActiveClass = ({ isActive }) => {
    return `link${isActive ? ' active' : ''}`
  }

  return (
    <nav className='navbar'>
      {/* <NavLink to='/' style={btnActiveStyle}> */}
      <NavLink to='/' className={btnActiveClass}>
        Home
      </NavLink>
      {/* <NavLink to='/about' style={btnActiveStyle}> */}
      <NavLink to='/about' className={btnActiveClass}>
        About
      </NavLink>
      {/* <NavLink to='/products' style={btnActiveStyle}> */}
      <NavLink to='/products' className={btnActiveClass}>
        Products
      </NavLink>
    </nav>
  )
}

export default StyledNavbar
