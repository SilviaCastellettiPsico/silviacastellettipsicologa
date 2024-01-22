import { graphql, useStaticQuery } from "gatsby";

export const useLocalDataSource = () => {
  let data = useStaticQuery(graphql`
    query {
      allWhoamiJson {
        nodes {
          intro
          title
          description
          image {
            src {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
            alt
            linkTo
          }
        }
      }
    }
  `);

  return data.allWhoamiJson.nodes[0];
};
