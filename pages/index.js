import { getAllPosts } from '../lib/api'
import FeaturePost from '../components/FeaturePost'
import Layout from '../components/Layout';
// import Search from "../components/Search";
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
    'date': '',
    'slug': '',
    'wc': '',
    'coverImage': '',
  }
}) {
  // const [search, setSearch] = useState('');
  // const [f, setf] = useState([]);

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
    <Layout>
      <FeaturePost post={feature} />

      {/* <Search search={search} setSearch={setSearch} /> */}
      {/* {(search !== "" && f.length === 0) && <div style={{ width: '90%', margin: '0 auto', padding: '1em 3.4em' }}>No posts found for your search</div>} */}
      {/* <ContentList posts={search !== "" ? f : morePosts} search={search} /> */}

      <Lists list={list} />
    </Layout>
  )
}

export const getStaticProps = async () => {

  const list = getAllPosts([
    'title',
    'list',
    'date',
    'slug',
    // 'content',
    'wc',
    'color',
  ])

  return {
    props: { list: list.list, feature: list.feature }
  }
}
