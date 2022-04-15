import React from "react";
import styled from "styled-components";
import { Button, Card, Hr, Navigation, Socials } from "../components";

const Wrapper = styled.div`
  overflow-x: hidden;
  padding: 1.5rem 1.5rem 6rem;
`;

const SkillsContainer = styled.div`
  margin: 2rem 0;
  & h3 {
    margin-bottom: 0.25rem;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

const MainTitle = styled.h1`
  font-size: 2rem;
`;

const SubTitle = styled.h2`
  margin-top: 0.5rem;
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
        <MainTitle>Emiel Wit</MainTitle>
        <SubTitle>Frontend developer at Betty Blocks</SubTitle>
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

        <SkillsContainer>
          <h2 style={{ color: "#fff" }}>Favorite Technologies</h2>
          <Card
            title="React"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            title="Typescript"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <Card
            title="CSS"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </SkillsContainer>

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
