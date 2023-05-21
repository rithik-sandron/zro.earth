import styles from './styles/Index.module.css';
import Router from '../components/Router';
import { notFound } from 'next/navigation';
import { allBlogs } from 'contentlayer/generated';
import PostMetaData from '../components/PostMetaData';

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
                <PostMetaData post={post} doNeedGist={true} />
            </Router>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>All posts</h1>
            <hr/>
            <div className='wrap-container'>
                {
                    allBlogs.map((item, i) => {
                        return (
                            <Router url={item.slug}>
                                <PostMetaData post={item} doNeedGist={false} />
                            </Router>
                        )

                    })
                }
            </div>
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
