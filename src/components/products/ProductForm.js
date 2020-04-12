import React from "react";
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const CREATE_PRODUCT = gql`
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

export const ProductForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [createProduct, { loading, error }] = useMutation(CREATE_PRODUCT,
    {
      onCompleted({ createProduct: { _id, name, price } }) {
        console.log('created a product');
        console.log(_id);
        console.log(name);
        console.log(price);
      }
    }
  );

  const onSubmit = (formData, e) => {
    e.target.reset();

    createProduct({
      variables: { name: formData.name, price: parseFloat(formData.price) }
    });
  }

  if (loading) return 'Loading...'

  return <React.Fragment>
    <form onSubmit={handleSubmit(onSubmit)}>

      <label htmlFor="name">Product Name: </label>
      <input name="name" autoFocus={true} ref={register({ required: true })} />

      <label htmlFor="price">Price</label>
      <input name="price" ref={register({ required: true, min: 0, max: 1000 })} type="number" step="0.01" min="0" />

      <label htmlFor="unit">Unit</label>

      <select name="unit" ref={register()}>
        <option value="PIECE">PIECE</option>
        <option value="KG">KG</option>
      </select>

      <input type="submit" />
    </form>
  </React.Fragment>
};
