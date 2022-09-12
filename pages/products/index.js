import React from 'react'
import Link from "next/link";

const Products = ({ productId = 100 }) => {

  return (
    <div>
        <h1>Products</h1>
          <Link href="/">
            <a>Home</a>
          </Link>
          {" "}
          <Link href="products/1">
            <a><h1>Product 1</h1></a>
          </Link>
          {" "}
          <Link href="products/2">
            <a><h1>Product 2</h1></a>
          </Link>
          {" "}
          <Link href="products/3">
            <a><h1>Product 3</h1></a>
          </Link>
          <Link href={`product/${productId}`}>
            <a><h1>Product {productId}</h1></a>
          </Link>
    </div>
  )
}

export default Products