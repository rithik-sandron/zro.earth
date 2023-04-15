import React, { useState, useEffect } from 'react';
import { getAllPosts } from './api/api';
import FeaturePost from '../components/FeaturePost'
import Meta from '../components/Meta';
import Lists from '../components/Lists';
import styles from '../styles/Index.module.css';
import Router from '../components/Router';
import Main from '../components/Main';


export default function Index({
  list = [{
    'color': '',
    'title': '',
    'gist': '',
    'author': { 'name': "", 'picture': "" },
    'list': '',
    'date': '',
    'slug': '',
    'wc': '',
    'coverImage': ''
  }],
  feature = {
    'color': '',
    'title': '',
    'author': { 'name': "", 'picture': "" },
    'list': '',
    'gist': '',
    'content': '',
    'date': '',
    'slug': '',
    'wc': '',
  },
  grad = ''
}) {
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (search !== "") {
      const seachQuery = search.trim().toLowerCase();
      const res = list.flat().reduce(function (pV, cV) {
        if (cV.title.toLowerCase().includes(seachQuery)) {
          pV.push(cV);
        }
        return pV;
      }, [])
      setSearchList(res)
    }
  }, [search])

  return (
    <>
      <Main grad={grad} search={search} setSearch={setSearch}>
        <section id={styles.home}>
          {
            (search !== "") &&
            ((searchList.length !== 0) ?
              searchList.map(x => <FeaturePost post={x} />)
              :
              <span className='container'>No articles found. Please rephrase your search</span>)
          }
          {(search === "") && <FeaturePost post={feature} />}
        </section>
      </Main>
      <Lists list={list} />
    </>
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

  return {
    props: { list: list.list, feature: list.feature, grad: list.grad }
  }
}
