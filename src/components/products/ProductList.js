import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { LIST_PRODUCTS_QUERY } from "../../graphql/list-products-query";
import styled from "styled-components";

const Product = styled.div`
  display: block;
  width: 100%;

  :not(:hover) {
    transition: linear;
    transition-duration: 200ms;
  }

  :hover {
    font-size: 1.3rem;
    background-color: #fcba03;
    color: white;
    border-color: pink;
    border-style: dotted;
    border-radius: 3px;
    border-style: 4px;
    margin-bottom: 7px;
    
    transition: linear;
    transition-duration: 200ms;

    cursor: pointer;
  }

  :not(:first-of-type) {
    margin-top: 7px;
  }
`;

const ProductName = styled.div`
  display: inline-block;
  padding-right: 2rem;
  width: 70%;
  text-align: left;
`;

const ProductPrice = styled.div`
  display: inline-block;
  width: 18%;
  text-align: right;
  
  ::after {
    content: '₺';
  }
`;

export const ProductList = () => {
  const { loading, data } = useQuery(LIST_PRODUCTS_QUERY);

  return <>
    {!loading && data && data.products.map(({ _id, name, price }) => {
      return <Product key={_id}>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
      </Product>
    })}
  </>
}
