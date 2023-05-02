import styles from './styles/Index.module.css';
import Router from '../components/Router';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allBlogs } from 'contentlayer/generated';
import PostMetaData from '../components/PostMetaData';

export const metadata: Metadata = {
    title: 'ZRO',
    description: 'A place where you can find articles related to Anime, Movies, TV shows, Game, Food, Restaurants etc..',
};

export default async function Index() {
    const post = allBlogs[0]
    if (!post) {
        notFound();
    }
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
            <Router url={post.slug}>
                <PostMetaData post={post} />
                <br />
                <br />
            </Router>
            {
                allBlogs.map((item, i) => {
                    return (
                        <div className='container' key={i}>
                            <h3>{item.list}</h3>
                            <Router url={item.slug} key={item.slug} className={styles.item}>
                                <h2>{item.title}</h2>
                                <span>
                                    <li>{item.date}</li>
                                    {/* <li>{post.wc}</li> */}
                                </span>
                            </Router>
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
