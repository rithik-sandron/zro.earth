// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";

// lib/regex.js
var h1 = /^\s*# /gim;
var h2 = /^\s*## /gim;
var h3 = /^\s*### /gim;
var quote = /^\s*> /gim;
var Olist = /^(\s*[0-9]*((\.\d*)?)*) /gim;
var Ulist = /^\s*- /gim;
var UlistTask = /^\s*-\[[xX ]\] /gim;
var UlistTaskChecked = /^\s*-\[[xX]\] /gim;
var UlistTaskUnchecked = /^\s*-\[[ ]\] /gim;
var Hline = /---+/;
var multiLineCode = /^```/g;
var codeHighlight = /^\* /g;
var code = /`(.+?)`(?!\*)/gi;
var empty = /\S/;
var bold = /\*\*(.+?)\*\*(?!\*)/g;
var tag = /==(\S(.*?\S)?)==/gi;
var tagNotify = /==\*(\S(.*?\S)?)==/gi;
var tagHash = /==#(\S(.*?\S)?)==/gi;
var italics = /\*(.+?)\*(?!\*)/g;
var strike = /_(.+?)_(?!\*)/g;
var boldAndItalic = /\*\*\*(.+?)\*\*\*(?!\*)/g;
var un = /\*\*\*\*(.+?)\*\*\*\*(?!\*)/g;
var link = /\[\[(.*?)\]\]\(((https:|http:)\/\/.*?)\)/g;
var ltr = /</gi;
var table = /^\|(.*?)\|+/gim;
var tableDivider = /\:[-]+/g;

// lib/converter.js
function boldAndItalics(line, regReplaced) {
  regReplaced = line.replaceAll(un, `**$1**`);
  regReplaced = regReplaced.replaceAll(boldAndItalic, `<em><strong>$1</strong></em>`);
  regReplaced = regReplaced.replaceAll(bold, `<strong>$1</strong>`);
  regReplaced = regReplaced.replaceAll(italics, `<em>$1</em>`);
  regReplaced = regReplaced.replaceAll(strike, `<del>$1</del>`);
  regReplaced = regReplaced.replaceAll(code, `<code>$1</code>`);
  regReplaced = regReplaced.replaceAll(tagNotify, `<sup>$1</sup>`);
  regReplaced = regReplaced.replaceAll(tagHash, `<span>$1</span>`);
  regReplaced = regReplaced.replaceAll(tag, `<mark>$1</mark>`);
  if (line.match(link))
    regReplaced = regReplaced.replace(link, `<a href='$2'>$1</a>`);
  return regReplaced;
}
function sanitize(line) {
  line = line.replaceAll(ltr, "&lt;");
  return line;
}
async function convert(data, len) {
  let dataHtml = "";
  if (data) {
    let i = 0;
    while (i < len) {
      let line = data[i];
      if (empty.test(line.trim())) {
        let regReplaced = "";
        line = sanitize(line);
        switch (true) {
          case h1.test(line):
            line = boldAndItalics(line, "");
            regReplaced = line.replace(h1, "");
            dataHtml += `<a href='#${i}'><h1 id='${i}' class='table-content-h1'>${regReplaced}</h1></a>`;
            i++;
            break;
          case h2.test(line):
            line = boldAndItalics(line, "");
            regReplaced = line.replace(h2, "");
            dataHtml += `<h2 class='table-content-h2'>${regReplaced}</h2>`;
            i++;
            break;
          case h3.test(line):
            line = boldAndItalics(line, "");
            regReplaced = line.replace(h3, "");
            dataHtml += `<h3>${regReplaced}</h3>`;
            i++;
            break;
          case Hline.test(line):
            regReplaced = line.replace(Hline, "");
            dataHtml += `<hr />`;
            i++;
            break;
          case quote.test(line):
            line = boldAndItalics(line, "");
            regReplaced = line.replace(quote, "");
            dataHtml += `<blockquote>${regReplaced}</blockquote>`;
            i++;
            break;
          case multiLineCode.test(line):
            dataHtml += `<code><pre>`;
            i++;
            while (i < len) {
              let lineJ = data[i];
              if (lineJ.match(multiLineCode))
                break;
              regReplaced = lineJ;
              if (regReplaced === "") {
                dataHtml += `<br />`;
              } else if (regReplaced.match(codeHighlight)) {
                regReplaced = regReplaced.replace(codeHighlight, "");
                dataHtml += `<p style="display: block; width: 100%; background-color: var(--color-yellow)">${regReplaced}</p>`;
              } else {
                dataHtml += `<p>${regReplaced}</p>`;
              }
              i++;
            }
            dataHtml += `</pre></code>`;
            i++;
            break;
          case table.test(line):
            dataHtml += "<table>";
            let isHeading = true;
            while (i < len) {
              let lineJ = data[i];
              lineJ = boldAndItalics(lineJ, "");
              if (!lineJ.match(table))
                break;
              let cells = lineJ.substring(1, lineJ.length - 1).split("|");
              dataHtml += "<tr>";
              for (let k = 0; k < cells.length; k++) {
                cells[k] = boldAndItalics(cells[k].trim(), "");
                if (cells[k].match(Hline))
                  continue;
                if (isHeading) {
                  dataHtml += `<th>${cells[k].trim()}</th>`;
                } else if (cells[k].trim() === "") {
                  dataHtml += `<td class='empty-row'>${cells[k].trim()}</td>`;
                } else if (cells[k].trim().match(tableDivider)) {
                  continue;
                } else {
                  dataHtml += `<td>${cells[k].trim()}</td>`;
                }
              }
              dataHtml += "</tr>";
              isHeading = false;
              i++;
            }
            dataHtml += "</table>";
            break;
          case Olist.test(line):
            dataHtml += `<ol>`;
            while (i < len) {
              let lineJ = data[i];
              lineJ = boldAndItalics(lineJ, "");
              if (!lineJ.match(Olist))
                break;
              const padding = lineJ.split(/[0-9](.*)/s)[0].length;
              regReplaced = lineJ.replace(Olist, "");
              dataHtml += `<li style="margin-left: ${padding}em">${regReplaced}</li>`;
              i++;
            }
            dataHtml += `</ol>`;
            break;
          case UlistTask.test(line):
            dataHtml += `<dl>`;
            while (i < len) {
              let lineJ = data[i];
              lineJ = boldAndItalics(lineJ, "");
              if (!lineJ.match(UlistTask))
                break;
              regReplaced = lineJ.replace(UlistTask, "");
              const padding = lineJ.split("-")[0].length / 2;
              if (lineJ.match(UlistTaskChecked))
                dataHtml += `<dd style='padding-left: ${padding}em'>\u2705 ${regReplaced}</dd>`;
              else if (lineJ.match(UlistTaskUnchecked))
                dataHtml += `<dd style='padding-left: ${padding}em'>\u2B55 ${regReplaced}</dd>`;
              i++;
            }
            dataHtml += `</dl>`;
            break;
          case Ulist.test(line):
            dataHtml += `<ul>`;
            while (i < len) {
              let lineJ = data[i];
              lineJ = boldAndItalics(lineJ, "");
              if (!lineJ.match(Ulist))
                break;
              const padding = lineJ.split("-")[0].length;
              regReplaced = lineJ.replace(Ulist, "");
              dataHtml += `<li style="margin-left: ${1.3 + padding}em">${regReplaced}</li>`;
              i++;
            }
            dataHtml += `</ul>`;
            break;
          default:
            line = boldAndItalics(line, "");
            dataHtml += `<p>${line}</p>`;
            i++;
            break;
        }
      } else {
        dataHtml += "<br />";
        i++;
      }
    }
    return dataHtml;
  }
}

// contentlayer.config.js
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  },
  structuredData: {
    type: "object",
    resolve: (doc) => ({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      title: doc.title,
      slug: doc.slug,
      date: doc.date,
      description: doc.gist,
      author: {
        "@type": "Person",
        name: "Rithik"
      }
    })
  }
};
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.md`,
  contentType: "md",
  fields: {
    title: {
      type: "string",
      required: true
    },
    date: {
      type: "string",
      required: true
    },
    gist: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  md: {
    remarkPlugins: [convert]
  }
});
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-UEOXYAJH.mjs.map
