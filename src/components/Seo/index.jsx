import React from "react";
import { useSiteMetadata } from "../../hook/useSiteMetadata";

export function Seo({ title }) {
  const metadata = useSiteMetadata();

  return (
    <>
      <title>{title ? title : metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="author" content={metadata.author} />
    </>
  );
}
