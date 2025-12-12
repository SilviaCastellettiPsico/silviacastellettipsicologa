import React from "react";

export function StructuredData() {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://psicologacastellettisilvia.it",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Chi sono",
        item: "https://psicologacastellettisilvia.it#chisono",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Come lavoro",
        item: "https://psicologacastellettisilvia.it#comelavoro",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Il mio approccio",
        item: "https://psicologacastellettisilvia.it#ilmioapproccio",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Dove ricevo",
        item: "https://psicologacastellettisilvia.it#dovericevo",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Contatti",
        item: "https://psicologacastellettisilvia.it#contatti",
      },
    ],
  };

  const siteNavigationStructuredData = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: [
      "Chi sono",
      "Come lavoro",
      "Il mio approccio",
      "Dove ricevo",
      "Contatti",
    ],
    url: [
      "https://psicologacastellettisilvia.it#chisono",
      "https://psicologacastellettisilvia.it#comelavoro",
      "https://psicologacastellettisilvia.it#ilmioapproccio",
      "https://psicologacastellettisilvia.it#dovericevo",
      "https://psicologacastellettisilvia.it#contatti",
    ],
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(siteNavigationStructuredData)}
      </script>
    </>
  );
}
