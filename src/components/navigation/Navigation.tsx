import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const NavigationBar = styled.div`
  background: #111;
  display: flex;
  padding: 1rem;
  margin: auto;
  border-top: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to right,
    #e39600,
    #ea4c89,
    #8f48eb,
    #1da1f2
  );
  position: fixed;
  top: auto;
  bottom: 0;
  height: 4.5rem;
  width: 100%;
`;

const LogoContainer = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  color: #fff;
  background: linear-gradient(to right, #e39600, #ea4c89, #8f48eb, #1da1f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`;

const NavigationItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 36px;
  border-radius: 0.25rem;
  flex: 1 1 auto;
  text-decoration: none;
  margin-right: 0.125rem;
  :hover,
  &.active {
    color: #fff;
    background: #2e2e2e;
    text-decoration: underline;
  }
`;

export function Navigation(): JSX.Element {
  return (
    <NavigationBar>
      <LogoContainer>
        <Logo>{"</>"}</Logo>
      </LogoContainer>
      <Nav>
        <NavigationItem activeClassName="active" to="/">
          Home
        </NavigationItem>
        <NavigationItem activeClassName="active" to="/about">
          About
        </NavigationItem>
        <NavigationItem activeClassName="active" to="/projects">
          Projects
        </NavigationItem>
        <NavigationItem activeClassName="active" to="/tools">
          Tools
        </NavigationItem>
      </Nav>
    </NavigationBar>
  );
}
