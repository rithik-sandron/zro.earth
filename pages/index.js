import { getAllPosts, hashCode } from '../lib/api.js'
import HighlightContent from './HighlightContent'
import ContentList from './ContentList'
import Layout from '../components/Layout.js';
import React from 'react';

export default function Index({ allPosts }) {
  const headPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <Layout>
      <HighlightContent post={headPost} />
      <ContentList posts={morePosts} />
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'tags',
    'tagsWithColors'
  ])

  allPosts.forEach(x => {
    x.tagsWithColors = [];
    x.tags.forEach(y => {
      let color = hashCode(y);
      x.tagsWithColors.push({ tag: y, color: color });
    })
  })

  return {
    props: { allPosts },
  }
}
