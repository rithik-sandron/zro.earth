import { getAllPosts } from '../lib/api.js'
import Head from 'next/head'
import Header from './Header'
import ContentList from './ContentList'

export default function Index({ allPosts }) {
  const morePosts = allPosts.slice(1)
  return (
    <div id='common-body'>
      <Head>
        <title>Ken</title>
      </Head>
      <Header />
      <ContentList posts={morePosts}/>
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
