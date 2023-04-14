import { getPostBySlug, getAllPostsAsPath } from '../api/api'
import Layout from '../../components/Layout.js'
import Blog from '../../components/Blog.js'

export default function Post({
  post = {
    'title': "", 'date': "", 'slug': "",
    'gist': '',
    'author': { name: "", picture: "" },
    'content': "",
    'wc': '',
    'color': ''
  }
}) {

  return (
    <Layout title={post.title} desc={post.gist} hideSearch>
      <Blog post={post} />
    </Layout >
  )
}

export async function getStaticPaths() {
  const list = getAllPostsAsPath(['slug', 'list'])
  return {
    paths: list.map(post => {
      return {
        params: {
          slug: post.slug,
          list: post.list,
        },
      }
    }),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  let post = getPostBySlug(params.list, params.slug, [
    'title',
    'date',
    'list',
    'slug',
    'author',
    'content',
    'gist',
    'wc',
    'color',
  ])

  return {
    props: {
      post: post
    },
  }
}
