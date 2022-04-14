import React from "react";
import styled from "styled-components";
import { Button, Hr, Navigation, Socials } from "../components";

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  margin-top: 24px;
  margin-right: 24px;
  margin-left: 0;
  padding-right: 24px;
  padding-left: 24px;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

const MainTitle = styled.h1`
  font-size: 2rem;
  background: linear-gradient(to right, #e39600, #ea4c89, #8f48eb, #1da1f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Intro = styled.div`
  margin-top: 1.5rem;
  & p {
    margin-bottom: 1.5rem;
    line-height: 2rem;
  }
`;

const IndexPage = (): JSX.Element => {
  return (
    <>
      <Navigation />
      <Wrapper>
        <MainTitle>
          Front-end Developer creating amazing apps with incredible tools.
        </MainTitle>
        <Intro>
          <p>
            I’m Emiel, a NL based frontend developer with over four years of
            experience. I&#39;m specialised in building apps with React.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam
            ac tortor vitae purus faucibus. Ornare lectus sit amet est placerat
            in egestas erat. Nunc aliquet bibendum enim facilisis gravida.
            Egestas pretium aenean pharetra magna ac placerat vestibulum lectus
            mauris.
          </p>
        </Intro>
        <Hr />

        <SocialContainer>
          <Socials />
          <Button label="Contact me" />
        </SocialContainer>
      </Wrapper>
    </>
  );
};

export default IndexPage;
