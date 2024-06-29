import React, {useEffect, useState} from "react"
import axios from "axios"

const Cart = ({cartId}) => {
  const [cart, setCart] = useState({products: []})
  const [loading, setLoading] = useState(true) // Add a loading state
  const [error, setError] = useState(null) // Add an error state

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cart/${cartId}`)
      .then((response) => {
        setCart(response.data)
        setLoading(false) // Set loading to false when data is fetched
      })
      .catch((error) => {
        setError(error)
        setLoading(false) // Set loading to false even if there is an error
        console.error("There was an error fetching the cart!", error)
      })
  }, [cartId])

  if (loading) {
    return <div>Loading...</div> // Show loading message while fetching data
  }

  if (error) {
    return <div>There was an error fetching the cart!</div> // Show error message if there is an error
  }

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
