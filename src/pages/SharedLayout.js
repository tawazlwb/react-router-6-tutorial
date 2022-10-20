import { Outlet } from 'react-router-dom'
import StyledNavbar from '../components/StyledNavbar'

export const SharedLayout = () => {
  return (
    <>
      <StyledNavbar />
      <Outlet />
    </>
  )
}

export default SharedLayout
