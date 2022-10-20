import { Link } from 'react-router-dom'

export const About = () => {
  return (
    <section className='section'>
      <h2>About</h2>
      <Link to='/' className='btn'>
        Home
      </Link>
    </section>
  )
}

export default About
