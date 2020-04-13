import React from "react";
import { ProductList } from "./ProductList";
import { ProductForm } from "./ProductForm";
import styled from "styled-components";

const ProductsWrapper = styled.section`
  width: 100%;
  border-color: black;
  border-width: 3px;
  border-style: dotted;

  padding: .7rem;
`;

export const Products = () => {
  return <ProductsWrapper>
    <ProductForm />

    <ProductList />
  </ProductsWrapper>
}
