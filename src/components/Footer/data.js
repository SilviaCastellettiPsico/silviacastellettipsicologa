import { graphql, useStaticQuery } from "gatsby";

export const useLocalDataSource = () => {
  const data = useStaticQuery(graphql`
    query {
      allFooterJson {
        nodes {
          instagramLogo {
            src {
              childImageSharp {
                gatsbyImageData(width: 20)
              }
            }
            alt
            linkTo
          }
          linkedinLogo {
            src {
              childImageSharp {
                gatsbyImageData(width: 20)
              }
            }
            alt
            linkTo
          }
        }
      }
    }
  `);

  return data.allFooterJson.nodes[0];
};
