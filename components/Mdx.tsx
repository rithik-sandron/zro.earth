import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "../app/lib/index.mjs";
import React from "react";

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

let components = {
  code: Code,
};

export default function Mdx(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}

{
  /* <Callout emoji="💡"></Callout> */
}
