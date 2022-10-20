import { Link } from 'react-router-dom'
import products from '../data.js'

export const Products = () => {
  return (
    <>
      <section className='section'>
        <div className='products'>
          {products.map((product) => {
            return (
              <article key={product.id}>
                <h5>{product.name}</h5>
                <Link to={`/products/${product.id}`} style={{ color: 'grey' }}>
                  more info
                </Link>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Products
