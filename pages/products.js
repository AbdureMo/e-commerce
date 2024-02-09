import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Products() {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <Layout>
      <Link className="btn-primary" href={"/products/new"}>
        Add new products
      </Link>

      <table className="basic mt-2">
        <thead>
          <tr>
            <td>Product name</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>
                <Link
                  className="btn-primary"
                  href={"/products/edit/" + product._id}
                >
                  <FaRegEdit size={18} />
                  Edit
                </Link>
                <Link
                  className="btn-red"
                  href={"/products/delete/" + product._id}
                >
                  <MdDelete size={18} />
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}
