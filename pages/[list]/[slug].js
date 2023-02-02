import { getPostBySlug, getAllPosts } from '../../lib/api.js'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import Layout from '../../components/Layout.js'
import React from 'react'
import Link from 'next/link.js'



export default function Post({
  post = { title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "", tagsWithColors: [{ tag: "", color: "" }] }
}) {

  return (
    <Layout>
      <main>
        <article className='blog'>
          <Head>
            <title>{post.title}</title>
            <meta property="og:image" content={post.coverImage} />
          </Head>

          <h1>{post.title}</h1>
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
          
          <img className='post-image' src={post.coverImage} alt={`Cover Image for ${post.title}`} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

      </main>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.list, params.slug, [
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
    paths: posts.map(post => {
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
