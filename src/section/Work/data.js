import { graphql, useStaticQuery } from "gatsby";

export const useLocalDataSource = () => {
  return useStaticQuery(graphql`
    query {
      allWorkJson {
        nodes {
          title
          intro
          cards {
            image {
              src
              alt
              linkTo
            }
            title
            description
            ctaButton {
              label
              url
            }
          }
        }
      }
    }
  `);
};
