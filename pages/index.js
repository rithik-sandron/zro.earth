import { getAllPosts } from '../lib/api.js'
import HighlightContent from '../components/HighlightContent'
import Layout from '../components/Layout.js';
// import Search from "../components/Search";
import List from '../components/List.js';
import Tip from '../components/Tips.js';

export default function Index({ news =
  {
    'title': '',
    'author': '',
    'list': '',
    'date': '',
    'slug': '',
    'coverImage': '',
  }, anime =
  {
    'title': '',
    'author': '',
    'list': '',
    'date': '',
    'slug': '',
    'coverImage': '',
  }, movies =
  {
    'title': '',
    'author': '',
    'list': '',
    'date': '',
    'slug': '',
    'coverImage': '',
  }, dev =
  {
    'title': '',
    'author': '',
    'list': '',
    'date': '',
    'slug': '',
    'coverImage': '',
  }, tips =
  {
    'author': '',
    'list': '',
    'date': '',
    'slug': '',
  } }) {

  const heroPost = news[4];
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
      <HighlightContent
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
      <List posts={news} bg='#03C988' fore='#222' />
      <List posts={dev} bg='#7743DB' fore='#222' />
      <List posts={anime} bg='#FC7300' fore='#222' />
      <List posts={movies} bg='#F55050' fore='#222' />
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
    // 'count'
  ])

  const anime = getAllPosts('anime', [
    'title',
    'author',
    'list',
    'date',
    'slug',
    'coverImage',
    // 'count'
  ])

  const movies = getAllPosts('movies', [
    'title',
    'author',
    'list',
    'date',
    'slug',
    'coverImage',
    // 'count'
  ])

  const dev = getAllPosts('dev', [
    'title',
    'author',
    'list',
    'date',
    'slug',
    'coverImage',
    // 'count'
  ])


  const tips = getAllPosts('tips', [
    'content',
    'date',
    'slug',
    'list',
    // 'count'
  ])

  return {
    props: { news, anime, movies, dev, tips },
  }
}
