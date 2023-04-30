// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  }
  // structuredData: {
  //     type: 'object',
  //     resolve: (doc) => ({
  //         '@context': 'https://schema.org',
  //         '@type': 'BlogPosting',
  //         title: doc.title,
  //         slug: doc.slug,
  //         date: doc.date,
  //         gist: doc.gist,
  //         list: doc.list,
  //         author: {
  //             '@type': 'Person',
  //             name: 'Rithik',
  //         },
  //     }),
  // },
};
var Blog = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
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
//# sourceMappingURL=compiled-contentlayer-config-MIK6VBW5.mjs.map
