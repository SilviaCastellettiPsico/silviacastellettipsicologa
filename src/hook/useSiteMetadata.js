import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      allSettingsJson: allContentJson {
        nodes {
          siteMetadata {
            title
            description
            siteUrl
            author
            social {
              mail
              instagram
            }
          }
        }
      }
    }
  `);

  return data.allSettingsJson.nodes[0].siteMetadata;
};
