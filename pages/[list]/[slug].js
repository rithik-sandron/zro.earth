import { getPostBySlug, getAllPosts } from '../../lib/api.js'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import Layout from '../../components/Layout.js'
import React, { useEffect, useState } from 'react'
import Link from 'next/link.js'



export default function Post({
  post = { title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "", tagsWithColors: [{ tag: "", color: "" }] }
}) {

  const [bg, setBg] = useState('');
  const [fore, setFore] = useState('');

  useEffect(() => {
    let image = new Image();
    image.src = post.coverImage;
    image.onload = () => {
      let canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(image, 0, 0);
      let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const imageLength = Math.round((imageData.data.length - 1) / 3);

      setBg(`rgb(${imageData.data[imageLength]}, ${imageData.data[imageLength + 1]}, ${imageData.data[imageLength + 2]})`);
      setFore(`rgb(${255 - imageData.data[imageLength]}, ${255 - imageData.data[imageLength + 1]}, ${255 - imageData.data[imageLength + 2]})`);
    }
  }, [])

  return (
    <Layout>
      <main>
        <article>
          <Head>
            <title>{post.title}</title>
            <meta property="og:image" content={post.coverImage} />
          </Head>

          {/* <h1>{post.title}</h1> */}
          <div className='head-content'>
            <div key={post.slug} className='head-content-container'
              style={{ border: `1px solid ${fore}`, boxShadow: `14px 14px 0 ${fore}` }}>
              <img src={post.coverImage} className='image' alt='coverImage' />
              <h1 className='post' style={{
                color: fore, backgroundColor: bg
              }}>{post.title}</h1>
            </div>
          </div>

          <Link
            as={`/authors/${post.author.name}`}
            href="/authors/[name]">
            <div className='author-flex-container'>
              <img className='profile-image' src={post.author.picture} alt={post.author.name}
                style={{ border: `1px solid ${fore}`, boxShadow: `5px 5px 0 ${fore}` }}
              />
                <div className='author-flex'>
                  <span className='author-item'>{post.author.name}</span>
                  <time className='author-item' dateTime={post.date}>{post.date}</time>
                </div>
            </div>
          </Link>

          {/* <img className='post-image' src={post.coverImage} alt={`Cover Image for ${post.title}`} /> */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} className='blog' />
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
