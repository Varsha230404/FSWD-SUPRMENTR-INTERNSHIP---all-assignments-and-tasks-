import { useCart } from './context/CartContext'
import { getProducts } from './services/productService'
import './App.css'

const ProductList = () => {
  const products = getProducts()
  const { addToCart } = useCart()

  return (
    <section className="products">
      <h2>Product List</h2>
      <div className="grid">
        {products.map((product) => (
          <article key={product.id} className="card">
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </article>
        ))}
      </div>
    </section>
  )
}

const CartList = () => {
  const { cartItems, removeFromCart } = useCart()

  return (
    <section className="cart">
      <h2>Cart Items</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={`${item.id}-${index}`}>
              <span>
                {item.name} - ₹{item.price}
              </span>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

function App() {
  const { cartItems } = useCart()

  return (
    <main className="wrapper">
      <nav className="navbar">
        <h1>Mini E-Commerce</h1>
        <p>Cart Count: {cartItems.length}</p>
      </nav>

      <ProductList />
      <CartList />
    </main>
  )
}

export default App
