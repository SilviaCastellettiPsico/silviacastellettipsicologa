import React from "react";
import { useSiteMetadata } from "../../hook/useSiteMetadata";

export function Seo({ title }) {
  const metadata = useSiteMetadata();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Silvia Castelletti - Psicoterapeuta",
    description:
      "Psicologa clinica e psicoterapeuta sistemico-dialogica. Percorsi individuali, di coppia e per famiglie.",
    url: "https://psicologacastellettisilvia.it",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Milano",
      addressCountry: "IT",
    },
    provider: {
      "@type": "Person",
      name: "Silvia Castelletti",
      jobTitle: "Psicologa Clinica e Psicoterapeuta Sistemico-Dialogica",
      sameAs: [
        "https://www.instagram.com/silvia.castelletti.psico/",
        "https://www.guidapsicologi.it/studio/dottssa-silvia-castelletti",
      ],
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://psicologacastellettisilvia.it#contatti",
      },
      result: {
        "@type": "Reservation",
        name: "Prenotazione seduta di psicoterapia",
      },
    },
    mainEntity: [
      {
        "@type": "WebPage",
        name: "Chi sono",
        url: "https://psicologacastellettisilvia.it#chisono",
        description: "Scopri chi è la Dott.ssa Silvia Castelletti",
      },
      {
        "@type": "WebPage",
        name: "Come lavoro",
        url: "https://psicologacastellettisilvia.it#comelavoro",
        description: "I miei metodi di lavoro e approcci terapeutici",
      },
      {
        "@type": "WebPage",
        name: "Il mio approccio",
        url: "https://psicologacastellettisilvia.it#ilmioapproccio",
        description: "L'approccio sistemico-dialogico nella psicoterapia",
      },
      {
        "@type": "WebPage",
        name: "Dove ricevo",
        url: "https://psicologacastellettisilvia.it#dovericevo",
        description: "Sede dello studio e modalità di ricevimento",
      },
      {
        "@type": "WebPage",
        name: "Contatti",
        url: "https://psicologacastellettisilvia.it#contatti",
        description: "Come contattare la Dott.ssa Silvia Castelletti",
      },
    ],
  };

  return (
    <>
      <title>{title ? title : metadata.title}</title>
      <meta
        name="description"
        content="Psicologa clinica e psicoterapeuta sistemico-dialogica. Percorsi individuali, di coppia e per famiglie. Contatta la Dott.ssa Silvia Castelletti."
      />
      <meta name="author" content={metadata.author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Open Graph tags */}
      <meta property="og:title" content={title ? title : metadata.title} />
      <meta
        property="og:description"
        content="Psicologa clinica e psicoterapeuta sistemico-dialogica. Percorsi individuali, di coppia e per famiglie."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://psicologacastellettisilvia.it" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://psicologacastellettisilvia.it" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </>
  );
}
