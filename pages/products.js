import Layout from '@/components/Layout'
import Link from 'next/link';
import React from 'react'

function Products() {
  return (
    <Layout>
      <Link className="btn-primary" href={"/products/new"}>
        Add new products
      </Link>

      
    </Layout>
  );
}

export default Products
