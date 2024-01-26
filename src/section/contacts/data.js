import { graphql, useStaticQuery } from "gatsby";

export const useLocalDataSource = () => {
  return useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "contacts" } }) {
        html
      }
      allContactsJson {
        nodes {
          title
          intro
          ctaButton {
            label
            url
          }
        }
      }
    }
  `);
};
