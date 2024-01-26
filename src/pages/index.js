import * as React from "react";
import { Page } from "../components/Page";
import { Seo } from "../components/Seo";
import { WhoAmI } from "../section/WhoAmI";
import { Work } from "../section/Work";
import "@fontsource/raleway/300.css"; // Specify weight
import "@fontsource/raleway/300-italic.css"; // Specify weight and style
import "@fontsource/raleway/600.css"; // Specify weight
import "@fontsource/raleway/600-italic.css"; // Specify weight and style

export default function IndexPage() {
  return (
    <Page headerType="root">
      <WhoAmI sectionId="chisono" />
      <Work sectionId="comelavoro" />
    </Page>
  );
}

export const Head = () => <Seo title="Silvia Castelletti" />;
