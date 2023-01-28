import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { getPostBySlug, getAllPosts } from '../../lib/api.js'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import Layout from '../../components/Layout.js'
import React from 'react'
import Link from 'next/link.js'



export default function Post({
  post = { title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "", tagsWithColors: [{ tag: "", color: "" }] }
}) {

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <main style={{ paddingTop: '1em' }}>
        {router.isFallback ?
          <h2>Loading…</h2>
          :
          <article className='blog'>
            <Head>
              <title>{post.title} </title>
              <meta property="og:image" content={post.coverImage} />
            </Head>

           
            <h1>{post.title}</h1>
            <img className='image' src={post.coverImage} alt={`Cover Image for ${post.title}`} />

            <Link
              as={`/authors/${post.author.name}`}
              href="/authors/[name]">
              <div className='author-flex-container'>
                <img className='profile-image' src={post.author.picture} alt={post.author.name} />
                <div className='author-flex'>
                  <span className='author-item'>{post.author.name}</span>
                  <time className='author-item' dateTime={post.date}>{post.date}</time>
                </div>
              </div>
            </Link>

            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        }
      </main>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  console.log(params)
  const post = getPostBySlug('anime', params.slug, [
    'title',
    'date',
    'list',
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
  const posts = getAllPosts('', ['slug', 'list'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
          list: post.list,
        },
      }
    }),
    fallback: false,
  }
}
