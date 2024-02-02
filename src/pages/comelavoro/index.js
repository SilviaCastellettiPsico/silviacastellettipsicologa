import * as React from "react";
import { Page } from "../../components/Page";
import { Work } from "../../section/Work";
import { Seo } from "../../components/Seo";

export default function IndexPage() {
  return (
    <Page>
      <Work sectionId="comelavoro" />
    </Page>
  );
}

export const Head = () => <Seo title="Come lavoro" />;
