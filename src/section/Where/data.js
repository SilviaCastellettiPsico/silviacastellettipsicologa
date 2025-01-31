import { graphql, useStaticQuery } from "gatsby";

export const useLocalDataSource = () => {
  return useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "where-my-study" } }) {
        html
      }
      allWhereJson {
        nodes {
          title
          intro
          image1 {
            src {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
            alt
            linkTo
          }
          image2 {
            src {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
            alt
            linkTo
          }
          image3 {
            src {
              childImageSharp {
                gatsbyImageData(width: 1000)
              }
            }
            alt
            linkTo
          }
          ctaButton1 {
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
