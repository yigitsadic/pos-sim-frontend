import React from "react";
import styled from "styled-components";

const Header = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: green;
`;

export const App = () => {
  return (
    <Header>
      Hello React!
    </Header>
  );
};
