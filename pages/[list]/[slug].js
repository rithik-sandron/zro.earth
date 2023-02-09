import { getPostBySlug, getAllPosts } from '../../lib/api.js'
import markdownToHtml from '../../lib/markdownToHtml'
import Layout from '../../components/Layout.js'
import Blog from '../../components/Blog.js'


export default function Post({
  post = { title: "", date: "", slug: "", author: { name: "", picture: "" }, coverImage: "" }
}) {

  return (
    // <Layout bg={bg} fore={fore}>
    <Layout>
      <main>
        <Blog
          post={post}
        />
      </main>
    </Layout>
  )
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

export async function getStaticProps({ params }) {
  console.log(params)
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
