import { useState } from 'react'
import './App.css'

const PRODUCTS = [
  { id: 1, name: 'Wireless Headphones', price: 6639, category: 'Electronics', rating: 4.5, image: '🎧' },
  { id: 2, name: 'Smart Watch', price: 16599, category: 'Electronics', rating: 4.2, image: '⌚' },
  { id: 3, name: 'Running Shoes', price: 7469, category: 'Fashion', rating: 4.7, image: '👟' },
  { id: 4, name: 'Backpack', price: 4979, category: 'Fashion', rating: 4.3, image: '🎒' },
  { id: 5, name: 'Coffee Maker', price: 4149, category: 'Home', rating: 4.4, image: '☕' },
  { id: 6, name: 'LED Desk Lamp', price: 2904, category: 'Home', rating: 4.6, image: '💡' },
  { id: 7, name: 'Phone Case', price: 1659, category: 'Accessories', rating: 4.1, image: '📱' },
  { id: 8, name: 'USB-C Cable', price: 1244, category: 'Accessories', rating: 4.8, image: '🔌' },
  { id: 9, name: 'Portable Speaker', price: 8299, category: 'Electronics', rating: 4.5, image: '🔊' },
  { id: 10, name: 'Sunglasses', price: 10789, category: 'Fashion', rating: 4.4, image: '😎' },
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [priceRange, setPriceRange] = useState(16600)
  const [cartCount, setCartCount] = useState(0)

  const categories = ['All', ...new Set(PRODUCTS.map((p) => p.category))]

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory
    const matchesPrice = product.price <= priceRange
    return matchesSearch && matchesCategory && matchesPrice
  })

  function addToCart(productName) {
    setCartCount((prev) => prev + 1)
    alert(`✅ "${productName}" added to cart!`)
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <h1 className="logo">🛍️ ShopHub</h1>
          <div className="cart-icon">
            🛒 Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
        </div>
      </header>

      <div className="main-layout">
        {/* Sidebar Filters */}
        <aside className="sidebar">
          <div className="filter-section">
            <h3>Filters</h3>

            {/* Search */}
            <div className="filter-group">
              <label>Search</label>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Category Filter */}
            <div className="filter-group">
              <label>Category</label>
              <div className="category-buttons">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`category-btn ${
                      selectedCategory === cat ? 'active' : ''
                    }`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="filter-group">
              <label>
                Price Range: ₹{priceRange}
              </label>
              <input
                type="range"
                min="0"
                max="16600"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="price-slider"
              />
              <div className="price-labels">
                <span>₹0</span>
                <span>₹16600</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Grid */}
        <main className="products-section">
          <div className="products-header">
            <h2>
              {selectedCategory === 'All'
                ? 'All Products'
                : selectedCategory}
            </h2>
            <p className="products-count">
              {filteredProducts.length} products found
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image">{product.image}</div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-category">{product.category}</p>
                    <div className="product-rating">
                      ⭐ {product.rating} / 5
                    </div>
                    <div className="product-footer">
                      <span className="product-price">₹{product.price}</span>
                      <button
                        className="btn-add-cart"
                        onClick={() => addToCart(product.name)}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-products">
              <p>😔 No products found</p>
              <p className="no-products-subtext">
                Try adjusting your filters
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App
