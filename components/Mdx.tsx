import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  table: (props) => (
    <table {...props}>
      {props.children}
    </table>
  ),
}


export default function Mdx(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
