import { graphql, useStaticQuery } from "gatsby";

export const useLocalDataSource = () => {
  const data = useStaticQuery(graphql`
    query {
      allFooterJson {
        nodes {
          instagramLogo {
            alt
            linkTo
          }
          linkedinLogo {
            alt
            linkTo
          }
        }
      }
    }
  `);

  return data.allFooterJson.nodes[0];
};
