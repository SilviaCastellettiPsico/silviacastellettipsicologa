import { graphql, useStaticQuery } from "gatsby";

export const useLocalDataSource = () => {
  return useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "chisono-introduction" } }) {
        html
      }
      allWhoamiJson {
        nodes {
          intro
          title
          subtitle
          image {
            src {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
            alt
            linkTo
          }
          ctaButton {
            label
            url
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
