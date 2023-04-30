// import React, { useState, useEffect } from 'react';
import { getAllPosts } from '../lib/api';
import styles from './styles/Index.module.css';
import Router from '../components/Router';
import type { Metadata } from 'next';
import PostMetaData from '../components/PostMetaData';

async function getData() {
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

export const metadata: Metadata = {
    title: 'ZRO',
    description: 'A place where you can find articles related to Anime, Movies, TV shows, Game, Food, Restaurants etc..',
};

export default async function Index() {
    const data = await getData();
    // const [search, setSearch] = useState('');
    // const [searchList, setSearchList] = useState([]);

    // useEffect(() => {
    //     if (search !== "") {
    //         const seachQuery = search.trim().toLowerCase();
    //         const res = list.flat().reduce(function (pV, cV) {
    //             if (cV.title.toLowerCase().includes(seachQuery)) {
    //                 pV.push(cV);
    //             }
    //             return pV;
    //         }, [])
    //         setSearchList(res)
    //     }
    // }, [search])

    return (
        <>
            <Router url={data.props.feature.list + '/' + data.props.feature.slug}>
                <PostMetaData post={data.props.feature} />
            </Router>
            {
                data.props.list.map((item, i) => {
                    return (
                        item.length > 0 &&
                        <div className='container' key={i}
                            style={{ marginTop: '2em' }}>
                            <h3>{item[0].list}</h3>
                            {item.map(post => {
                                return (
                                    <Router url={post.list + "/" + post.slug} key={post.slug} className={styles.item}>
                                        <h2>{post.title}</h2>
                                        <span>
                                            <li>{post.date}</li>
                                            <li>{post.wc}</li>
                                        </span>
                                    </Router>
                                )
                            })}
                        </div>
                    )

                })
            }
            {/* <input className={styles.input} placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)} /> */}

            {/* <section id={styles.home}>
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
            </section> */}
        </>
    )
}
