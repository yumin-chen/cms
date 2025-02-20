import React from "react";
import MDXComponents from "@theme-original/MDXComponents";
import * as Accordion from "../components/Accordion";
import CodeBlock from "@theme-original/CodeBlock";
import Details from "@theme/Details";
import Tabs from "@theme-original/Tabs";
import TabItem from "@theme-original/TabItem";
import DocCardList from "@theme-original/DocCardList";

export default {
  ...MDXComponents,
  Accordion: Accordion,
  Details: Details,
  CodeBlock: CodeBlock,
  Tabs: Tabs,
  TabItem: TabItem,
  Admonition: MDXComponents.admonition,
  DocCardList: DocCardList,
};
