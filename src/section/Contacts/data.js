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
          ctaButton1 {
            label
            phoneNumber
          }
          ctaButton2 {
            label
            url
          }
        }
      }
    }
  `);
};
