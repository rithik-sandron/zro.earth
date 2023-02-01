import { getAllPosts } from '../lib/api.js'
import HighlightContent from './HighlightContent'
import Layout from '../components/Layout.js';
// import Search from "../components/Search";
import React, { useState, useEffect } from 'react';
import List from './List.js';
import Tip from './Tips.js';

export default function Index({ news, anime, movies, tips }) {
  const heroPost = news[4];
  // const [search, setSearch] = useState('');
  // const [f, setf] = useState([]);
  const [bg, setBg] = useState('');
  const [fore, setFore] = useState('');

  useEffect(() => {
    let image = new Image();
    image.src = heroPost.coverImage;
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

  // useEffect(() => {
  //   if (search !== "") {
  //     const seachQuery = search.trim().toLowerCase();
  //     const allPosts = [...anime, ...news, ...movies];
  //     const res = allPosts.filter(x => {
  //       return (x.title.toLowerCase().includes(seachQuery) ||
  //         x.date.toLowerCase().includes(seachQuery) ||
  //         x.author.name.toLowerCase().includes(seachQuery)
  //         // x.tagsWithColors.filter(y => y.tag.toLowerCase().includes(seachQuery)).length > 0
  //       )
  //     })

  //     setf(res)
  //   }
  // }, [search])

  return (
    <Layout bg={bg} fore={fore}>
      <HighlightContent
        bg={bg}
        fore={fore}
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        author={heroPost.author}
        slug={heroPost.slug}
        list={heroPost.list}
      />
      <Tip post={tips[0]} title='quick tip' />
      {/* <Search search={search} setSearch={setSearch} /> */}
      {/* {(search !== "" && f.length === 0) && <div style={{ width: '90%', margin: '0 auto', padding: '1em 3.4em' }}>No posts found for your search</div>} */}
      {/* <ContentList posts={search !== "" ? f : morePosts} search={search} /> */}


      <List posts={news} bg='#C3F0C8' fore= '#222'/>
      <List posts={anime} bg='#FFC864' fore= '#222' />
      <List posts={movies} bg='rgb(255, 160, 130)' fore= '#222'/>
    </Layout>
  )
}

export const getStaticProps = async () => {

  const news = getAllPosts('news', [
    'title',
    'author',
    'list',
    'date',
    'slug',
    'coverImage',
  ])

  const anime = getAllPosts('anime', [
    'title',
    'author',
    'list',
    'date',
    'slug',
    'coverImage',
  ])

  const movies = getAllPosts('movies', [
    'title',
    'author',
    'list',
    'date',
    'slug',
    'coverImage',
  ])

  const tips = getAllPosts('tips', [
    'content',
    'date',
    'slug',
    'list'
  ])

  return {
    props: { news, anime, movies, tips },
  }
}
