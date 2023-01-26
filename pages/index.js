import { getAllPosts, hashCode } from '../lib/api.js'
import HighlightContent from './HighlightContent'
import ContentList from './ContentList'
import Layout from '../components/Layout.js';
import Search from "../components/Search";
import React, { useState, useEffect } from 'react';

export default function Index({ allPosts }) {
  const headPosts = allPosts[4];
  const morePosts = allPosts;
  const [search, setSearch] = useState('');
  const [f, setf] = useState([]);
  const [bg, setBg] = useState('');
  const [fore, setFore] = useState('');

  useEffect(() => {
    let image = new Image();
    image.src = headPosts.coverImage;
    image.onload = () => {
      let canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);
      let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const imageLength = Math.round((imageData.data.length - 1) / 3);

      setBg(`rgb(${imageData.data[imageLength]}, ${imageData.data[imageLength + 1]}, ${imageData.data[imageLength + 2]})`);
      setFore(`rgb(${255 - imageData.data[imageLength]}, ${255 - imageData.data[imageLength + 1]}, ${255 - imageData.data[imageLength + 2]})`);
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
    <Layout bg={bg} fore={fore}>
      {(search === "" && bg) && <HighlightContent post={headPosts} bg={bg} fore={fore} />}
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
