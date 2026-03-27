import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0)

  const products = [
    { id: 1, name: 'Keyboard', price: 1499 },
    { id: 2, name: 'Headphones', price: 2499 },
    { id: 3, name: 'Webcam', price: 1999 },
    { id: 4, name: 'Monitor', price: 8999 }
  ]

  const addToCart = () => {
    setCartCount((previousCount) => previousCount + 1)
  }

  useEffect(() => {
    console.log(`Cart updated. Current count: ${cartCount}`)
  }, [cartCount])

  return (
    <main className="container">
      <h1>Dynamic Product Cart</h1>
      <p className="cart-count">Cart Count: {cartCount}</p>

      <section className="products-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <p>₹{product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
