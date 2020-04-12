import React from "react";
import { ProductList } from "./ProductList";
import { ProductForm } from "./ProductForm";

export const Products = () => {

  return <React.Fragment>
    <ProductForm />

    <ProductList />
  </React.Fragment>
}
