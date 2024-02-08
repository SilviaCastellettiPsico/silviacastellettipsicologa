import { graphql, useStaticQuery } from "gatsby";

export const useLocalDataSource = () => {
  return useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "approach" } }) {
        html
      }
      allApproachJson {
        nodes {
          title
          intro
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
        }
      }
    }
  `);
};
