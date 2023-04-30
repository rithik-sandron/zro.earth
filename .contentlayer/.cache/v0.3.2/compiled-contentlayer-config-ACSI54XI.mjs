// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
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
      headline: doc.title,
      gist: doc.gist
    })
  }
};
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: `**/*.md`,
  contentType: "mdx",
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
    },
    list: {
      type: "string",
      required: true
    },
    author: {
      type: "json",
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "_posts",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm]
  }
});
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ACSI54XI.mjs.map
