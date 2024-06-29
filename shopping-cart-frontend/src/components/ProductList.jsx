import React, {useEffect, useState} from "react"
import axios from "axios"

const ProductList = ({addToCart}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8080/products")
      .then((response) => {
        setProducts(response.data)
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error)
      })
  }, [])

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
