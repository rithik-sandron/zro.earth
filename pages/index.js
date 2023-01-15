import { getAllPosts } from '../lib/api.js'
import Header from './Header'
import HighlightContent from './HighlightContent'
import ContentList from './ContentList'

export default function Index({ allPosts }) {
  const headPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div id='common-body'>
      <Header />
      <HighlightContent post={headPost} />
      <ContentList posts={morePosts} />
    </div>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
  ])

  return {
    props: { allPosts },
  }
}
