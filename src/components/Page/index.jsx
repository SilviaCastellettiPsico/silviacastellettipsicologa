import React from "react";
import { Layout } from "../Layout";

export function Page({ headerType, children }) {
  return <Layout headerType={headerType}>{children}</Layout>;
}
