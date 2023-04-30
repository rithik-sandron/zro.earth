// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
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
      content: doc.content,
      author: {
        "@type": "Person",
        name: "Rithik"
      }
    })
  }
};
var Blog = defineDocumentType(() => ({
  name: "Post",
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
    },
    content: {
      type: "string",
      required: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "_posts",
  documentTypes: [Post]
});
export {
  Blog,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-HWGIT2N5.mjs.map
