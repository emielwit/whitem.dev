import React from "react";
import styled from "styled-components";

const Section = styled.section`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #1c1c1c;
  height: 100vh;
`;

const Navigation = styled.nav`
  display: flex;
  color: white;
  margin: 0.5rem;
`;

const Content = styled.div`
  & h1 {
    font-size: 72px;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(196, 53, 53, 1) 0%,
      rgba(25, 101, 238, 1) 89%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  & h3 {
    font-size: 60px;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(196, 53, 53, 1) 0%,
      rgba(25, 101, 238, 1) 89%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  & h4 {
    margin-top: 1rem;
    color: white;
    font-size: 35px;
  }
  display: flex;
  height: 100%;
  width: 50%;
  margin: auto;
  flex-direction: column;
  justify-content: center;
`;

function Hero(): JSX.Element {
  return (
    <Section>
      <Navigation>
        <span>About me</span>
        <span>Skills</span>
      </Navigation>
      <Content>
        <h1>Hi! I&apos;m Emiel.</h1>
        <h3>
          I&apos;m so lucky to do what i love: creating amazing apps with
          incredible tools.
        </h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
          dui non nibh pellentesque consequat non at leo. Quisque risus dui,
          luctus at libero tincidunt, tincidunt vulputate diam. Integer lorem
          ante, tristique vel nibh a, fermentum volutpat elit.
        </h4>
      </Content>
    </Section>
  );
}
export default Hero;
