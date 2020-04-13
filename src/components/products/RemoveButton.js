import React from "react";
import styled from "styled-components";
import { useMutation } from '@apollo/react-hooks';


import { LIST_PRODUCTS_QUERY } from "../../graphql/list-products-query";
import { REMOVE_PRODUCT_MUTATION } from "../../graphql/remove-product-mutation";

export const RemoveButtonWrapper = styled.div`
  width: 10%;
  height: 100%;
  display: inline-block;
  cursor: pointer;
  text-align: right;
`;

const Button = styled.button`
  background-color: red;
  color: white;
  box-shadow: .1rem .1rem .1rem #eb3b5b;
  border: none;

  margin: 0;

  display: inline-block;
  width: 50%;
  vertical-align: middle;
  padding: .3rem;

  text-align: center;

  cursor: pointer;
  filter: grayscale(.3);

  :hover {
    transition-duration: 150ms;
    transition: ease-in-out;
    filter: grayscale(0);
  }
`;

export const RemoveButton = ({ id }) => {
  const [deleteProduct, { loading }] = useMutation(REMOVE_PRODUCT_MUTATION,
    {
      update(cache, { data: { deleteProduct } }) {
        const { products } = cache.readQuery({ query: LIST_PRODUCTS_QUERY });
        cache.writeQuery({
          query: LIST_PRODUCTS_QUERY,
          data: { products: products.filter(product => product._id !== id) },
        });
      }
    }
  );

  const handleDelete = () => {
    deleteProduct({
      variables: { productId: id }
    });
  };

  return <Button
    onClick={handleDelete}
    disabled={loading}
  >
    &times;
  </Button>;
};
