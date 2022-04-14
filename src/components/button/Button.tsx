import React from "react";
import styled from "styled-components";

interface Props {
  label: string;
}

const Btn = styled.button`
  font-family: "IBM Plex Mono";
  padding: 0.5rem;
  border: 1px solid;
  background-color: transparent;
  color: #b1b1b1;
  border-image-slice: 0.5;
  border-image-source: linear-gradient(
    to right,
    #e39600,
    #ea4c89,
    #8f48eb,
    #1da1f2
  );
  :hover {
    color: #fff;
    background: #2e2e2e;
  }
`;

export function Button({ label }: Props): JSX.Element {
  return <Btn>{label}</Btn>;
}
