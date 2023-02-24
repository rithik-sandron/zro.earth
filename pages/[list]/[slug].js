import { getPostBySlug, getAllPostsAsPath } from '../../lib/api.js'
import markdownToHtml from '../../lib/markdownToHtml'
import Layout from '../../components/Layout.js'
import Blog from '../../components/Blog.js'
import { useRouter } from 'next/router'

export default function Post({
  post = { title: "", date: "", slug: "", author: { name: "", picture: "" }, content: "", lines: 0 }
}) {

  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Layout bg={post.color.bg} fore={post.color.fore}
      title={post.title}>
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
  const post = getPostBySlug(params.list, params.slug, [
    'title',
    'date',
    'list',
    'slug',
    'author',
    'content',
    'color',
  ])

  const [content, lines] = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
        lines
      }
    },
  }
}
