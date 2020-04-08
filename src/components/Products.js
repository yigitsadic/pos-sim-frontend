import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

const PRODUCTS = gql`
{
  products {
    _id
    name
    price
  }
}
`;

export const Products = () => {
  const { loading, error, data } = useQuery(PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return <React.Fragment>
    Hello this is Products

    {data.products.map(({ _id, name, price }) => {
    return <div key={_id}>
      {name}: ₺{price}
    </div>
  })}
  </React.Fragment>
}
