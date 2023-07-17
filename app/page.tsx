import Router from '../components/Router';
import { notFound } from 'next/navigation';
import { allBlogs } from 'contentlayer/generated';
import PostMetaData from '../components/PostMetaData';

export default async function Index() {
    const recent_post = allBlogs[0];
    if (!recent_post) {
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
            <Router url={recent_post.slug}>
                <PostMetaData post={recent_post} doNeedGist={true} />
            </Router>
            <hr />
            <h2>All posts</h2>
            <div className='wrap-container'>
                {
                    allBlogs.map((item, i) => {
                        if (i > 0)
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
