import React from "react";
import styled from "styled-components";
import TwitterIcon from "../../../static/images/twitter-icon.svg";

interface Props {
  title: string;
  description: string;
}

const HeaderContainer = styled.div`
  background-image: url("/images/twitter-icon.svg");
  background-repeat: no-repeat;
  background-position: right top;
`;

const StyledCard = styled.article`
  padding: 2.5rem;
  margin: 0.5rem 0;
  border-radius: 0.25rem;
  border: 1px solid #b1b1b1;
  & p {
    font-size: 0.875rem;
  }
  & h3 {
    margin-bottom: 1rem;
    color: #fff;
  }
`;

export function Card({ title, description }: Props): JSX.Element {
  return (
    <StyledCard>
      <HeaderContainer>
        <h3>{title}</h3>
      </HeaderContainer>
      <p>{description}</p>
    </StyledCard>
  );
}
