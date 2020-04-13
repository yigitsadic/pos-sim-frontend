import gql from 'graphql-tag';

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $price: Float!) {
    createProduct(
      createProductInput: {
        name: $name,
        price: $price
      }
    ) {
      _id
      name
      price
    }
  }
`;
