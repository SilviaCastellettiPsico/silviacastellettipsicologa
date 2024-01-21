import React from "react";
import { Layout } from "../Layout";

export function Page(props) {
  return <Layout>{props.children}</Layout>;
}
