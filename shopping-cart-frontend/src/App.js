import React, {useState} from "react"
import ProductList from "./components/ProductList"
import Cart from "./components/Cart"
import axios from "axios"

const App = () => {
  const [cartId, setCartId] = useState(1)

  const addToCart = (productId) => {
    axios
      .post(`http://localhost:8080/cart/${cartId}/add/${productId}`)
      .then((response) => {
        console.log("Product added to cart", response.data)
      })
      .catch((error) => {
        console.error(
          "There was an error adding the product to the cart!",
          error
        )
      })
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ProductList addToCart={addToCart} />
      <Cart cartId={cartId} />
    </div>
  )
}

export default App
