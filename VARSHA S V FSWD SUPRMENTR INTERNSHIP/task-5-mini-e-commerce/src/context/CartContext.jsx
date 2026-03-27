import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((previousItems) => [...previousItems, product])
  }

  const removeFromCart = (itemIndex) => {
    setCartItems((previousItems) =>
      previousItems.filter((_, index) => index !== itemIndex)
    )
  }

  const value = useMemo(
    () => ({ cartItems, addToCart, removeFromCart }),
    [cartItems]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
