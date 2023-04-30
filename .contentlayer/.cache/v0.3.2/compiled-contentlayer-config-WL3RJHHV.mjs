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
      author: {
        "@type": "Person",
        name: "Rithik"
      }
    })
  }
};
var Post = defineDocumentType(() => ({
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
  contentDirPath: "_posts",
  documentTypes: [Post]
});
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-WL3RJHHV.mjs.map
