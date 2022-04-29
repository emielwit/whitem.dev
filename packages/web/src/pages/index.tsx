import { graphql, PageProps } from "gatsby";
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

export interface Props extends PageProps {
  data: {
    sanityHome: {
      title: string;
      sub_title: string;
      intro: string;
    };
  };
}

export const homePageQuery = graphql`
  {
    sanityHome {
      title
      sub_title
      intro
    }
  }
`;

const IndexPage = ({ data }: Props): JSX.Element => {
  const { title, sub_title, intro } = data.sanityHome;

  console.log({ intro });
  return (
    <>
      <Navigation />
      <Wrapper>
        <MainTitle>{title}</MainTitle>
        <SubTitle>{sub_title}</SubTitle>
        <Intro>{intro}</Intro>

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
