import React from "react";
import { useQuery } from '@apollo/react-hooks';
import { LIST_PRODUCTS_QUERY } from "../../graphql/list-products-query";
import styled from "styled-components";
import { RemoveButton, RemoveButtonWrapper } from "./RemoveButton";

const ProductName = styled.div`
  display: inline-block;
  padding-right: 2rem;
  width: 70%;
  text-align: left;
`;

const ProductPrice = styled.div`
  display: inline-block;
  width: 20%;
  text-align: right;

  cursor: pointer;
  
  ::after {
    content: '₺';
  }
`;

const Product = styled.div`
  display: block;
  width: 100%;
  margin-left: 0;
  margin-right: 0;

  :not(:hover) {
    transition: linear;
    transition-duration: 200ms;
  }

  :hover ${ProductName} {
    background-color: #fcba03;
    color: white;
    
    transition: linear;
    transition-duration: 200ms;

    cursor: pointer;
  }

  :not(:first-of-type) {
    margin-top: 7px;
  }
`;

export const ProductList = () => {
  const { loading, data } = useQuery(LIST_PRODUCTS_QUERY);

  return <>
    {!loading && data && data.products.map(({ _id, name, price }) => {
      return <Product key={_id}>
        <ProductName>{name}</ProductName>
        <ProductPrice>{price}</ProductPrice>
        <RemoveButtonWrapper>
          <RemoveButton id={_id} />
        </RemoveButtonWrapper>
      </Product>
    })}
  </>
}
