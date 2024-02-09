import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [goToProducts, setGoToProducts] = useState(false);

  const router = useRouter();

  async function createProduct(ev) {
    ev.preventDefault();
    const data = { title, description, price };
    //  if (_id) {
    //    // update the product
    //    await axios.post("/api/products", { ...data, _id });
    //  } else {
    //    // create a new product
    //    await axios.post("/api/products", data);
    //  }
       await axios.post("/api/products", data);

    setGoToProducts(true);
  }
  
   if (goToProducts) {
     router.push("/products");
   }

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>New Product</h1>

        <label>Product Name</label>
        <input
          type="text"
          placeholder="product name"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
        />

        <label>Description</label>
        <textarea
          placeholder="description"
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        ></textarea>
        <label>Price (in USD)</label>
        <input
          type="number"
          placeholder="price"
          value={price}
          onChange={(ev) => setPrice(ev.target.value)}
        />

        <button className="btn-primary" type="submit">
          Save
        </button>
      </form>
    </Layout>
  );
}

export default NewProduct;
