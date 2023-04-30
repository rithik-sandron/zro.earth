import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  structuredData: {
    type: 'object',
    resolve: (doc) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: doc.title,
      gist: doc.gist,
    }),
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.md`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'string',
      required: true,
    },
    gist: {
      type: 'string',
      required: true,
    },
    list: {
      type: 'string',
      required: true,
    },
    author: {
        type:'string',
        required: true,
      }

  },
  computedFields,
}));

export default makeSource({
  contentDirPath: '_posts',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
  },
});