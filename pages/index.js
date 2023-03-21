import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import FeaturePost from '../components/FeaturePost'
import Layout from '../components/Layout';
import styles from '../styles/Search.module.css';
import Lists from '../components/Lists';


export default function Index({
  list = [{
    'color': { bg: "", fore: "" },
    'title': '',
    'author': { name: "", picture: "" },
    'list': '',
    'date': '',
    'slug': '',
    'wc': '',
    'coverImage': '',
  }],
  feature = {
    'color': { bg: "", fore: "" },
    'title': '',
    'author': { name: "", picture: "" },
    'list': '',
    'gist': '',
    'date': '',
    'slug': '',
    'wc': '',
    'coverImage': '',
  }
}) {
  const [search, setSearch] = useState('');
  const [f, setf] = useState([]);

  // useEffect(() => {
  //   if (search !== "") {
  //     const seachQuery = search.trim().toLowerCase();
  //     const res = allPosts.filter(x => {
  //       return (x.title.toLowerCase().includes(seachQuery) ||
  //         x.date.toLowerCase().includes(seachQuery) ||
  //         x.author.name.toLowerCase().includes(seachQuery)
  //       )
  //     })

  //     setf(res)
  //   }
  // }, [search])

  return (
    <Layout>
      <FeaturePost post={feature} />

      <input className={styles.search} placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} />
      {(search !== "" && f.length === 0) && <div style={{ width: '90%', margin: '0 auto', padding: '1em 3.4em' }}>No posts found for your search</div>}

      <Lists list={list} />
    </Layout>
  )
}

export const getStaticProps = async () => {

  let list = getAllPosts([
    'title',
    'list',
    'date',
    'slug',
    'gist',
    'wc',
    'color',
  ])

  const gist = await markdownToHtml(list.feature.gist || '')
  list.feature.gist = gist;

  return {
    props: { list: list.list, feature: list.feature }
  }
}
