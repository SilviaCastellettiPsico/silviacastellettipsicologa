import * as React from "react";
import { Page } from "../components/Page";
import { Seo } from "../components/Seo";
import { WhoAmI } from "../section/WhoAmI";
import { Link } from "gatsby";
import "@fontsource/raleway/300.css"; // Specify weight
import "@fontsource/raleway/300-italic.css"; // Specify weight and style
import "@fontsource/raleway/600.css"; // Specify weight
import "@fontsource/raleway/600-italic.css"; // Specify weight and style

export default function IndexPage() {
  return (
    <Page>
      <WhoAmI sectionId="chisono" />
    </Page>
  );
}

export const Head = () => <Seo title="Psicologa Silvia Castelletti" />;
