import { graphql, useStaticQuery } from "gatsby";

export const useLocalDataSource = () => {
  return useStaticQuery(graphql`
    query {
      allHeaderJson {
        nodes {
          header {
            label
            url
          }
          ctaButton {
            label
            openNewTab
            url
          }
        }
      }
    }
  `);
};
