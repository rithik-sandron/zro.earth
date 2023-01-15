import { getAllPosts, hashCode } from '../lib/api.js'
import Header from './Header'
import HighlightContent from './HighlightContent'
import ContentList from './ContentList'

export default function Index({ allPosts, color }) {
  const headPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  console.log(allPosts)

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
    'tags',
    'tagsWithColors'
  ])

  allPosts.forEach(x => {
    x.tagsWithColors = [];
    x.tags.forEach(y => {
      let color = hashCode(y);
      x.tagsWithColors.push({ tag: y, color: color });
    })
  })

  return {
    props: { allPosts },
  }
}
