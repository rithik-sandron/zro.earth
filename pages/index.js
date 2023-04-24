import React, { useState, useEffect } from 'react';
import { getAllPosts } from './api/api';
import FeaturePost from '../components/FeaturePost'
import Lists from '../components/Lists';
import styles from '../styles/Index.module.css';
import Main from '../components/Main';


export default function Index({
  list = [{
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
    'title': '',
    'author': { 'name': "", 'picture': "" },
    'list': '',
    'gist': '',
    'content': '',
    'date': '',
    'slug': '',
    'wc': '',
  }
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
      <Main search={search} isSearch setSearch={setSearch}>
        <section id={styles.home}>
          {
            (search !== "") &&
            ((searchList.length !== 0) ?
              searchList.map(x => <FeaturePost post={x} />)
              :
              <span className='container'>No articles found. Please rephrase your search</span>)
          }

          {(search === "") &&
            <>
              <FeaturePost post={feature} />
              <Lists list={list} />
            </>
          }
        </section>

      </Main>
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
  ])

  return {
    props: { list: list.list, feature: list.feature }
  }
}
