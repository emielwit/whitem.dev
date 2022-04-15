import React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query ArchivePageQuery {
    projects: allSanitySampleProject(
      limit: 12
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
    ) {
      edges {
        node {
          id
          mainImage {
            asset {
              _id
            }
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`;

const ArchivePage = (props) => {
  const { data, errors } = props;
  console.log({ data });
  return <div>Hello</div>;
};

export default ArchivePage;
