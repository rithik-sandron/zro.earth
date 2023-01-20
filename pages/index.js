import { getAllPosts, hashCode } from '../lib/api.js'
import HighlightContent from './HighlightContent'
import ContentList from './ContentList'
import Layout from '../components/Layout.js';
import Search from "../components/Search";

import React, { useState, useEffect } from 'react';

export default function Index({ allPosts }) {
  const headPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const [search, setSearch] = useState('');
  const [f, setf] = useState([]);

  useEffect(() => {
    document.getElementById('search-ken').focus();
  }, [])

  useEffect(() => {
    if (search !== "") {
      const seachQuery = search.trim().toLowerCase();
      const res = allPosts.filter(x => {
        return (x.title.toLowerCase().includes(seachQuery) ||
          x.date.toLowerCase().includes(seachQuery) ||
          x.author.name.toLowerCase().includes(seachQuery)
        )
      })
      setf(res)
    }
  }, [search])

  return (
    <Layout>
      <Search search={search} setSearch={setSearch} />
      {search === "" && <HighlightContent post={headPost} />}
      <ContentList posts={search !== "" ? f : morePosts} search={search} />
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
