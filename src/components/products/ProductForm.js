import React from "react";
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_PRODUCT } from "../../graphql/create-product-mutation";
import { LIST_PRODUCTS_QUERY } from "../../graphql/list-products-query";
import styled from "styled-components";

const FormWrapper = styled.section`
  border-bottom: .5rem;
  border-style: solid;
  padding: .7rem;
  margin-bottom: 1rem;
`;

const StyledForm = styled.form`
  text-align: left;
`;

const FormGroup = styled.div`
  margin: auto;
  width: 50rem;
  display: block;
  margin-top: .5rem;
`;

const CreateButton = styled.button`
  display: inline-block;
  padding: .3rem;
  width: 10rem;
  height: 5rem;
  
  color: white;
  background: linear-gradient(180deg, rgba(48,126,161,1) 0%, rgba(91,158,172,1) 2%, rgba(65,135,154,1) 3%, rgba(44,42,143,1) 77%);
`;

export const ProductForm = () => {
  const { register, handleSubmit } = useForm();
  const [createProduct, { loading }] = useMutation(CREATE_PRODUCT,
    {
      update(cache, { data: { createProduct } }) {
        const { products } = cache.readQuery({ query: LIST_PRODUCTS_QUERY });
        cache.writeQuery({
          query: LIST_PRODUCTS_QUERY,
          data: { products: [createProduct, ...products] },
        });
      }
    }
  );

  const onSubmit = (formData, e) => {
    e.target.reset();

    createProduct({
      variables: { name: formData.name, price: parseFloat(formData.price) }
    });
  }

  if (loading) return 'Loading...';

  return <FormWrapper>
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <label htmlFor="name">Product Name: </label>
        <input name="name" autoFocus={true} ref={register({ required: true })} />
      </FormGroup>

      <FormGroup>
        <label htmlFor="price">Price: </label>
        <input name="price" ref={register({ required: true, min: 0, max: 1000 })} type="number" step="0.01" min="0" />
      </FormGroup>

      <FormGroup>
        <CreateButton>
          SAVE
        </CreateButton>
      </FormGroup>
    </StyledForm>
  </FormWrapper>
};
