import { graphql, useStaticQuery } from "gatsby";

export const useLocalDataSource = () => {
  const data = useStaticQuery(graphql`
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

  return data.allHeaderJson.nodes[0];
};
