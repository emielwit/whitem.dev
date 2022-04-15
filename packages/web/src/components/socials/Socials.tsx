import React from "react";
import styled from "styled-components";
import GithubIcon from "../../../static/images/github-icon.svg";
import TwitterIcon from "../../../static/images/twitter-icon.svg";
import LinkedInIcon from "../../../static/images/linkedin-icon.svg";

const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 0.5rem;
`;

const ListItem = styled.li`
  height: 2.5rem;
  width: 2.5rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  :hover {
    background: #2e2e2e;
  }
`;

export function Socials(): JSX.Element {
  return (
    <List>
      <ListItem>
        <a href="https://github.com/emielwit">
          <GithubIcon />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://www.linkedin.com/in/emiel-wit-58088081/">
          <LinkedInIcon />
        </a>
      </ListItem>
      <ListItem>
        <a href="https://twitter.com/">
          <TwitterIcon />
        </a>
      </ListItem>
    </List>
  );
}
