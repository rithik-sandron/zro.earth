import { getAllPosts } from '../lib/api.js'
import FeaturePost from '../components/FeaturePost'
import Layout from '../components/Layout.js';
// import Search from "../components/Search";
import Tip from '../components/Tips.js';
import Lists from '../components/Lists.js';


export default function Index({
  list = [{
    'title': '',
    'author': { name: "", picture: "" },
    'list': '',
    'date': '',
    'slug': '',
    'coverImage': '',
  }],
  tips = {
    'author': '',
    'list': '',
    'date': '',
    'slug': '',
  } }) {
  const heroPost = list[0][4];
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
      <FeaturePost
        title={heroPost.title}
        coverImage={heroPost.coverImage}
        author={heroPost.author}
        slug={heroPost.slug}
        list={heroPost.list}
      />

      {/* <Search search={search} setSearch={setSearch} /> */}
      {/* {(search !== "" && f.length === 0) && <div style={{ width: '90%', margin: '0 auto', padding: '1em 3.4em' }}>No posts found for your search</div>} */}
      {/* <ContentList posts={search !== "" ? f : morePosts} search={search} /> */}

      <Tip post={tips[0]} title='quick tip' />
      <Lists list={list}/>
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

  const dev = getAllPosts('dev', [
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
    'list',
  ])
  return {
    props: { list: [news, anime, movies, dev], tips: tips },
  }
}
