import React from "react";
import styled from "styled-components";

import TerminalSvg from "../images/pos-terminal.svg";

const MainNavWrapper = styled.nav`
  display: block;
  width: 100%;
  height: 5rem;
  padding: .3rem;
  margin-bottom: 2rem;
  text-align: center;

  color: ${props => props.theme.text_primary};
`;

const PosIcon = styled.img`
  display: inline-block;
  width: 3rem;
  height: 3rem;
  margin-right: 1.2rem;
`;

const Header = styled.h1`
  display: inline-block;
  font-size: 2rem;
  color: #e07224;
`;

export const MainNav = () => {
  return (
    <MainNavWrapper>
      <PosIcon src={TerminalSvg}></PosIcon>
      <Header>POS Simulator</Header>
    </MainNavWrapper>
  );
}
