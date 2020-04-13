import gql from 'graphql-tag';

export const REMOVE_PRODUCT_MUTATION = gql`
  mutation RemoveProduct($productId: String!) {
    deleteProduct(productId: $productId)
  }
`;
