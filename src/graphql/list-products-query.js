import gql from 'graphql-tag';

export const LIST_PRODUCTS_QUERY = gql`
{
  products {
    _id
    name
    price
  }
}
`;
