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

  useEffect(() => {
    // time
    let date = document.querySelectorAll('.time');
    if (date) {
      date.forEach(x => {
        setInterval(() => {
          const date = new Date();
          x.innerHTML = date.toDateString() + ' ' + date.toLocaleTimeString();
        }, 1000)
      })
    }

    // clock
    let clock = document.querySelectorAll('.clock');
    if (clock) {
      clock.forEach(x => {
        setInterval(() => {
          const date = new Date();
          x.innerHTML = `${date.toDateString()}<div class='clock-time'>${date.toLocaleTimeString()}</div>`;
        }, 1000)
      })
    }

    // accordion
    document.querySelectorAll('.ken-accordion').forEach(x => {
      x.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.target.dataset.show === 'no') {
          e.target.parentElement.lastChild.style.height = e.target.parentElement.lastChild.scrollHeight + 'px';
          e.target.parentElement.lastChild.style.overflow = 'visible';
          e.target.parentElement.lastChild.style.opacity = '1';
          e.target.parentElement.lastChild.style.padding = '1em 1em 1em 1.4em';
          e.target.setAttribute("data-show", "yes");
          e.target.className = 'accordion-expand';

        } else if (e.target.dataset.show === 'yes') {
          e.target.parentElement.lastChild.style.height = '0';
          e.target.parentElement.lastChild.style.opacity = '0';
          e.target.parentElement.lastChild.style.overflow = 'hidden';
          e.target.parentElement.lastChild.style.padding = '0';
          e.target.setAttribute("data-show", "no");
          e.target.className = 'accordion-close';
        }
      })
    });

    // tabs
    document.querySelectorAll('.seperate-tab-heading').forEach(x => {
      x.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        e.target.parentElement.childNodes.forEach(y => {
          y.style.backgroundColor = 'transparent';
        });

        e.target.style.backgroundColor = '#55555540';
        e.target.parentElement.nextSibling.childNodes.forEach(z => {
          if (z.dataset.id === e.target.dataset.id) {
            z.style.display = 'block';
          } else {
            z.style.display = 'none';
          }
        })
      })
    });
  }, [])



  return (
    <Layout>
      <main>

        <article>
          <Head>
            <title>{post.title}</title>
            <meta property="og:image" content={post.coverImage} />
          </Head>

          <div
            style={{
              maxWidth: '1200px', margin: 'auto'
            }}>
            <div key={post.slug} >
              <img src={post.coverImage} className='post-image' alt='coverImage' />
              <h1 style={{
                fontSize: 'calc(3em + 0.8vw)',
                padding: '0.4em', margin: '0',
                color: fore, backgroundColor: bg
              }}>{post.title}</h1>
            </div>
          </div>

          <Link
            as={`/authors/${post.author.name}`}
            href="/authors/[name]">
            <div className='author-flex-container'>
              <img className='profile-image' src={post.author.picture} alt={post.author.name}
              // style={{ border: `1px solid ${fore}`, boxShadow: `3px 3px 0 ${fore}` }}
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
