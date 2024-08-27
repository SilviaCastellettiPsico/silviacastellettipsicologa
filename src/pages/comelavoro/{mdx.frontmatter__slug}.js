import * as React from "react";
import { Seo } from "../../components/Seo";
import { graphql } from "gatsby";
import { Page } from "../../components/Page";
import "./style.css";

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

export default function WorkPost({ data, children }) {
  return (
    <Page>
      <div className="section-container">
        <div className="section-title">{data.mdx.frontmatter.title}</div>
        <div className="post-body">{children}</div>
      </div>
    </Page>
  );
}

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;
