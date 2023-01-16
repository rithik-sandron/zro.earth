import { useRouter } from 'next/router'
import ErrorPage from 'next/error'

import { getPostBySlug, getAllPosts, hashCode } from '../../lib/api.js'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import Layout from '../../components/Layout.js'
import React from 'react'
import Link from 'next/link.js'



export default function Post({ morePosts, preview,
  post = { title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "", tagsWithColors: [{ tag: "", color: "" }] }
}) {

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  
  return (
    <Layout>
      <main>
        {router.isFallback ?
          <h2>Loading…</h2>
          :
          <article className='blog'>
            <Head>
              <title>{post.title} </title>
              <meta property="og:image" content={post.coverImage} />
            </Head>

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

            <div className='hashtag-container'>
              {
                post.tagsWithColors.map(tag => {
                  return (
                    <span style={{ color: tag.color, backgroundColor: tag.color + '30' }} className='hashtag' key={tag.tag}>{tag.tag}</span>)
                })
              }
            </div>
            <h1>{post.title}</h1>

            <img className='image' src={post.coverImage} alt={`Cover Image for ${post.title}`} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        }
      </main>
    </Layout>
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
    'tags'
  ])

  post.tagsWithColors = [];
  post.tags.forEach(y => {
    let color = hashCode(y);
    post.tagsWithColors.push({ tag: y, color: color });
  })

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
