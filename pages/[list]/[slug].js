import { getPostBySlug, getAllPostsAsPath } from '../api/api'
import Blog from '../../components/Blog.js'
import Main from '../../components/Main'

export default function Post({
  post = {
    'title': "", 'date': "", 'slug': "",
    'gist': '',
    'author': { name: "", picture: "" },
    'content': "",
    'wc': '',
  }
}) {

  return (
    <Main title={post.title} desc={post.gist} isSearch>
      <Blog post={post} />
    </Main >
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
  ])

  return {
    props: {
      post: post
    },
  }
}
