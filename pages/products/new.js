import Layout from '@/components/Layout';
import React from 'react'

function NewProduct() {
  return (
    <Layout>
      <h1>New Product</h1>
      <label>Product Name</label>
      <input type="text" placeholder="product name" />
      <label>Description</label>
      <textarea placeholder="description"></textarea>
      <label>Price (in USD)</label>
      <input type="text" placeholder="price" />
    </Layout>
  );
}

export default NewProduct;