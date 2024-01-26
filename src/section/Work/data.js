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
              src {
                childImageSharp {
                  gatsbyImageData(width: 1000)
                }
              }
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
