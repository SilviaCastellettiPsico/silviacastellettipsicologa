import { graphql, useStaticQuery } from "gatsby";

export const useLocalDataSource = () => {
  const data = useStaticQuery(graphql`
    query {
      allHeadergotohomeJson {
        nodes {
          image {
            src {
              childImageSharp {
                gatsbyImageData(width: 30)
              }
            }
            alt
            linkTo
          }
        }
      }
    }
  `);

  return data.allHeadergotohomeJson.nodes[0];
};
