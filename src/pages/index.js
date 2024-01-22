import * as React from "react";
import { Page } from "../components/Page";
import { Seo } from "../components/Seo";
import { WhoAmI } from "../section/WhoAmI";

export default function IndexPage() {
  return (
    <Page>
      <WhoAmI />
    </Page>
  );
}

export const Head = () => <Seo title="Silvia Castelletti Psicologa" />;
