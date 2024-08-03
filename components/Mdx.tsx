import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "../app/lib/index.mjs";
import { GeistMono } from 'geist/font/mono';

import React from "react";

function Code({ children, ...props }) {
  let codeHTML = highlight(children);
  return <code className={`${GeistMono.className}`} dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function Br() {
  return <><br /><br /></>;
}

const Table = ({ children }) => {
  children = children.props.children;
  console.log(children)
  const rows = children.trim().split('\n');
  const tableData = rows.map(row => row.split('|').map(cell => cell.trim()).filter(cell => cell));
  return (
    <table>
      <tbody>
        {tableData.map((row, rowIndex) => {
          if (rowIndex === 0) {
            return (<tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <th key={cellIndex}>
                  {cell}
                </th>))}
            </tr>)
          } else {
            return (<tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>
                  {cell}
                </td>))}
            </tr>)
          }
        })}
      </tbody>
    </table>
  );

};


let components = {
  code: Code,
  Br,
  Table
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
