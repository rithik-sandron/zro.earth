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
  const [bg, setBg] = useState('');
  const [f, setf] = useState([]);

  useEffect(() => {
    document.getElementById('search-ken').focus();

    let image = new Image();
    image.src = headPost.coverImage;
    image.onload = () => {
      let canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);
      let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      setBg(`rgb(${imageData.data[0]},
        ${imageData.data[1]},
        ${imageData.data[2]}, 1)`);
    }
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
    <Layout bg={bg}>
      {search === "" && <HighlightContent post={headPost} bg={bg} />}
      <Search search={search} setSearch={setSearch} />
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
