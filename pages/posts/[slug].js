import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { getPostBySlug, getAllPosts } from '../../lib/api.js'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import Header from '../Header'



export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div id='common-body'>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
      </Head>
      <Header />

      <main>
        {router.isFallback ?
          <h2>Loading…</h2>
          :
          <article className='blog'>
            <Head>
              <title>{post.title} </title>
              <meta property="og:image" content={post.coverImage} />
            </Head>

            <div className='author-flex-container'>
              <img className='profile-image' src={post.author.picture} alt={post.author.name} />
              <div className='author-flex'>
                <span className='author-item'>{post.author.name}</span>
                <time className='author-item' dateTime={post.date}>{post.date}</time>
              </div>
            </div>

            <h1>{post.title}</h1>

            <img className='image' src={post.coverImage} alt={`Cover Image for ${post.title}`} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        }
      </main>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
