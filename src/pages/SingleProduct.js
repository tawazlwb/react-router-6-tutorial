import { Link, useParams } from 'react-router-dom'
import products from '../data.js'

export const SingleProduct = () => {
  const { productId } = useParams()
  const product = products.find((p) => p.id === productId)
  const { name, image } = product

  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/products'>back to products</Link>
    </section>
  )
}

export default SingleProduct
